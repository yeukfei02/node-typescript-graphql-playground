FROM node:12.19.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./ .

RUN yarn

EXPOSE 4000

CMD [ "yarn", "start" ]