import path from 'path';

export default {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel-loader' ]
      }
    ]
  }
}
