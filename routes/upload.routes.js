const router = require("express").Router()
const {image } = require("../controllers/upload.controllers")
const uploader = require('./../middleware/uploader.middleware')

router.post('/image', uploader.single('imageData'), image)


module.exports = router