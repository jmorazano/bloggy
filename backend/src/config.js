const pack = require('../package')

module.exports = {
  port: process.env.API_PORT || 3000,
  version: process.env.API_VERSION || pack.version,
  environment: process.env.NODE_ENV || 'development',
  bodyParserConfig: { jsonLimit: process.env.JSON_LIMIT || '5mb' },
  mongo: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    host: process.env.MONGO_HOST || 'mongo-local-bloggy',
    database: process.env.MONGO_DATABASE || 'test',
    port: process.env.MONGO_PORT || '27017'
  }
}
