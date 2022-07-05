#setup and build the client

FROM node:16

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN yarn install 
COPY client/ ./
RUN npm run build

#setup and build the server

FROM node:16

# WORKDIR /usr/app/
# COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install 
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]