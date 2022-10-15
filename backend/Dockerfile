FROM node:10-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "run", "start"]
