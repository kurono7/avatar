# pull the base image
FROM node:16

# set the working direction
WORKDIR /app

# add app
COPY . ./

# install app dependencies
COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]
