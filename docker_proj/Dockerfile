# GENERAL
# [DIRECTIVE = caps] [package/command]

# > node index.js
# since we need node to run the app, we need to install it

# has node and npm
FROM node:18-alpine

# /app/ = create if not exists; /app = don't create if not exists
COPY package.json /app/  
COPY /src /app/

# set working directory
WORKDIR /app

# run linux command
RUN npm install

# run server
# CMD [ "executable" ]
CMD ["node", "index.js"]