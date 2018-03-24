'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// module.exports = merge(prodEnv, {
//   NODE_ENV: '"development"',
//   BASE_API: '"/"',
//   proxy_API:'"http://modeldisplay.ccw.lab/"',
// })




module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/api"',
  proxy_API: '"https://www.easy-mock.com/mock/5a71c73b1b8be74c1655a56d"',
})