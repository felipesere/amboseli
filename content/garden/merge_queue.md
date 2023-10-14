+++
title = "Merge Queue"
date = "2023-10-14T22:45:26Z"
tags = [  ]
[extra]
growth = "seedling"
+++

# Merge Queue

At work we use both `dependabot` and `renovate` to get all sorts of automatic updates (Rust dependencies, Helm chart updates, Docker image updates) and they become tedious.
Our normal procedure is that anything merged into our default branch `main` should get tagged and deployed.
On any given day we get something like 5 updates.

We want to think through how we could get these merged with minimal human interaction and as much safety as possible.

## Enter the Merge Queue

This does not exist yet (I think) or at least we don't use it yet.
I want to envision a system that does the following:

* on a given day of the week, create a new "dashboard PR" and branch `queue` of `main` into which we will collect trivial PRs to merge.
* go onto each PR that I want to add to this queue and leave a comment `/enqueue`
* for each PR with `/enqueue`, it will:
    * check if CI passed for the branch/PR itself
    * create a new branch `$original-enqueued` from the PR branch
    * rebase `queue` into `$original-enqueued` to bring it up to date. (is there a way to solve trivial merge conflicts?)
    * if CI fails for `$original-enqueued`, it will leave a comment and skip this PR
    * if CI passes, then `$original-enqueued` is merged into `queue`
    * if CI fails, the last merge from `queue` will be removed. (maybe this is not needed?)
    * if CI passes for `queue`, it will leave a comment on the original PR.

At some point users would see that the "dashboard PR" has collected a bunch of updates that can be tested/merged/deployed with just a simple click.

An advanced version of this would automatically `/enqueue` PRs that come from `dependabot` or `renovate`.

An additional variant could be `/enqueue skip-ci` or something to cut down on the amount of CI that needs to run.

