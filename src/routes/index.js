const fs = require('fs');

const router = require('koa-router')()

module.exports = (app) => {
  console.log('2222', 2222)
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') { return; }
    const route = require(`./${file}`);
    let str = file.split('.');
    let path =`/api/${str[0]}/`;
    console.log('path', path)
    route.prefix(path)
    app.use(route.routes()).use(route.allowedMethods());
  });
  // 主路由配置
  main(app)
}

function main(app){

  router.get('/', async (ctx, next) => {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  })

  router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
  })

  router.get('/json', async (ctx, next) => {
    ctx.body = {
      title: 'koa2 json'
    }
  })

  app.use(router.routes()).use(router.allowedMethods());
}



