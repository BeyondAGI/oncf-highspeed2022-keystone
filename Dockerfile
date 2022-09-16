FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]