const Router = require('koa-router')
const { findAll, create, update, destroy } = require('./controllers/posts')

const router = new Router()

router.get('/api/v1/posts', findAll)
router.post('/api/v1/posts', create)
router.post('/api/v1/posts/:id', update)
router.delete('/api/v1/posts/:id', destroy)

module.exports = router
