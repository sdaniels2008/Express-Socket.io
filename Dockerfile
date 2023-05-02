FROM node:10

COPY . /app

RUN npm ci

WORKDIR /app

CMD npm start
