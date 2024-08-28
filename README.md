# Go Docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/14cd4a08-5d30-4600-a545-8c0f8685d463/deploy-status)](https://app.netlify.com/sites/loquacious-chaja-aea111/deploys)

**Go** is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but also has memory safety, garbage collection, structural typing, and CSP-style concurrency. It is often referred to as **Golang** because of its former domain name, `golang.org`, but its proper name is Go.

## Environment

```bash
# Create environment
conda env create -f environment.yml
# Activate environment
conda activate docs
# Deactivate environment
conda deactivate
```

## Mirror

```bash
yarn config set registry http://mirrors.cloud.tencent.com/npm/
```

## Development

```bash
make install
make dev
```

## Build

```bash
make build
```
