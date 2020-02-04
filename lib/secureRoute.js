const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')

function secureRoute(req, res, next) {
  console.log(req.headers.authorization)
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  const token = req.headers.authorization.replace('Bearer ','')

  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err,payLoad) => {
      if (err) return reject(err)
      return resolve(payLoad)
    })
  })
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if (!user) return res.status(401).json({ message: 'Unauthorized' })
      req.currentUser = user
      next()
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))

}

module.exports = secureRoute