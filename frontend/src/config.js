
module.exports = {
  port: process.env.API_PORT || 4000,
  apiHost: process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : '',
  environment: process.env.NODE_ENV || 'development',
  apiHostPostURL: process.env.NODE_ENV !== 'development' ? 'http://localhost:4000/api/v1/posts' : '',

}
