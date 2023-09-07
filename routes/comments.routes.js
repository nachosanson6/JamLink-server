const router = require("express").Router()
const { verifyToken } = require("../middleware/verifyToken")

const {
    addComment,
    getEventComments,
    editComment,
    deleteComment
} = require("../controllers/comments.controllers")

router.post('/addComment/:event_id', verifyToken, addComment)
router.get('/getEventComments/:event_id', getEventComments)
router.put('/editComment/:comment_id', editComment)
router.post('/deleteComment/:event_id', deleteComment)

module.exports = router