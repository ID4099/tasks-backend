FROM node:18

#Set Environments
ENV PORT=3000
ENV MYSQL_PORT=3307
ENV MYSQL_DATABASE=task
ENV MYSQL_USER=test_user
ENV MYSQL_PASSWORD=chocorrococo123

# Workdir app
WORKDIR /usr/src/app

# Copy all package*.json file
COPY package*.json ./

# Install dependencies
RUN npm install
# Or RUN yarn install

# Copy all file to docker-image
COPY . .

RUN npm run build
# Or RUN yarn build

# Expose server on port 3000
EXPOSE 3000

# Run start aplication
CMD ["npm", "start"]
# Or CMD ["yarn", "start"]
