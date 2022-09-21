// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/ranshu-devops', {
      target: 'http://devops.test.inc', //'http://devops.test.inc', //'http://devops.test.inc',
      changeOrigin: true
      // pathRewrite: {
      //   '^/api': ''
      // }
    })
  );

  app.use(
    createProxyMiddleware(['/passport'], {
      target: 'http://passport.test.inc',
      changeOrigin: true,
      pathRewrite: {
        '^/passport': ''
      }
    })
  );

};
