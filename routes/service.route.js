const { serviceController } = require("../controllers/service.controller");
const { Router } = require("express");

const router = Router()
router.get("/get_list", serviceController.getService)
router.get("/:id", serviceController.getServiceById)
router.post("/create", serviceController.createService)
router.delete("/delete/:id", serviceController.removeServices)
router.patch("/edit/:id", serviceController.editServices)

module.exports = router