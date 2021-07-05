
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const babelConfig =  {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: ['transform-class-properties', '@babel/plugin-syntax-async-generators', '@babel/transform-runtime'],
};


module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$|jsx$/,
        use: [{
          loader: 'babel-loader',
          options: babelConfig
        }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', 'json', '.jsx']
  },
  entry: ['./index.js'],
  output: {
    filename: '[hash].bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ] 
}