const router = require("express").Router()
const { verifyToken } = require("../middleware/verifyToken")
const Event = require('./../models/Event.model')

router.post('/newEvent', verifyToken, (req, res, next) => {

    const { title, description, address, location, date, organizer } = req.body
    const {_id: owner} = req.payload

    Event
        .create({ title, description, address, date, location, owner })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

router.get('/getAllEvents', (req, res, next) => {

    Event
        .find()
        .sort({date: 1})
        // TODO: PROYECTAR CON SELECT
        // TODO: ORDENAR CON SORT
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/details/:event_id', (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/joinEvent/:event_id', (req, res, next) => {
    const { event_id } = req.params
    const { instrumentsData, user_id } = req.body
    const { instruments } = instrumentsData


    console.log("ESTOS SON LOS INSTRUMENTOSSSS----------------------", instruments)


    Event
        .findByIdAndUpdate({ _id: event_id }, { $addToSet: { attendees: { user: user_id, instruments } } })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})



module.exports = router