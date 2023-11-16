import fetchData from "../../utils/fetchData"

//Local MYSQL dev
// const complaints = fetchData("http://localhost:3001/api/complaints")

//JSON server dev
const complaints = fetchData("http://localhost:3000/complaints", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})

const ComplaintsList = () => {

    // const parsedComplaints = complaints?.read().data
    const parsedComplaints = complaints?.read()

    return (
        <div className="pt-5">
            <h1>Lista de denuncias</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    parsedComplaints.map(complaint => {
                        return (
                            <div className="card bg-base-100 shadow-xl pt-10 border-black" key={complaint.id}>
                                <figure className="border-slate-50 max-h-[30rem]">
                                    <img src="/placeholder.png" alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Mesa {complaint.table}
                                        <div className="badge badge-secondary">Fraude</div>
                                    </h2>
                                    <p className="truncate">{complaint.complaint}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">N° de denuncia {complaint.id}</div>
                                        <div className="badge badge-outline">{complaint.user}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ComplaintsList