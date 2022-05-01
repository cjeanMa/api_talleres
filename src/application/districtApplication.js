const { ConstantsQueries } = require("../constants/queries");
const ConnectionMYSQL = require("../database/connectionMYSLQ")

    const getDistritos = async () =>{
        let distritos = await ConnectionMYSQL.sendQuery(ConstantsQueries.GET_ALL_DISTRITOS)
        return distritos;
    }
module.exports = {
    getDistritos
}