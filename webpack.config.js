const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminMozjpeg = require('imagemin-mozjpeg');
const PropTypes = require('prop-types');

module.exports = {
  // watch: true, // would run the `npm run build` on save.
  mode: 'development',
  entry: './src/scripts/app.js',
  output: {
    path: path.resolve(__dirname,'dist/scripts'),
    filename: 'bundle.js'
  },

  module: {
  // setup the tasks here
    rules: [
      {
        // Translate es6 to es5
        test: /\.js?/i,
        exclude: /node_modules/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {
        test: /\.s?css?/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          `css-loader`,
          `sass-loader`
        ]
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `[name].[ext]`,
              outputPath: `../images`
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin ({
      template: `./src/index.html`,
      filename: `../index.html`
    }),
    new MiniCssExtractPlugin({
      filename: `../styles/main.css`
    }),

   //  new CopyWebpackPlugin([
   //    // ===> must be import on the above
   // {from: './src/images', to: '../images' }
   //  ]),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)?/i,
      plugins: [
        ImageminMozjpeg({
          quality: 70
        })
      ]
    })
  ]
};
