const authMiddleware = require("../middlewares/auth.middlewares");
const { adminController } = require("../controllers/admin.controller");
const { Router } = require("express");
const {doctorController} = require("../controllers/doctor.controller");

const router = Router();
router.get("/get_list", adminController.getAdminList);
router.get("/:id", adminController.getAdminById);
router.get("/get", adminController.getAdminForDirector);
router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.delete("/delete/:id", adminController.deleteAdmin)
router.patch("/edit/:id", adminController.editAdmin)

module.exports = router;