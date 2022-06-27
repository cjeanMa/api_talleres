const {getDistritos} = require("../application/districtApplication")
const { MessageResponse } = require("../constants/response")
const { generalResponse } = require("../helpers/generalResponse")

    class DistritosController{
        async getAllDistritos(req, res){
        let result = await getDistritos()
        res.status(200).json(generalResponse(MessageResponse.SUCCESS, result))
    }
}

module.exports = DistritosController