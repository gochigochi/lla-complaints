const { DataTypes } = require("sequelize")
const db = require("./index")

const Complaint = db.define("complaint",
    {
        full_name: {
            type: DataTypes.STRING
        },
        dni: {
            type: DataTypes.STRING
        },
        school: {
            type: DataTypes.STRING
        },
        table: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        province: {
            type: DataTypes.STRING
        },
        postal_code: {
            type: DataTypes.STRING
        },
        complaint: {
            type: DataTypes.STRING
        }
    },
)

module.exports = Complaint