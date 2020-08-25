const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const toolkitWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');

const appWebpackConfig = () => ({
  entry: {
    index: './src/index.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),
  ],
});

const mergedConfig = (env, argv) => {
  return merge(toolkitWebpackConfig(env, argv), appWebpackConfig(env, argv));
};

module.exports = mergedConfig;
