FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

RUN mv .env.example .env

EXPOSE 3000

CMD [ "npm", "run", "start"]
