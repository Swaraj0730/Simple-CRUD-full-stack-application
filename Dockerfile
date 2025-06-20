# ---------- Build Stage ----------
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
COPY vite.config.js ./
COPY index.html ./
COPY src ./src

RUN npm install
RUN npm run build

# ---------- Serve with NGINX ----------
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
