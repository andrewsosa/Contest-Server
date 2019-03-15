---
layout: default
title: User Manual
nav_order: 2
has_children: true
---

# User Manual
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


Addtional user manual docs can be found here:

[Configuration Guide](./configuration){: .btn .btn-outline }
[Extra Credit Guide](./extra-credit){: .btn .btn-outline }

---
## Introduction

This project consists of several discrete software components, which are as follows:

  - Registration Webapp
  - Domjudge Contest Server
  - Domjudge Judgehosts
  - MongoDB & MariaDB databases

All of the components of the project are deployed using Docker. Docker is a tool which containerizes software into small, light-weight virtual machines. Each of our primary components are deployed in their own Docker container.

#### Features
{: .no_toc }

  - User & Team Registration
    - Quick Registration of an entire team
    - Solo registration for individual participants
    - Team management features (add/remove members, rename)
  - Domjudge Integration
    - Simple deployment of Domserver & Judgehosts with Docker
    - Easy scaling of Judgehost instances

Historically, our software has been hosted on the Bastion server (`bastion.cs.fsu.edu`). This guide

---
## Accessing the Bastion server

Bastion is an ACM-owned server stored in the faculty research server room (closet) on the basement level in the Love Bldg. In order to connect via ssh, you will need a superuser on the server to create an account for you.

Once you have an account, you will either need `sudo` privileges, or to be added to the `docker` user group in order to update/deploy the software.

You must be connected to the CS network (e.g. CSWLAN) or on a CS server (e.g. linprog)

---
## Configuring Networking

### Setting up Nginx

Nginx serves as a reverse proxy to the Docker containers. The recommended configuration for Nginx can be found [in the repo](https://github.com/FSU-ACM/Contest-Server/blob/master/config/nginx/bastion.conf).

__Nginx, as of writing this, is already configured__. However, the following serves as instruction on re-creating that setup.

1. Copy the configuration into `/etc/nginx/sites-available/bastion.conf`.

    You can either copy the file into that location, or paste the file contents in using your editor of choice.

2. Link the configuration as active.

    ``` bash
    sudo ln -s /etc/nginx/sites-available/bastion.conf /etc/nginx/sites-enabled
    ```

### Adding HTTPS

Because we're hosted on FSU webservers, we're legally required to provide SSL/TLS (HTTPS) support. It's also a stupid idea not to.

Here are two links to applicable guides:
- [Cerbot Official Guide](https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx)
- [DigitialOcean Guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04)

---
## Deploying Domjudge

Domjudge is an open-source coding contest judging system. You can find specific usage instructions [on their website](https://www.domjudge.org/). These steps will focus on getting Domjudge and Judgehosts up and running on Bastion.

You can either remove the old questions from within the app, or by cleaning out the volume for the `domdb` service.

1. Start the webserver and database

    ``` bash
    docker-compose up -d domdb domserver
    ```

2. Log in to Domjudge and change the password. You'll be able to connect on port 8081, or simply at [domjudge.cs.fsu.edu](https://domjudge.cs.fsu.edu).

    The default user/pass is admin/admin. After logging in, in the "Overviews" menu select "Users", then click the pencil next to "Admin", then enter a password and click "Save".

3. Start some Judgehosts. Judgehosts are daemons which poll the Domserver for submissions and evaluate them.

    ``` bash
    docker-compose up -d judgehost
    ```

    You can view running judgehosts under "Overview" > "Judgehosts"

4. Scale new judgehosts. We recommend running 4 judgehosts.

    ``` bash
    docker-compose scale judgehost=4
    ```

---
## Deploying registration

1. First, build the webapp image. The webapp is the only image which needs to be built, all others are pulled from the Docker hub.

    ``` bash
    docker-compose build webapp
    ```

2. Before loading the new images, make sure to clear out the registration and domjudge databases.

3. Make sure the MongoDB `db` service has time to boot before starting the webapp.

    ``` bash
    # Start the db
    docker-compose up -d db

    # Wait for the db to be ready
    docker-compose logs -f db

    # Start the webapp
    docker-compose up -d webapp
    ```


