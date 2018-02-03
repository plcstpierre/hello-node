"use strict"

require( 'dotenv' ).config()

const chai = require('chai')
const proxyquire = require('proxyquire')
const chaiAsPromised = require('chai-as-promised')

global.expect = chai.expect
global.proxyquire = proxyquire

chai.use(chaiAsPromised)
