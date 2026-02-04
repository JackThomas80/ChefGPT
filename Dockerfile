# Use Node.js 24 LTS
FROM node:24

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Expose the port your app uses
EXPOSE 3001

# Run the app
CMD ["node", "dist/app.js"]
