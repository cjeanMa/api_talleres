const { ConstantsQueries } = require("../constants/queries");
const ConnectionMYSQL = require("../database/connectionMYSLQ")

    const getVehiclesClient = async (documento)=>{
        let vehicles = await ConnectionMYSQL.sendQuery(ConstantsQueries.GET_VEHICLES_BY_CLIENT, [documento])
        return vehicles;
    }
module.exports = {
    getVehiclesClient
}