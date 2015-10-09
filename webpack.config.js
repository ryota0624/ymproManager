/**
 * Created by ryota on 15/09/06.
 */
module.exports = {
  entry: {
    app: "./src/app.js"
    //app: "./src/sample/app.js"
  },
  output: {
    filename: "./build/app.js"
    //filename: "./dest/app.js"
  },
  // source-mapを出力
  devtool: "#source-map",
  module: {
    // ローダ設定
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
    ]
  },
  resolve: {
    // requireやimport時の拡張子を省略
    extensions: ['', '.js', '.jsx']
  },
};