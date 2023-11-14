import fetchData from "../../utils/fetchData"

const complaints = fetchData("http://localhost:3000/complaints", {})

const ComplaintsList = () => {

    return (
        <div>
            <h1>Lista de denuncias</h1>
            <ul>
                {
                    complaints?.read().map(complaint => {
                        return (
                            <div>{complaint.user}</div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ComplaintsList