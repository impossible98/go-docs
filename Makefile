.POSIX:
SHELL := /bin/bash
YARN  := $(shell which yarn)

build: format
	$(YARN) run build
deploy: build
	netlify deploy --prod
dev:
	$(YARN) run dev
format:
	$(YARN) run format
install:
	$(YARN) install
### Git ###
log:
	git log --color --graph --pretty=oneline --abbrev-commit
