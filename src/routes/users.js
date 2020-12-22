const router = require('koa-router')()
let User =require('../model/user');

router.get('/', async function (ctx, next) {

  let users = await User.findAll();
  ctx.body = {
    data:users,
    msg:'hello'
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
