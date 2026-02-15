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

# Dessert Palace Docker App

## Overview
This project demonstrates containerizing a frontend website using Docker and Nginx with a fake API container.

## Tech Stack
- Docker
- Nginx
- Docker Compose
- Linux (WSL)

## How to Run

docker-compose up -d

Frontend:
http://localhost:8080

Fake API:
http://localhost:5000

## Architecture

Browser → Frontend Container → Fake API Container

