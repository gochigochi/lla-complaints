const Sequelize = require("sequelize")
const dbCongif = require("../config/db-config")

const db = new Sequelize(
    dbCongif.DATABASE,
    dbCongif.USER,
    dbCongif.PASSWORD,
    {
        host: dbCongif.HOST,
        dialect: dbCongif.DIALECT
    }
)

module.exports = db