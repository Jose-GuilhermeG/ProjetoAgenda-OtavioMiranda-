const path = require("path"); 

module.exports = {
    mode : 'development',
    entry : path.resolve(__dirname,'projetoAgenda','frontend','js','main.js'),
    output : {
        path : path.resolve(__dirname,'projetoAgenda','public','assets','js'),
        filename : 'bundle.js',
    },
   module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
devtool: 'source-map'

}