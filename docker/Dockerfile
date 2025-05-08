FROM node:22-alpine

WORKDIR /srv/app
COPY package.json yarn.lock ./

RUN yarn install

COPY ../ ./

EXPOSE 1234

ENTRYPOINT [ "yarn" ]

CMD [ "dev" ]