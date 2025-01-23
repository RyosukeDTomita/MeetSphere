# Build Image
FROM node:14 AS build
WORKDIR /app
COPY . .
RUN echo "Building the app"


# Product Image
FROM nginx:alpine

USER root
RUN <<EOF
echo "Installing app"
echo "Done"
EOF

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8080
# USER nginx
CMD ["nginx", "-g", "daemon off;"]
