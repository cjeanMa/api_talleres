const { getSucursales } = require("../application/branchofficeApplication")
const { MessageResponse } = require("../constants/response")
const { generalResponse } = require("../helpers/generalResponse")

class BranchofficeController {

        async getAllSucursales(req, res){
        let result = await getSucursales()
        res.status(200).json(generalResponse(MessageResponse.SUCCESS, result))
    }

}

module.exports = BranchofficeController