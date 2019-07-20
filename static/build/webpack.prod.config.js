/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/build/webpack.base.config.js        *
 * File Description : webpack product config              *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  
  plugins: [
    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      }
    })
  ]
})