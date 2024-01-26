# a base image with Node.js
FROM node:14-slim

#working directory
WORKDIR /app

# package.json and package-lock.json
COPY package*.json ./

# dependencies
RUN npm install

# application code
COPY . .

# Expose port 8080
EXPOSE 8080

# run the application
CMD ["node", "app.js"]
