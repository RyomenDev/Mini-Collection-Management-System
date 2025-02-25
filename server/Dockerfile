# docker-compose up --build


# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 5000

# Start application
CMD ["node", "server.js"]
