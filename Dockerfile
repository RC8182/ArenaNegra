FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install  @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion @chakra-ui/icons

RUN npm i sharp

RUN npm run build

EXPOSE 3000



CMD ["npm", "start"]