# Use a base image with Node.js 22 and Astro pre-installed
FROM node:22

# Install any additional dependencies required for the project
RUN npm install -g astro

# Set up the working directory and copy the project files
WORKDIR /workspace
COPY . /workspace

# Install project dependencies
RUN npm install
