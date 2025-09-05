FROM node:22-alpine

WORKDIR /app

# Copy package files and install dependencies

COPY package*.json ./

RUN npm install --production

# Copy application files

COPY . .

# Set non-sensitive environment variables
# (sensitive values should be configured in Azure App Service settings)

ENV NODE_ENV=production \
    PORT=8080

# Expose the port the app will run on

EXPOSE 8080

CMD [ "node", "server.js" ]