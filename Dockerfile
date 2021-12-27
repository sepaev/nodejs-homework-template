FROM node:14.16.1-alpine

WORKDIR /server

COPY ./package.json .
RUN npm install

COPY . .

EXPOSE 4325

CMD npm start 

# docker build --rm -t sepaev/docker:goit .