FROM node:14.5.0-alpine3.10

WORKDIR /app

COPY . ./

RUN npm i

RUN yarn build

RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "build"]
