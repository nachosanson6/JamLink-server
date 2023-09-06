const router = require("express").Router()
const { verifyToken } = require("../middleware/verifyToken")
const { 
    newEvent,
    getAllEvents,
    details,
    joinEvent,
    withdrawEvent
} = require("../controllers/events.controllers")

router.post('/newEvent', verifyToken, newEvent)
router.get('/getAllEvents', getAllEvents)
router.get('/details/:event_id', details)
router.put('/joinEvent/:event_id', joinEvent)
router.put('/withdrawEvent/:event_id', withdrawEvent)


module.exports = router