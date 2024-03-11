

import axios from "axios"
import { useEffect, useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import { GrView } from "react-icons/gr"

function RentProductList() {

    const [data, setdata] = useState(null)
    const token = window.localStorage.getItem('token')
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/serviceProductRent/admin`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${token}`,
            },
        })
        setdata(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const DeleteItems = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/serviceProductRent/delete_Product/${id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${token}`,
                },
            })
            alert('Rent Product Delete Successfully')
            getData()
        } catch (error) {
            alert('Rent Product Not Deleted')
        }
    }


    return <div className="container">
        <div className="aiz-user-panel">
            <h4>All Rental Products</h4>
            <div className="card">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            {/* <th scope="col">Variant</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => {
                            return <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>
                                    <img style={{ width: "50px", height: "50px" }} src={item?.product_image?.url} />
                                </td>
                                <td>{item?.product_name}</td>
                                {/* <td>{item?.variant?.weight}</td> */}
                                <td>
                                    <GrView style={{ margin: "0 10px" }} />
                                    <AiFillDelete onClick={() => DeleteItems(item._id)} />
                                </td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default RentProductList