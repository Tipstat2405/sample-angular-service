# Step 1: Use Node.js as the base image
FROM node:20.18.0 AS build

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the Angular app source code
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Step 2: Use a lightweight HTTP server to serve the built app
FROM node:20.18.0

# Install http-server (you can also install other static servers if preferred)
RUN npm install -g http-server

# Copy the built app from the build container to the server's serving location
COPY --from=build /app/dist/sample-angular-service /usr/share/nginx/html

# Expose the necessary port
EXPOSE 8080

# Serve the app using http-server
CMD ["http-server", "/usr/share/nginx/html", "-p", "8080"]
