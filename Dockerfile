FROM node:19-slim

WORKDIR /home/node/app

COPY . .

USER node

#EXPOSE 3000