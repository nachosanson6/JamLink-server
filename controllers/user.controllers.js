const User = require("../models/User.model")

const details = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next.err)
}

const getAllUsers = (req, res, next) => {

    const { user_id } = req.params
    User
        .find({ _id: { $ne: user_id } })
        .select({ avatar: 1, username: 1, instruments: 1 })
        .then(response => res.json(response))
        .catch(err => (next(err)))
}

const edit = (req, res, next) => {
    const { user_id } = req.params
    const { username, email, avatar, instruments, description } = req.body

    User
        .findByIdAndUpdate(user_id, { username, email, avatar, instruments, description })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const newFriend = (req, res, next) => {

    const { user_id } = req.params
    const { _id: friend } = req.body
    User
        .updateOne({ _id: user_id }, { $addToSet: { friends: friend } })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const deleteFriend = (req, res, next) => {

    const { user_id } = req.params
    const { _id: friend } = req.body
    User
        .updateOne({ _id: user_id }, { $pull: { friends: friend } })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const getFriendAvatar = (req, res, next) => {
    const { friendId } = req.params

    User
        .findById(friendId)
        .select({ avatar: 1 })
        .then(response => res.json(response))
        .catch(err => (next(err)))
}

const deleteUser = (req, res, next) => {
    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

module.exports = {
    details,
    getAllUsers,
    edit,
    newFriend,
    deleteFriend,
    getFriendAvatar,
    deleteUser
}