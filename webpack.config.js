module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.es5.js",
    library: "styled-bootstrap-responsive-breakpoints",
    libraryTarget: "umd",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
