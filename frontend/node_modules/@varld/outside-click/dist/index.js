
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./outside-click.cjs.production.min.js')
} else {
  module.exports = require('./outside-click.cjs.development.js')
}
