const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const options = {
    target: 'http://127.0.0.1:8888', // mock server
    headers: {
      host: 'api.target.com' // here to fill in the host of the specific mock api
    }
  };
  app.use(proxy('/api', options));
};
