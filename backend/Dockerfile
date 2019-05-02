FROM node:10.5

# Create app directory
RUN mkdir -p /usr/src/app

# Copy code to app folder and install dependencies
COPY . /usr/src/app/
WORKDIR /usr/src/app
RUN npm install --production

# remove .npmrc file as it could contain creds
# RUN rm -r .npmrc

EXPOSE 4000

# Run npm start to launch the app
CMD ["node", "src/index.js"]
