# Base
FROM node:22-alpine AS base

WORKDIR /srv/app
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

# Dev
FROM base AS dev
ENV MODE=dev

EXPOSE 1234
CMD ["sh", "-c", "printenv && yarn dev"]

# Prod
FROM base AS prod
ENV MODE=prod

EXPOSE 1234
CMD ["sh", "-c", "printenv && yarn dev"]