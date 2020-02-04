const router = require('express').Router()
const skateParks = require('../controllers/skateParks')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/skate-parks')
  .get(skateParks.index)
  .post(secureRoute, skateParks.create)

router.route('/skate-parks/:id')
  .get(skateParks.show)
  .put(secureRoute, skateParks.update)
  .delete(secureRoute, skateParks.deleteItem)

router.route('/register')
  .get(users.indexUsers)
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/skate-parks/:id/comments')
  .post(secureRoute, skateParks.commentPost)

router.route('/skate-parks/:id/comments/:commentId')
  .put(secureRoute, skateParks.commentEdit)
  .delete(secureRoute, skateParks.commentDelete)
  
module.exports = router