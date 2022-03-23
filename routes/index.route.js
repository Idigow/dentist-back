const {Router} = require("express")
const router = Router()

router.use(require("./doctors.route"))
router.use(require("./clients.route"))
router.use(require("./note.route"))

module.exports = router