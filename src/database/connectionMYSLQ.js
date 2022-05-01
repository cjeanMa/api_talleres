const mysql = require('mysql');
const yenv = require('yenv');
const env = yenv()
console.log(env.PORT)

class ConnectionMYSQL {

    connection

    getConnection() {
        return new Promise((resolve, reject) => {
            const pool = mysql.createPool({
                connectionLimit: 10,
                host: env.MYSQL.HOST,
                user: env.MYSQL.USER,
                password: env.MYSQL.PASSWORD,
                database: env.MYSQL.DATABASE
            });
            pool.getConnection((err, connection) => {
                if (err){
                    console.log(err)
                    reject(err)
                }
                this.connection = connection
                resolve(true)
            });

        })
    }

    sendQuery(query, params) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, params, (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                console.log("Result --> ", result)
                resolve(result)
            })
        })

    }
}

module.exports = new ConnectionMYSQL();