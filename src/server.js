const DbBootstrap = require("./bootstrap/dbBootstrap");
const ServerBoostrap = require("./bootstrap/serverBootstrap");
const app = require("./app");

const databaseBootstrap = new DbBootstrap();
const serverBoostrap = new ServerBoostrap(app);

const start = async () => {
    try {
        await databaseBootstrap.initialize();
        await serverBoostrap.initialize();
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}
start()