const router = require("express").Router()
const Comments = require("../models/Comments.model")
const Event = require("../models/Event.model")

const addComment = (req, res, next) => {
    const { event_id } = req.params
    const { comment } = req.body
    const { _id: owner } = req.payload

    console.log(event_id)
    console.log(req.body)
    console.log(req.payload)

    // Comments
    //     .create({ comment, owner })
    //     .then((comment) => {
    //         const comment_id = comment._id
    //         Event
    //             .findByIdAndUpdate(event_id, { $addToSet: { comments: comment_id } })
    //             .then(() => res.sendStatus(200))
    //             .catch(err => console.log(err))
    //     })
    //     .catch(err => next(err))
}

const getEventComments = (req, res, next) => {

    const { event_id } = req.params

    Comments
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editComment = (req, res, next) => {

    const { comment_id } = req.params
    const { comment } = req.body

    Comments
        .findByIdAndUpdate(comment_id, { comment })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const deleteComment = (req, res, next) => {

    const { event_id } = req.params
    const { comment_id } = req.body

    Event
        .findByIdAndUpdate(event_id, { $pull: { comments: comment_id } })
        .then(() => {
            Comments
                .findByIdAndDelete(comment_id)
                .then(() => res.sendStatus(202))
                .catch(err => next(err))
        })

}

module.exports = {
    addComment,
    getEventComments,
    editComment,
    deleteComment
}