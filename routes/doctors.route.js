const authMiddleware = require("../middlewares/auth.middlewares");
const { doctorController } = require("../controllers/doctor.controller");
const { Router } = require("express");

const router = Router();
router.get("/doctors", authMiddleware, doctorController.getAllDoctors);
router.get("/doctor", authMiddleware, doctorController.getDoctorsId);
router.post("/register", doctorController.register);
router.post("/login", doctorController.login);

module.exports = router;