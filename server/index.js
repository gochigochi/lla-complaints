require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db = require("./models/index")
const Complaint = require("./models/complaint")
const complaintsRoutes = require("./routes/complaints")

const app = express()

const syncDb = async () => {
    try {
        // await db.authenticate()
        // console.log("DB connection succeded")
        await db.sync({ force: true })
    } catch (err) {
        throw new Error(err)
    }
}

syncDb()

//Note 3
app.use(express.json())

//Note 4
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ msg: `In port ${process.env.PORT}` })
})

app.use("/api/complaints", complaintsRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})