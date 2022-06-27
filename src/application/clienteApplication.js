const { ConstantsQueries } = require("../constants/queries");
const ConnectionMYSQL = require("../database/connectionMYSLQ");

const getAllClients = async () =>{
    let clientes = await ConnectionMYSQL.sendQuery(ConstantsQueries.GET_ALL_CLIENTES)
    return clientes
}

module.exports = {
    getAllClients
}