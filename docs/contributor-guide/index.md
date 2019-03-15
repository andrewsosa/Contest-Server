---
layout: default
title: Contributor Guide
nav_order: 3
---

# Contributor Guide
{: .no_toc }

Before reading the Contributor guide, please familiarize yourself with the [the introduction](../user-manual/#introduction) in the user manual.


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Overview

Here's a high-level overview of the different components of our software:

### Registration Webapp
The webapp is written in Python 3 (previously Python 2) using the Flask web microframework. Flask allows Python to act as an interactive web server which can dynamically render webpage templates, manage user sessions via secure cookies, and integrate with additional libraries to extend functionality. Some of the libraries we use include:

  - MongoEngine: A Object Document Manager which provides an API to the MongoDB database.
  - WTForms: A form creation and validation framework.
  - Jinja 2: A templating language bundled with Flask.
  - Node.js: A Javascript runtime environment.
  - Sass: A preprocessed stylesheet language.

The webapp depends on the `db` service in the Docker Compose config which runs the MongoDB database.

### Domjudge
DOMjudge is an automated judging system for running programming contests such as ACM's ICPC. Domjudge comes in two components: the Domserver and the Judgehosts.

Deploying the Domjudge components with Docker has several key advantages:

  - Script complex installation process via Dockerfile
  - Easily scale and redeploy Judgehosts

``` bash
# Scaling judgehosts
docker-compose scale judgehost=4
```

The Domsserver depends on the `domdb` service in the Docker Compose config which runs the MariaDB database.
