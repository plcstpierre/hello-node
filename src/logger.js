"use strict"

const bunyan = require('bunyan')

const logger = bunyan.createLogger({
  name: 'hello-node',
  level: process.env.LOG_LEVEL || 'info',
  serializers: bunyan.stdSerializers
})

module.exports = logger
