const authMiddleware = require("../middlewares/auth.middlewares");
const { doctorController } = require("../controllers/doctor.controller");
const { Router } = require("express");

const router = Router();
router.get("/get_list", authMiddleware, doctorController.getAllDoctors);
router.get("/:id", authMiddleware, doctorController.getDoctorForDirector);
router.get("/get", authMiddleware, doctorController.getDoctorsId);
router.post("/register", doctorController.register);
router.post("/login", doctorController.login);
router.delete("/delete/:id", doctorController.deleteDoctor)

module.exports = router;