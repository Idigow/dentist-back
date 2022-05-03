const authMiddleware = require("../middlewares/auth.middlewares");
const { doctorController } = require("../controllers/doctor.controller");
const { Router } = require("express");

const router = Router();
router.get("/get_list", doctorController.getAllDoctors);
router.get("/:id", authMiddleware, doctorController.getDoctorForDirector);
router.get("/get", authMiddleware, doctorController.getDoctorById);
router.post("/register", doctorController.register);
router.post("/login", doctorController.login);
router.delete("/delete/:id", doctorController.deleteDoctor)
router.patch("/edit/:id", doctorController.editDoctor)

module.exports = router;