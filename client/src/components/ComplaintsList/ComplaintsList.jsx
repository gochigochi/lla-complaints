import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

const ComplaintsList = () => {

    const [ data, loading ] = useFetch("http://localhost:3000/complaints")
    const [ complaints, setComplaints ] = useState(data)

    useEffect(() => {
        if (data) setComplaints(data)
    }, [data])

    console.log(data)

    return (
        <div>ComplaintsList</div>
    )
}

export default ComplaintsList