FROM node:16 as base

WORKDIR /usr

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

COPY package-lock*.json ./

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]