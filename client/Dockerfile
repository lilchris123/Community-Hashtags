#  Dockerfile for React Client (development)

FROM node:10.16-alpine

# ARG NODE_ENV=development

# Create App Directory
WORKDIR /usr/src/app/client

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
EXPOSE 3000

# Install Dependencies & npm start from each package
CMD ["npm","start"]