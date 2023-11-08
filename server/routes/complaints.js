const express = require("express")
const { 
    createComplaint, 
    getAllComplaints,
} = require("../controllers/complaintsController")

const router = express.Router()

//GET ALL COMPLAINTS
router.get("/", getAllComplaints)

//GET SINGLE COMPLAINT
router.get("/:id", (req, res) => {
    res.json({ msg: "Single complaint" })
})

//POST A COMPLAINTS
router.post("/", createComplaint)

//DELETE A COMPLAINT
router.delete("/:id", (req, res) => {
    res.json({ msg: "Delete a complaint"})
})

//UPDATE A COMPLAINT
router.patch("/:id", (req, res) => {
    res.json({ msg: "Update a complaint"})
})

module.exports = router