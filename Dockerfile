FROM node:14.17.0-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./ .

RUN yarn

EXPOSE 4000

CMD [ "yarn", "start" ]