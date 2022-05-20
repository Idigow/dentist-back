const authMiddleware = require("../middlewares/auth.middlewares");
const { noteController } = require("../controllers/note.controller");
const { Router } = require("express");

const router = Router()
router.get("/", noteController.getNotes)
router.get("/get/:id", noteController.getNoteById)
router.get("/get/noteByDoctor/:id", noteController.getNoteByDoctorId)
router.get("/get/noteByPatient/:id", noteController.getNoteByPatientId)
router.get("/get/date", noteController.getNoteByDate)
router.delete("/delete/:id", noteController.removeNote)
router.patch("/edit/:id", noteController.editNote)
router.post("/create", noteController.createNote);

module.exports = router