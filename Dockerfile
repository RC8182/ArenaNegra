FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install  @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion @chakra-ui/icons

COPY . .

CMD ["npm", "run", "dev"]