const router = require("express").Router()
const Event = require('./../models/Event.model')

const newEvent = (req, res, next) => {

    const { title, description, address, location, date, organizer } = req.body
    const {_id: owner} = req.payload

    Event
        .create({ title, description, address, date, location, owner })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const getAllEvents = (req, res, next) => {

    Event
        .find()
        .sort({date: 1})
        // TODO: PROYECTAR CON SELECT
        // TODO: ORDENAR CON SORT
        .then(response => res.json(response))
        .catch(err => next(err))
}

const details = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const joinEvent = (req, res, next) => {
    const { event_id } = req.params
    const { instrumentsData, user_id } = req.body
    const { instruments } = instrumentsData

    Event
        .findByIdAndUpdate({ _id: event_id }, { $addToSet: { attendees: { user: user_id, instruments } } })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const withdrawEvent = (req, res, next) => {
    const { event_id } = req.params
    const { user_id } = req.body

    console.log(event_id)
    console.log(user_id)

    Event
        .updateOne({ _id: event_id }, { $pull: { attendees: { user: user_id } } })
        .then((response) => console.log(response))
        .catch(err => next(err))
}

module.exports = {
    newEvent,
    getAllEvents,
    details,
    joinEvent,
    withdrawEvent
}
