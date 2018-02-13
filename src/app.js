"use strict"

require('dotenv').config()

const logger = require('./logger')

process.on("unhandledRejection", err => {
 logger.error({
   "message": "Unhandled Rejection",
   "err": err,
 })
})

logger.info({
    hello: 'world'
}, 'hi!')
