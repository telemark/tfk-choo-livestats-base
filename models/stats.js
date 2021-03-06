'use strict'

const config = require('../config')
const assign = require('lodash/assign')
const firebase = require('firebase/app')
const statsRef = firebase.database().ref().child(config.databaseEntrypoint)

module.exports = {
  namespace: 'statistikk',
  state: {
    hasReceivedData: false,
    states: {},
    data: {}
  },
  reducers: {
    receiveStatsData: (data, state) => assign({}, state, { hasReceivedData: true, data: data.data })
  },
  effects: {},
  subscriptions: [
    (send, done) => statsRef.on('value', snapshot => {
      send('statistikk:receiveStatsData', { data: snapshot.val() }, done)
    })
  ]
}
