
const generalResponse = (status, dataResponse) =>{

    return ({
        status,
        data:{
            totalRecord: dataResponse.length,
            results: dataResponse
        }
    })
}

module.exports = {
    generalResponse
}