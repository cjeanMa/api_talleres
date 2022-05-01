const { ConstantsQueries } = require("../constants/queries");
const ConnectionMYSQL = require("../database/connectionMYSLQ");

const getSucursales = async () =>{
    const sucursales = await ConnectionMYSQL.sendQuery(ConstantsQueries.GET_ALL_SUCURSAL);
    return sucursales
}

module.exports = {
    getSucursales
}