// const log = require('log')
const cors = require('@koa/cors')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const serializeError = require('serialize-error')
const config = require('./config')
const mongoose = require('mongoose')
const router = require('./router')

const run = async () => {
  try {
    console.log('starting api')

    const app = new Koa()
    app.use(cors())

    console.log('set up error handler')
    app.use(async (ctx, next) => {
      try {
        await next()
      } catch (err) {
        ctx.status = err.status || 500
        ctx.body = err.message
        ctx.app.emit('error', err, ctx)
        console.log(`${serializeError(err)}`)
      }
    })

    app.use(async (ctx, next) => {
      const start = Date.now()
      await next()
      const ms = Date.now() - start
      console.log(Object.assign({
        message: `${ctx.method} ${ctx.url} - ${ms} ms`,
        requestMethod: ctx.method,
        requestUrl: ctx.url,
        requestTimeMs: ms
      }))
    })

    app.use(bodyParser(config.bodyParserConfig))
    app.use(router.routes())

    console.log('initializing mongo')
    try {
      await mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.database}`, { useNewUrlParser: true })
      // console.log('MongoDB connected')
    } catch (e) {
      const error = serializeError(e)
      console.log(Object.assign({ errorMessage: 'Failed initializing mongo' }, error))
      return
    }

    const server = app.listen(config.port, (e) => {
      if (e) {
        console.log(Object.assign({ errorMessage: 'app on listen error' }, serializeError(e)))
        throw (e)
      }
      const address = server.address()
      console.log(`api listening at http://localhost:${address.port}`)
    })
  } catch (e) {
    // console.log(Object.assign({ errorMessage: 'api run error' }, serializeError(e)))
    throw (e)
  }
}

module.exports = run()
