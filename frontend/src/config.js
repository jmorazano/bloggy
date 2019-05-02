
module.exports = {
  port: process.env.API_PORT || 3000,
  apiHost: process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : '',
  environment: process.env.NODE_ENV || 'development',
}
