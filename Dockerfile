# Stage 1: Build the Angular application
FROM node:latest as build 
# Use Node.js for building; name this stage 'build'
# Set working directory
WORKDIR /app 
# Copy package files for dependency caching
COPY package.json package-lock.json ./ 
 # Install project dependencies
RUN npm ci

# Install Angular CLI globally
RUN npm install -g @angular/cli 
# Copy all application source code
COPY . . 
# Build Angular app for production
RUN npm run build --configuration=production 

# Stage 2: Serve the application with Nginx
# Use a lightweight Nginx image
FROM nginx:stable-alpine 

# Copy custom Nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 

# Copy built Angular app from 'build' stage to Nginx web root
COPY --from=build /app/dist/Portfolio/browser /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80 

