#  Dockerfile for Node Express Backend api (development)

FROM node:10.16-alpine

# ARG NODE_ENV=development

# Create App Directory
WORKDIR /usr/src/app/server

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
EXPOSE 8081

# Install Dependencies & npm start from each package
CMD ["npm","run","server"]