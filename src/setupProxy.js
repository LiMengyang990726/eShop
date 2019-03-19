const proxy = require('http-proxy-middleware');

const URI = process.env.REVERSE_PROXY_URI || 'http://localhost:8080'
module.exports = function(app) {
const apiProxy = proxy('/api/', {target:URI});
  app.use(apiProxy);
};