const router = require("express").Router()
const { verifyToken } = require("../middleware/verifyToken")
const {
    newEvent,
    getAllEvents,
    getEventDetails,
    joinEvent,
    withdrawEvent,
    editEvent,
    deleteEvent
} = require("../controllers/events.controllers")

router.post('/newEvent', verifyToken, newEvent)
router.get('/getAllEvents', getAllEvents)
router.get('/details/:event_id', getEventDetails)
router.put('/joinEvent/:event_id', joinEvent)
router.put('/withdrawEvent/:event_id', withdrawEvent)
router.put('/editEvent', editEvent)
router.post('/deleteEvent/:event_id', deleteEvent)


module.exports = router