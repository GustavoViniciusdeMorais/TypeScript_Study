FROM node:10-alpine

WORKDIR /home/node/app

RUN npm install

RUN npm install -g typescript

EXPOSE 8080

ENTRYPOINT ["tail", "-f", "/dev/null"]