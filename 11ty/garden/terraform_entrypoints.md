---
title: Terraform Entrypoints
date: 2021-06-09 08:00:13
tags: [terraform]
growth: seedling
---

When working with Terraform in a dedicated infrastructure repository, we often see
`main.tf` and similar files scattered directly in the root.
This is so we can jump into the repo and immediately run `terraform plan` and `terraform apply`.
Folder are then used for modules that need to be sourced in those top-level Terraform files.

But that is not the only way to structure Terraform files!
To Terraform, any folder where you run `terraform plan` is essentially an entrypoint.
It will look for its `terraform { ...}` block with configuration for `backends` and `providers`.
On our projects, we have been following a pattern where we create at least two of these entrypoints: `roles` and `infra`.

The `roles` entrypoint has a single purprose: create application specific roles that can be used in the `infra` entrypoint to provision any infrastructure our application needs.
The `infra` entrypoint on the other hand creates any infra we need. Its reach is bounded by whatever permissions were granted to it in the `roles` entrypoint.

Sometimes we will create more entrypoints with dedicated purproses: `shared-infra` for resources that are shared across multiple environments (e.g. AWS ECRs) or `datadog` (_or other monitoring tool_) where we define application/tool-specific resources.
