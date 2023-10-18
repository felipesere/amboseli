+++
title = "Auto Batching"
date = "2023-10-14T22:45:26Z"
tags = [  ]
[extra]
growth = "seedling"
+++

At work we use both `dependabot` and `renovate` to get all sorts of automatic updates (Rust dependencies, Helm chart updates, Docker image updates) and they become tedious.
Our normal procedure is that anything merged into our default branch `main` should get tagged and deployed.
On any given day we get something like 5 updates.

We want to think through how we could get these merged with minimal human interaction and as much safety as possible.
Also, we don't want to cause loads of deployments to go out because those need to be merged to and we'd just be moving the toil somewhere else.

## Enter the Auto Batching

This does not exist yet (I think) or at least we don't use it yet.
I want to envision a system that does the following:

* on a given day of the week, create a new "dashboard PR" and branch `batch` of `main` into which we will collect trivial PRs to merge.
* go onto each PR that we want to add to this batch and leave a comment `/batch` (could also be automatic)
* for each PR with `/batch`, it will:
    * check if CI passed for the branch/PR itself
    * create a new branch `$original-pre-batch` from the PR branch
    * rebase `batch` into `$original-pre-batch` to bring it up to date. (is there a way to solve trivial merge conflicts?)
    * if CI fails for `$original-pre-batch`, it will leave a comment and skip this PR
    * if CI passes, then `$original-pre-batch` is merged into `batch`
    * if CI fails for `batch`, the last merge will be removed.
      This should happen infrequently, thus maybe this is not needed?
    * if CI passes for `batch`, it will leave a comment on the original PR as well as a comment on the Dashboard (e.g. #closes $original)
    * proceed to the next PR
    *
One the dashboard PR is merged then the system should go ahead and close all other PRs.

At some point users would see that the "dashboard PR" has collected a bunch of updates that can be tested/merged/deployed with just a simple click.

An advanced version of this would automatically `/batch` PRs that come from `dependabot` or `renovate`.

An additional variant could be `/batch skip-ci` or something to cut down on the amount of CI that needs to run.

## Complex questions that may or may not need answering:

> Is there a way to handle merge conflicts?

Whether by doing a `git rebase` of `batch` into some `$original-pre-batch` branch of doing a straight-up merge,
merge conflicts are bound to happen.
Not all can be solved.
A classic example is PR-1 renamed a function and PR-2 adds new reference.
Combined they don't work, but they mot change overlapping text and thus lead to an implicit, not explicit merge conflict.
This should be caught by CI.
But even obvious merge conflicts are hard to resolve.
For some static files such as Rusts `Cargo.toml` and `Cargo.lock` there could be a way to define a strategy.

> What happens when the `main` branch gets an update?

It should be OK to just rebase the `batch` branch with latest main.
If it fails due to a conflict a comment can be left and the batch "abandonned".
If it can be cleanly rebased and all the CI checks are good, it should be good to merge.
It does depend a little on the repository having setup branch protection, which is an individual choice.

> What happens when the update to `main` makes `batch` unmergeable (conflicts) or makes it fail CI?
As said, leave as is. Maybe add a comment explaining.
According to the repo rules it should not be mergeable and a human can go ahead and fix it.

> What happens when an PR already merged into `batch` gets an update? Force push that changes ID?

## State machine of a given PR

{% mermaid() %}
---
title: From new PR to merged into batch
---
stateDiagram-v2
    state "PR Opened" as open
    state "Batched" as batched
    state "Rebased with latest batch" as rebased_with_batch
    state "Merged back into batch branch" as merged
    [*] --> open
    open --> [*] : CI failed
    open --> batched: CI passed
    batched --> rebased_with_batch
    rebased_with_batch --> [*]: CI failed
    rebased_with_batch --> merged: Ci passed
    merged --> [*]
{% end %}



## What a clean run could look like
{% mermaid() %}
---
title: Clean run of auto-batch
---
gitGraph
  commit
  commit
  branch r1
  branch r2
  branch r3
  branch batch
  checkout r1
  commit id: "r1"
  checkout r2
  commit id: "r2"
  checkout r3
  commit id: "r3"
  checkout batch
  branch batch-and-r1
  merge r1
  checkout batch
  merge batch-and-r1 id: "r1'"
  branch batch-and-r2
  checkout batch-and-r2
  merge r2
  checkout batch
  merge batch-and-r2 id: "r2'"
  branch batch-and-r3
  checkout batch-and-r3
  merge r3
  checkout batch
  merge batch-and-r3 id: "r3'"
  checkout main
  merge batch

{% end %}
