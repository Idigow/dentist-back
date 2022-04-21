const { clientController } = require("../controllers/clients.controller");
const { Router } = require("express");

const router = Router();
router.get("/get_list", clientController.getAllClients);
router.get("/:id", clientController.getClientById);
router.post("/create", clientController.createClient);
router.delete("/delete/:id", clientController.deleteClient)
router.patch("/edit/:id", clientController.patchClient)

module.exports =  router;