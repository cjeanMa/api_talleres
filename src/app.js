const express = require('express')
const cors = require('cors')
const ConnectionMYSQL = require('./database/connectionMYSLQ')
const { ConstantsQueries } = require('./constants/queries')
const {router:vehiclesRouter} = require("./routes/vehiclesRouter")
const {router:distritosRouter} = require("./routes/districtRouter")
const {router:sucursalesRouter} = require("./routes/branchofficeRouter")
const {router:tallerRouter} = require("./routes/workshopRouter")

const app = express()

app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/health", async (req, res) => {
    res.send("OK")
})

app.use("/vehicles", vehiclesRouter)
app.use("/distritos", distritosRouter)
app.use("/sucursales", sucursalesRouter)
app.use("/taller", tallerRouter)

/* app.use("*", ErrorHandler.notFound)
app.use(ErrorHandler.generic) */

//app.listen(8080, ()=>console.log("running in port 8080"))

module.exports = app