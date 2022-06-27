
const mappingClientResponse = (dataResponse) =>{
    return dataResponse.map(client=>{
        return {
            idcliente: client.idcliente,
            dni: client.dni,
            nombres: client.nombres,
            aPaterno: client.aPaterno,
            aMaterno: client.aMaterno
        }
    })
}

module.exports = {
    mappingClientResponse
}