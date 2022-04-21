const authMiddleware = require("../middlewares/auth.middlewares");
const { adminController } = require("../controllers/admin.controller");
const { Router } = require("express");

const router = Router();
router.get("/get_list", adminController.getAdminList);
router.post("/register", adminController.register);
router.post("/login", adminController.login);

module.exports = router;