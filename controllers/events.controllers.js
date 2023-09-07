const router = require("express").Router()
const Event = require('./../models/Event.model')

const newEvent = (req, res, next) => {

    const { title, description, address, location, date, organizer } = req.body
    const { _id: owner } = req.payload

    Event
        .create({ title, description, address, date, location, owner })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const getAllEvents = (req, res, next) => {

    Event
        .find()
        .sort({ date: 1 })
        // TODO: PROYECTAR CON SELECT
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getEventDetails = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const joinEvent = (req, res, next) => {

    const { event_id } = req.params
    const { instrumentsData, user_id: user } = req.body
    const { instruments } = instrumentsData

    Event
        .findByIdAndUpdate(event_id, { $addToSet: { attendees: { user, instruments } } })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const withdrawEvent = (req, res, next) => {

    const { event_id } = req.params
    const { user_id } = req.body

    Event
        .updateOne({ _id: event_id }, { $pull: { attendees: { user: user_id } } })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}

const editEvent = (req, res, next) => {

    const { _id, title, description, date, location } = req.body

    Event
        .findByIdAndUpdate(_id, { title, description, date, location }) 
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const deleteEvent = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .then(() => res.sendStatus(202))
        .catch(err => next(err))
}

module.exports = {
    newEvent,
    getAllEvents,
    getEventDetails,
    joinEvent,
    withdrawEvent,
    editEvent,
    deleteEvent
}
