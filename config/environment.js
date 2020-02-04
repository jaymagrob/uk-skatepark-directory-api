const port = process.env.PORT || 4000
const dbURI = process.env.MONGODBD_URI || 'mongodb://localhost/ski-resorts-api'
const secret = process.env.SECRET || 'THIS IS A SECRET'

module.exports = { port, dbURI, secret }