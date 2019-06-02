const Router = require('koa-router');

const home = require('./home');

const router = Router();

router.use('/', home.routes(), home.allowedMethods());

router.get('*', async (ctx) => {
  ctx.json(100000, 'invaild routes');
});

module.exports = router;