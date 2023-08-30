const router = require("express").Router()

const User = require("../models/User.model")


router.get('/details/:user_id', (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next.err)

})

router.put('/edit/:user_id', (req, res, next) => {
    const { user_id } = req.params
    const { username, email, avatar, instruments, description } = req.body

    User
        .findByIdAndUpdate(user_id, { username, email, avatar, instruments, description })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

router.delete(`/delete/:user_id`, (req, res, next) => {
    console.log('hasta aqui llegooooa')
    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})





module.exports = router