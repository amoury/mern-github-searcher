FROM node:12.13.0-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm i 

COPY . /app

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "serve"]