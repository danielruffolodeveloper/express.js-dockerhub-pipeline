FROM node:14-alpine

# Set build argument for GIT SHA
ARG GIT_SHA
ARG NODE_ENV
# Create app directory
WORKDIR /usr/src/app

# pass GIT SHA argument as a variable
ENV GIT_SHA=${GIT_SHA}
ENV NODE_ENV=${NODE_ENV}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]