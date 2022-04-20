const authMiddleware = require("../middlewares/auth.middlewares");
const { serviceController } = require("../controllers/service.controller");
const { Router } = require("express");

const router = Router()
router.get("/get_service", serviceController.getService)
router.post("/create_service", serviceController.createService)
router.delete("/delete_service/:id", serviceController.removeServices)
router.patch("/edit_service/:id", serviceController.editServices)

module.exports = router