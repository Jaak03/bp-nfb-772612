FROM node:18.18.2-bullseye-slim

RUN apt-get update && apt-get install -y git
RUN npm install -g firebase-tools

WORKDIR /app