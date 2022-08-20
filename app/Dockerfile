FROM node:16

WORKDIR /usr/src/app

COPY app/server.js server.js

COPY node_modules node_modules

EXPOSE 3000

CMD [ "node", "server.js" ]