FROM node:8.12-alpine
RUN apk add ffmpeg python build-base

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
CMD [ "npm", "start" ]
