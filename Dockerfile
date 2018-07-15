FROM node:6

WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean
RUN npm install
COPY . /usr/src/app

EXPOSE 9000
CMD ["npm","start"]