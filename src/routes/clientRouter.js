const {Router} = require("express");
const ClientController = require("../controllers/clientController")

const router = Router();
const clientController = new ClientController()

router.post("/", clientController.getClientes)

module.exports = {router}