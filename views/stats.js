'use strict'

const html = require('choo/html')
const map = require('lodash/map')
const stat = require('./stat')

module.exports = (stats, send) => {
  const rows = map(stats.data, (q, qid) => {
    const statState = stats.states[qid]
    return stat({key: qid, value: q}, qid, statState, send)
  })

  return html`
  <div class="quoteslist">
    ${stats.hasReceivedData ? rows : 'Henter oppdaterte data...'}
  </div>
  `
}
