const { Router } = require('express')
const router = Router()
// const fileUplaod = require('../middleware/fileUpload')
const fileUplaod = require('../middleware/fileUpload')
const { CardCreate, CardUpdate } = require('.././controllers/card/card')

router.route('/card/create').post(fileUplaod.single('img'), CardCreate)
router.route('/card/update/:id').put(fileUplaod.single('img'), CardUpdate)

module.exports = router