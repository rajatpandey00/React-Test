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
    }]
  },
  mode: 'development'
}