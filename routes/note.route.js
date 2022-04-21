const authMiddleware = require("../middlewares/auth.middlewares");
const { noteController } = require("../controllers/note.controller");
const { Router } = require("express");

const router = Router()
router.get("/get_list", noteController.getNoteByDate)
router.post("/create", noteController.createNote)

module.exports = router