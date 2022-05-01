const {getDistritos} = require("../application/districtApplication")

    class DistritosController{
        async getAllDistritos(req, res){
        let result = await getDistritos()
        res.status(200).json(result)
    }
}

module.exports = DistritosController