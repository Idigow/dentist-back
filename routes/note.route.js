const authMiddleware = require("../middlewares/auth.middlewares");
const { noteController } = require("../controllers/note.controller");
const { Router } = require("express");

const router = Router()
router.post("/get_note", noteController.getNoteByDate)
router.post("/create_note", noteController.createNote)

module.exports = router