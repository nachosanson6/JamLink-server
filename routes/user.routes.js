const router = require("express").Router()

const {
    details,
    getAllUsers,
    edit,
    newFriend,
    deleteFriend,
    getFriendAvatar,
    deleteUser
} = require('./../controllers/user.controllers')

router.get('/details/:user_id', details)

router.get('/getAllUsers/:user_id', getAllUsers)

router.put('/edit/:user_id', edit)

router.put('/newFriend/:user_id', newFriend)

router.put('/deleteFriend/:user_id', deleteFriend)

router.get('/getFriendAvatar/:friend_id', getFriendAvatar)

router.delete(`/delete/:user_id`, deleteUser)

module.exports = router