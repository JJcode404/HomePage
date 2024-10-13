const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/view.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './src', 
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  
      inject: 'head',               
      scriptLoading: 'defer',        
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],  
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', 
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
