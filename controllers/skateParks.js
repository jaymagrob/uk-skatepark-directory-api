const SkatePark = require('../models/skateParks')

function index(req, res) {
  SkatePark
    .find()
    .then(foundSkateParks => res.status(200).json(foundSkateParks))
    .catch(err => res.status(401).json(err))
}

function create(req, res) {
  req.body.user = req.currentUser
  SkatePark
    .create(req.body)
    .then(createdSkateParks => res.status(201).json(createdSkateParks))
    .catch(err => res.status(401).json(err))
}

function show(req, res) {
  SkatePark
    .findById(req.params.id)
    .then(foundSkatePark => res.status(202).json(foundSkatePark))
    .catch(err => res.status(401).json(err))
}

function update(req, res, next) {
  SkatePark
    .findById(req.params.id)
    .then(skatePark => {
      if (!skatePark) return res.status(404).json({ message: 'Not Found' })
      if (!skatePark.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      Object.assign(skatePark, req.body)
      skatePark.save()
    })
    .then(skatePark => res.status(202).json(skatePark))
    .catch(next)
}


function deleteItem(req, res) {
  SkatePark
    .findById(req.params.id)
    .then(skatePark => {
      if (!skatePark) return res.status(404).json({ message: 'Not Found' })
      if (!skatePark.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      skatePark.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

function commentPost(req, res, next) {
  req.body.user = req.currentUser
  SkatePark
    .findById(req.params.id)
    .then(skatePark => {
      if (!skatePark) return res.status(404).json({ message: 'Not Found' })
      skatePark.comments.push(req.body)
      return skatePark.save()
    })
    .then(skatePark => res.status(202).json(skatePark))
    .catch(next)
}

function commentDelete(req, res) {
  req.body.user = req.currentUser
  SkatePark
    .findById(req.params.id)
    .then(skatePark => {
      if (!skatePark) return res.status(404).json({ message: 'Not Found' })
      const comment = skatePark.comments.id(req.params.commentId)
      if (!comment) return res.status(404).json({ message: 'Not Found' })
      if (!comment.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      comment.remove()
      return skatePark.save()
    })
    .then(skatePark => res.status(202).json(skatePark))
    .catch(err => res.json(err))
}

function commentEdit(req, res) {
  req.body.user = req.currentUser
  SkatePark
    .findById(req.params.id)
    .then(skatePark => {
      if (!skatePark) return res.status(404).json({ message: 'Not Found' })
      const comment = skatePark.comments.id(req.params.commentId)
      if (!comment) return res.status(404).json({ message: 'Not Found' })
      if (!comment.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      const newComments = skatePark.comments.map(i => {
        console.log(i._id, req.params.commentId, i.text, req.body)
        return (i._id.equals(req.params.commentId)) ? i.text = req.body : i
      })
      skatePark.comments = newComments
      return skatePark.save()
    })
    .then(skatePark => res.status(202).json(skatePark))
    .catch(err => res.json(err))
}

module.exports = { index, create, show, update, deleteItem, commentPost, commentDelete, commentEdit }

