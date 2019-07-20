/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/build/webpack.base.config.js        *
 * File Description : webpack develop config              *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {

  devtool: 'source-map',
  plugins: [
    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ]
})



