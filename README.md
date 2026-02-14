# Icecream Website - Docker Deployment

## Overview
This project demonstrates containerizing a static website using Docker and NGINX.

## Technologies
- Linux (WSL/Kali)
- Docker
- NGINX
- Git & GitHub

## Docker Build
docker build -t icecream-app:v1 .

## Run Container
docker run -d -p 8080:80 --name icecream icecream-app:v1

## Screenshots

### Docker Build Success
![Build](screenshots/docker-build-success.png)

### Running Container
![Container](screenshots/docker-running-container.png)

### Application Running
![App](screenshots/app-running.png)

## Skills Demonstrated
- Docker image creation
- Container deployment
- Port mapping
- Linux CLI usage
- Git version control

