const { getAllClients } = require("../application/clienteApplication")
const { MessageResponse } = require("../constants/response")
const { generalResponse } = require("../helpers/generalResponse")
const { mappingClientResponse } = require("../mappers/mappingClientResponse")

class ClientController{
    async getClientes(req, res){
        let result = await getAllClients()
        res.status(200).json(generalResponse(MessageResponse.SUCCESS, mappingClientResponse(result)))
    }
}

module.exports = ClientController