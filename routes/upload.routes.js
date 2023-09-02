const router = require("express").Router()
const { uploadImage } = require("../controllers/upload.controllers")
const uploader = require('./../middleware/uploader.middleware')

router.post('/image', uploader.single('imageData'), uploadImage)


module.exports = router