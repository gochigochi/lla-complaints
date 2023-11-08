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

//USE MIDDLEWARE TO ACCESS THE REQ OBJECT IN THE ROUTEs
//express.json() checks if there is a body in the request sent to the server.
//If yes, it parses the body and attaches the parsed body to the request.
//Then we can grab it in the req object in an route
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ msg: `In port ${process.env.PORT}` })
})

app.use("/api/complaints", complaintsRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})