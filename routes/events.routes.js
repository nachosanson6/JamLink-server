const router = require("express").Router()

const Event = require('./../models/Event.model')

router.post('/newEvent', (req, res, next) => {
    
    const { title, description, address, date, organizer } = req.body

    Event
        .create({ title, description, address, date, organizer })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

router.get('/getAllEvents', (req, res, next) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/details/:event_id', (req, res, next) => {

const {event_id} = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router