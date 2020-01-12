//entry --> output
const path  = require('path')

module.exports = {
 entry: './src/app.js',
 output: {
   path: path.join(__dirname, 'public'),  //path to the bundle of the output file
   filename: 'bundle.js' //this is the filename of the bundle file
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
        use: ['style-loader', 'css-loader'], //use is for adding array of loaders
        test: /\.scss$/,
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/')
  },
  devtool: 'cheap-module-eval-source-map', //For Debugging purpose
  mode: 'development'
}