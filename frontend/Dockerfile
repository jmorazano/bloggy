FROM node:10.5

# Create app directory
RUN mkdir -p /usr/src/app/frontend

# Copy code to app folder and install dependencies
COPY . /usr/src/app/frontend/
WORKDIR /usr/src/app/frontend
RUN npm install --production

# remove .npmrc file as it could contain creds
# RUN rm -r .npmrc

# Build app
RUN npm run build

EXPOSE 3000

# Run npm start to launch the app
CMD ["npm", "run", "start"]
