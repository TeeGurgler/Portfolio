FROM node:22-alpine
WORKDIR /app

# Copy package.json first
COPY package.json ./

# Copy the rest of the application code
COPY . .

EXPOSE 5173
# The command is now handled by docker-compose