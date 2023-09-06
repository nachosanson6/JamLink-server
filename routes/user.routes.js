const router = require("express").Router()

const {
    getUserDetails,
    getAllUsers,
    editUser,
    newFriend,
    deleteFriend,
    getFriendAvatar,
    deleteUser
} = require('./../controllers/user.controllers')

router.get('/details/:user_id', getUserDetails)

router.get('/getAllUsers/:user_id', getAllUsers)

router.put('/edit/:user_id', editUser)

router.put('/newFriend/:user_id', newFriend)

router.put('/deleteFriend/:user_id', deleteFriend)

router.get('/getFriendAvatar/:friend_id', getFriendAvatar)

router.delete(`/delete/:user_id`, deleteUser)

module.exports = router