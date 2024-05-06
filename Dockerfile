FROM node:lts

# Set the working directory
WORKDIR /app

# Install debugging tools
RUN apt-get update && apt-get install -y netcat-openbsd postgresql-client

# Expose the application port
EXPOSE 3000

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Command to run the application in development mode
CMD ["npm", "run", "dev"]