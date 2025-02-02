FROM node:10.20.1-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]