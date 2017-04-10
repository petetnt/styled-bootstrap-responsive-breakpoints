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
        loader: "babel-loader",
      },
    ],
  },
};
