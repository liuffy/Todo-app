module.exports = {
  entry: "./frontend/todo_redux.jsx",
  output: {
    filename: "./app/assets/javascripts/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["",".js", ".jsx" ]
  }
};