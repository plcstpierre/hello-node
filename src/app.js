"use strict"

require('dotenv').config()

const logger = require('./logger')

logger.info({
    hello: 'world'
}, 'hi!')
