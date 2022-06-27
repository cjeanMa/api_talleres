const { getTalleres } = require("../application/workshopApplication");
const { MessageResponse } = require("../constants/response");
const { generalResponse } = require("../helpers/generalResponse");

class WorkshopController {
    async getAllTalleres(req, res) {
        const { placa, idDistrito, tipoTaller } = req.body;
        let result = await getTalleres([placa, idDistrito, tipoTaller])
        res.status(200).json(generalResponse(MessageResponse.SUCCESS, result))
    }
}

module.exports = WorkshopController