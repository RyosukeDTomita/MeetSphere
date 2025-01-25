# Build Image
FROM node:22 AS build
WORKDIR /app

COPY ./package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm npm install

COPY . .

RUN << EOF bash -ex
npm run build
EOF


# Product Image
FROM public.ecr.aws/eks-distro-build-tooling/eks-distro-minimal-base-nginx:latest-al23 AS deploy
USER root

RUN <<EOF
mkdir -p /var/log/nginx
chown -R nginx:nginx /var/log/nginx
touch /run/nginx.pid
chown -R nginx:nginx /run/nginx.pid
EOF

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
USER nginx
CMD ["nginx", "-g", "daemon off;"]
