FROM node:14-alpine

WORKDIR /server

# add '/server/node_modules/.bin' to $PATH
ENV PATH /server/node_modules/.bin:$PATH
# install application dependencies
COPY package*.json ./
RUN npm install
# RUN npm install react-scripts -g

# copy server files
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
