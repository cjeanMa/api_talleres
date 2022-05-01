const { ConstantsQueries } = require("../constants/queries");
const ConnectionMYSQL = require("../database/connectionMYSLQ");

const getTalleres = async (params) =>{
    let talleres = await ConnectionMYSQL.sendQuery(ConstantsQueries.GET_TALLERES_FILTROS, params)
    return talleres;
}

module.exports = {
    getTalleres
}