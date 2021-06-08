---
title: Terraform Developer Experience
date: 2021-06-08 18:10:13
tags: [terraform]
growth: seedling
---

Recently we have been working more and more to increase the adoption
of our shared Terraform modules across the client teams.
Doing that we noticed a nice little pattern: Within the source of a module
`foo` we include two more modules: `roles/provisioning` and `policy_documents/provisioning`.

Given they are nested, these are not automatically run as part of the main module.
Teams are intended to instantiate these modules in their `roles` entrypoint to
create the necessary IAM roles that _can provision the `foo` module_.

This pattern allows us to advocate for smaller roles while maintaining the ease of use.
