+++
title = "Rust on M1"
date = "2022-01-05 09:09:15"
tags = ["rust"]
[extra]
growth = "seedling"
+++

Installing [fnm](https://github.com/Schniz/fnm) on my new work M1 failed due to not being able to link `liblzma.dylib`.

<!-- more -->

The error says that
```bash
... ignoring file /opt/homebrew/Cellar/xz/5.2.5/lib/liblzma.dylib, building for macOS-x86_64 but attempting to link with file built for macOS-arm64
```

The clue is in `x86_64`: Homebrew installed properly for M1 (aka `aarch64`) which you can tell from the path `/opt/homebrew/` (its slightly differnet on Intel).

Running `rustup toolchain list` both on the work and personal M1 laptops, revealed the differnece:

work laptop:
```bash
$ rustup toolchain lists
stable-x86_64-apple-darwin
```

vs personal:

```bash
$ rustup toolchain lists
stable-aarch64-apple-darwin
```

My temporary "fix" is to add the `aarch64` target to rustup and specifically install `fnm` with it:

```bash
$ rutusp target add aarch64-apple-darwin
$ cargo install --target aarch64-apple-darwin fnm
[...lots of output...]
Installed package `fnm v1.28.2` (executable `fnm`)
```
