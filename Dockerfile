FROM node:9
WORKDIR /app
COPY ./src/package.json ./
RUN npm install && npm cache clean --force
COPY ./src .
EXPOSE 80
CMD [ "npm", "start" ]