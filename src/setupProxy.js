const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const options = {
    target: 'http://localhost:8888', // mock server
    headers: {
      host: 'api.target.com' // here to fill in the host of the specific mock api
    },
    logLevel: 'debug'
  };
  app.use(proxy('/api', options));
};
