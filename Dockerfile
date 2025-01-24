FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN mv .env.example .env

EXPOSE 3000

CMD [ "npm", "run", "dev"]