module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.es5.js",
    path: __dirname,
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
