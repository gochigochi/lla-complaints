const Complaint = require("../models/complaint")

const createComplaint = async (req, res) => {
    const complaint = req.body
    // const { user, table, complaint } = req.body

    //MAKE SERVER SIDE VALIDATION WITH ZOD
    // if (user && table && complaint) {

        try {
            
            const complaintResponse = await Complaint.create(complaint)
            // const complaintResponse = await Complaint.create({ user, table, complaint })
    
            res.status(200).json(complaintResponse)
    
        } catch (error) {
    
            res.status(400).json({ error: error.message})
        }

    // } else {
        // res.status(400).json({error: "User data is missing."})
    // }
}

const getAllComplaints = async (req, res) => {

    try {

        const allComplaints = await Complaint.findAll()

        console.log("ALL COMPLAINTS........", allComplaints)
        
        res.status(200).json({data: allComplaints})

    } catch(error) {

        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createComplaint,
    getAllComplaints,
}