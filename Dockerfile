FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 8000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8000

CMD ["/usr/local/bin/yarn", "start"]



