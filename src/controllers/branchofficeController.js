const { getSucursales } = require("../application/branchofficeApplication")

class BranchofficeController {

        async getAllSucursales(req, res){
        let result = await getSucursales()
        res.status(200).json(result)
    }

}

module.exports = BranchofficeController