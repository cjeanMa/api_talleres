
const mappingResponse = (status, dataResponse) =>{

    return ({
        status,
        data:{
            totalRecord: dataResponse.length,
            results: dataResponse
        }
    })
}

module.exports = {
    mappingResponse
}