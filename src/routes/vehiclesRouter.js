const {Router} = require("express");
const VehiclesController = require("../controllers/vehiclesController");

const router = Router();
const vehiclesController = new VehiclesController();

router.post("/client", vehiclesController.getVehiclesByClient)

module.exports = {router};