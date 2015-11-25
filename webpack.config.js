module.exports = {
  entry: './lib/rocketlog.js',
  output: {
    path: 'dist',
    filename: 'rocketlog.dist.js',
    library: 'Rocket',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets=es2015',
        exclude: /node_module/
      }
    ]
  }
}