
const {Router} = require("express");
const DistritosController = require("../controllers/districtController");

const router = Router();
const distritosController = new DistritosController();

router.post("/", distritosController.getAllDistritos)

module.exports = {router};