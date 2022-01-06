const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    (process.env.NODE_ENV === 'production') ?
      new CopyWebpackPlugin([{from: 'src/vendor/abc2svg-1.js'}]) :
      new CopyWebpackPlugin([{from: 'src/vendor/abc2svg-1.js', to: 'dist'}])
  );
  config.plugins.push(
    (process.env.NODE_ENV === 'production') ?
      new CopyWebpackPlugin([{from: 'src/vendor/groove_utils.js'}]) :
      new CopyWebpackPlugin([{from: 'src/vendor/groove_utils.js', to: 'dist'}])
  );

  config.module.rules[1].oneOf.map(rule => {
    if (String(rule.test) === String(/\.(scss|sass)$/)) {
      rule.use.map(usage => {
        if (typeof usage === 'object' && usage.loader.match(/\bsass-loader\b/)) {
          if (!usage.options) {
            usage.options = {}
          }
          usage.options.sassOptions = { includePaths: ['./node_modules'] }
        }
        return usage;
      })
    }

    return rule;
  });
  return config;
};
