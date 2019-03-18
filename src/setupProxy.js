const proxy = require('http-proxy-middleware');

const URI = process.env.REVERSE_PROXY_URI || 'http://localhost:8080'
module.exports = function(app) {
const merchantProxy = proxy('/merchant/', {target:URI});
const productProxy = proxy('/product/', {target:URI});
  app.use(merchantProxy);
  app.use(productProxy);
};