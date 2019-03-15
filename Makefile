all: build

build:
	docker-compose build

docs:
	( cd docs ; bundle exec jekyll serve --livereload)


.PHONY: all build docs
