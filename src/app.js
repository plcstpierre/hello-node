"use strict"

require( 'dotenv' ).config()

const bunyan = require( 'bunyan' )

const logger = require('./logger')

logger.info({
    hello: 'world'
}, 'hi!')