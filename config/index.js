'use strict'

module.exports = {
  databaseURL: process.env.LIVESTATS_DB_URL || 'https://tfk-stats.firebaseio.com',
  databaseEntrypoint: process.env.LIVESTATS_ENTRYPOINT || 'tilskudd',
  appTitle: process.env.LIVESTATS_APP_TITLE || 'Livestatistikk tilskudd.t-fk.no'
}
