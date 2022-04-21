const {Router} = require("express")
const router = Router()

router.use("/admin", require("./admin.route"))
router.use("/doctors", require("./doctors.route"))
router.use("/clients", require("./clients.route"))
router.use("/note", require("./note.route"))
router.use("/service", require("./service.route"))

module.exports = router