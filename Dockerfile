FROM node:20.5.1-alpine3.18

WORKDIR /app

COPY . .

RUN chown -R node:node /app
USER node
RUN npm install && \
    npm install  @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion @chakra-ui/icons && \
    npm rebuild --arch=x64 --platform=linux --libc=musl sharp && \
    npm run build

EXPOSE 3000

CMD ["npm", "start"]