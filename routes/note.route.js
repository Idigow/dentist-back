const authMiddleware = require("../middlewares/auth.middlewares");
const { noteController } = require("../controllers/note.controller");
const { Router } = require("express");

const router = Router()
router.post("/getNote", noteController.getNoteByDate)
router.post("/createNote", noteController.createNote)

module.exports = router