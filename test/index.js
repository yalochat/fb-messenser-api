'use strict'

// Load modules

const Adapter = require('../lib/')
const Vcr = require('vcrecorder')
const Code = require('code')
const Lab = require('lab')

var internals = {}
// Test shortcuts

const lab = exports.lab = Lab.script()
const describe = lab.describe
const expect = Code.expect
const it = lab.test
const beforeEach = lab.beforeEach

describe('Index module', () => {

    it('loads messenger plugin', (done) => {
        const messenger = new Adapter.Messenger({'token':'9dkd9dkd9d'})
        messenger.then((messengerObject ) => {

            expect(messengerObject).to.be.instanceof(Messenger)
            done()

        }, (e) => {
            console.error(e)
        })
    })

    it('loads layer plugin', (done) => {
        const messenger = new Adapter.Layer({'token':'9dkd9dkd9d', appId:'83883'})
        messenger.then((messengerObject ) => {

            expect(messengerObject).to.be.instanceof(Layer)
            done()

        }, (e) => {
            console.error(e)
        })
    })

})