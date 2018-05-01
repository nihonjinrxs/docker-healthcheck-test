FROM node:8.11.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN apk add --no-cache g++ make python curl && \
    npm install --production && \
    npm cache clean --force && \
    apk del g++ make
COPY . /usr/src/app

EXPOSE 4047

HEALTHCHECK --interval=2s --timeout=1s --start-period=10s --retries=3 \
    CMD node ./scripts/healthcheck.js

CMD [ "node", "app.js" ]
