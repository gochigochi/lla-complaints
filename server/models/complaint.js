const { DataTypes } = require("sequelize")
const db = require("./index")

const Complaint = db.define("complaint",
    {
        user: {
            type: DataTypes.STRING
        },
        table: {
            type: DataTypes.INTEGER
        },
        complaint: {
            type: DataTypes.STRING
        }
    },
    // {
    //     freezeTableName: true
    // }
)

module.exports = Complaint