const {Router} = require("express");
const BranchofficeController = require("../controllers/branchofficeController");

const router = Router();
const branchofficeController = new BranchofficeController()

router.post("/", branchofficeController.getAllSucursales)

module.exports = {router}