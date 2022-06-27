const {getVehiclesClient} = require("../application/vehiclesApplication");
const { MessageResponse } = require("../constants/response");
const { generalResponse } = require("../helpers/generalResponse");

    class VehiclesController{
     
        async getVehiclesByClient(req, res){
        const { documento } = req.body;
        let result = await getVehiclesClient(documento)
        res.status(200).json(generalResponse(MessageResponse.SUCCESS, result))
    }
}

module.exports = VehiclesController