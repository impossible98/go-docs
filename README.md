# Go Docs

**Go** is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but also has memory safety, garbage collection, structural typing, and CSP-style concurrency. It is often referred to as **Golang** because of its former domain name, `golang.org`, but its proper name is Go.

There are two major implementations:

- Google's self-hosting "gc" compiler toolchain, targeting multiple operating systems and WebAssembly.
- gofrontend, a frontend to other compilers, with the _libgo_ library. With GCC the combination is gccgo; with LLVM the combination is gollvm.

A third-party source-to-source compiler, GopherJS, compiles Go to JavaScript for front-end web development.

## Installation

```bash
make install
```

## Development

```bash
make dev
```

## Build

```bash
make build
```
