
const {Router} = require("express");
const WorkshopController = require("../controllers/workshopController");

const router = Router();
const workshopController = new WorkshopController();

router.post("/", workshopController.getAllTalleres)

module.exports = {router};