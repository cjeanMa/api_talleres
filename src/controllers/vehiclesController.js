const {getVehiclesClient} = require("../application/vehiclesApplication")

    class VehiclesController{
     
        async getVehiclesByClient(req, res){
        const { documento } = req.body;
        let result = await getVehiclesClient(documento)
        res.status(200).json(result)
    }
}

module.exports = VehiclesController