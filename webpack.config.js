module.exports = {
  //mode: "production",
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "./assets/es/application.js",
  ],
  output: { filename: "all.js" },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules\/(?!(__es6modules__))/,
        use: {
          loader: "babel-loader",
        },
      }
    ]
  }
}
