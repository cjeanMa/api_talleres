const { getTalleres } = require("../application/workshopApplication");
const { MessageResponse } = require("../constants/response");
const { mappingResponse } = require("../helpers/mappingResponse");

class WorkshopController {
    async getAllTalleres(req, res) {
        const { placa, idDistrito, tipoTaller } = req.body;
        let result = await getTalleres([placa, idDistrito, tipoTaller])
        res.status(200).json(mappingResponse(MessageResponse.SUCCESS, result))
    }
}

module.exports = WorkshopController