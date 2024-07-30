
FROM node:18.17.0-alpine

WORKDIR /app
 
COPY package*.json .

RUN npm install -g typescript

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]