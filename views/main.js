'use strict'

const config = require('../config')
const html = require('choo/html')
const statsList = require('./stats')

module.exports = (state, prev, send) => {
  return html`
    <div class="wrapper">
      <div>
        <h1>${config.appTitle}</h1>
      </div>
      <div class="center">
        ${statsList(state.statistikk, send)}
      </div>
    </div>
  `
}
