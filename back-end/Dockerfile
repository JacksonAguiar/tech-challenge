FROM node:16 as base

ENV DATABASE_URL="postgres://uuedqizy:KFyPPKekDOlErlHBtpRK_X4YpNmIVHLW@babar.db.elephantsql.com/uuedqizy?schema=public"

WORKDIR /usr

COPY package*.json ./

COPY tsconfig.json ./

COPY src ./src

COPY prisma ./prisma/ 

RUN ls -a

RUN npm install

RUN npx prisma generate

EXPOSE 4000

CMD ["npm","run","dev"]

