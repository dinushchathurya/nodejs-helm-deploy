FROM node:16

WORKDIR /usr/src/app

COPY userservice/server.js server.js

COPY node_modules node_modules

EXPOSE 4000

CMD [ "node", "server.js" ]