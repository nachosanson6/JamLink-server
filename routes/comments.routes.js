const router = require("express").Router()
const { verifyToken } = require("../middleware/verifyToken")

const {
    addComment,
    getCommentData,
    editComment,
    deleteComment
} = require("../controllers/comments.controllers")

router.post('/addComment/:event_id', verifyToken, addComment)
router.get('/getCommentData/:comment_id', getCommentData)
router.put('/editComment/:comment_id', editComment)
router.post('/deleteComment/:event_id', deleteComment)

module.exports = router