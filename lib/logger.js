function logger(req, res, next) {
  console.log(`${req.method} request coming from ${req.url}`)
  next()
}

module.exports = logger