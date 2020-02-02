FROM node:12.14.1-alpine3.11

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN npm install

CMD ["npm", "start"]
