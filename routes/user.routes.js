const router = require("express").Router()

const User = require("../models/User.model")


router.get('/details/:user_id', (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next.err)

})


module.exports = router