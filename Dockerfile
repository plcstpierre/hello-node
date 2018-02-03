FROM node:8-alpine

RUN apk add --no-cache tini

ENV NODE_ENV=production
ENV NODE_PATH=/app

WORKDIR /app

ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "node", "src/app" ]

COPY package.json yarn.lock ./
RUN yarn --pure-lockfile && yarn cache clean

COPY src src/