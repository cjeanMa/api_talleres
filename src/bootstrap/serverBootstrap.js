const yenv = require("yenv")
const http = require("http")

const env = yenv();

class ServerBoostrap{

    app

    constructor(app){
        this.app = app
    }

    initialize(){
        return new Promise((resolve, reject)=>{
            const server = http.createServer(this.app)
            server
            .listen(env.PORT)
            .on("listening", ()=>{
                console.log(`Application running in port ${env.PORT}`)
                resolve(true)
            })
            .on("error", (err)=>{
                console.log("Error initializing App")
                console.log(err)
                reject(false)
            })
        })
    }

}

module.exports = ServerBoostrap;