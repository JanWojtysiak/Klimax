FROM node:24-alpine

WORKDIR /app

COPY package* ./

RUN npm install

CMD ["npm", "start"]