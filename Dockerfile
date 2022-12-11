FROM node:14
EXPOSE 3001

#Use latest version on npm
RUN npm i npm@latest -g

COPY package.json package.lock.json* ./

RUN npm install --no-optional && npm cache clean --force

#Copy our source code.
WORKDIR /optional
COPY . .
CMD ["npm", "run", "start"]
