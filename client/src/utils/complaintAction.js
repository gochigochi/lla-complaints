import { redirect } from "react-router-dom"
import { complaintZodSchema } from "./schemas"

export const complaintAction = async ({ request }) => {

    const raw = await request.formData()
    const data = Object.fromEntries(raw)
    console.log("FORM DATA.....", data)

    //DUMMY DATA
    // const data = {
    //     city:"Bella Vista",
    //     dni:"34156161",
    //     full_name:"diego iovane",
    //     postal_code:"1661",
    //     province:"Buenos Aires",
    //     school:"diego",
    //     table:"iovane",
    //     complaint:"Esta es una queja"
    // }

    const hasEmptyField = Object.values(data).some(el => el === "")

    if (hasEmptyField) return { error: true, errorMsg: "Hay campos vacíos." }

    //CLIENT VALIDATION WITH ZOD
    const schemaResult = complaintZodSchema.safeParse({
        full_name: data.full_name,
        dni: data.dni,
        school: data.school,
        table: data.table,
        city: data.city,
        province: data.province,
        postal_code: data.postal_code,
        complaint: data.complaint,
    })

    if (!schemaResult.success) return { error: true, errorMsg: "Hay campos vacíos." }

    const response = await fetch("http://localhost:3001/api/complaints", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })

    const json = await response.json()

    // console.log("JSON.........", json)

    return { success: true, data: json }
}