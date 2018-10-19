FROM node:8
WORKDIR /usr/src/aukle3000
COPY . .

RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
