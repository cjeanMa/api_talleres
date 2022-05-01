const ConnectionMYSQL = require('../database/connectionMYSLQ')

class DbBootstrap{
    async initialize(){
        return new Promise((resolve, reject)=>{
            ConnectionMYSQL.getConnection()
            .then((resp)=>{
                console.log("Connection DB Successfully")
                resolve(resp)
            })
            .catch((err)=>{
                console.log("Problemas al conectar con la bd")
                reject(err)
            })
        })

    }
}

module.exports = DbBootstrap;