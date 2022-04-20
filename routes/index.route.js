const {Router} = require("express")
const router = Router()

router.use(require("./doctors.route"))
router.use(require("./clients.route"))
router.use(require("./note.route"))
router.use(require("./service.route"))

module.exports = router