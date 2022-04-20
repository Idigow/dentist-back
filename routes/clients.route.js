const { clientController } = require("../controllers/clients.controller");
const { Router } = require("express");

const router = Router();
router.get("/clients", clientController.getAllClients);
router.get("/client/:id", clientController.getClientById);
router.post("/create/client", clientController.createClient);
router.delete("/remove_client/:id", clientController.deleteClient)
router.patch("/update_client/:id", clientController.patchClient)

module.exports =  router;