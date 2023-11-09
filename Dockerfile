FROM node:alpine AS builder

# set up work directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy source code
COPY . .

# build the next app
RUN  npm run build

# Use Nginx to serve the app
FROM nginx:alpine

# copy the build output to replace the default nginx contents.(static resources)
COPY --from=builder /usr/src/app/.next /usr/share/nginx/html

# expose port 80
EXPOSE 80

# use the default config for nginx
CMD ["nginx", "-g", "daemon off;"]


