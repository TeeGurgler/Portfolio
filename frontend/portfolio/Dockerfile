FROM node:22-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm i -g serve
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]