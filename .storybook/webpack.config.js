const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: './styles/style.css',
  allChunks: true,
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]',
                camelCase: 'only',
              },
            },
            { loader: 'sass-loader' },
            { loader: 'autoprefixer-loader?browsers=last 20 versions' },
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: './images/[hash].[ext]',
        },
      },
    ],
  },
  plugins: [ExtractTextPluginConfig],
};
