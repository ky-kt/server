const router = require('koa-router')()

router.get('/', function (ctx, next) {
  ctx.body = {
    data:{},
    msg:'hello order'
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
