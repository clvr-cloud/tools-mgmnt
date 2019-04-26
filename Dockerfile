FROM node:10.15.3
RUN mkdir /app
WORKDIR /app

COPY ./ .
RUN npm install strapi@alpha -g
RUN npm install
RUN npm install sqlite3

EXPOSE 1337
CMD strapi start