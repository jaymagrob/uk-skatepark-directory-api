const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/ski-resorts-api=${env}`
const secret = process.env.SECRET || 'THIS IS A SECRET'

module.exports = { port, dbURI, secret }