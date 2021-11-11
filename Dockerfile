FROM node:12.22.1
EXPOSE 3000
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn
RUN yarn install
COPY . .
CMD ["yarn", "start"]