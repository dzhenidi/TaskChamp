const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/index.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }

    ]
  },
  devtool: 'source-maps',
  noParse: /node_modules\/quill\/dist/,
  
};
