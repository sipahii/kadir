import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"


function SellerBrnadList() {
    const [data, setData] = useState(null)
    const selerId = window.localStorage.getItem('isSellerId')
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/brandSeller/seller/${selerId}`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>Seller Brand List</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Brand Logo</th>
                            <th>Brand Name</th>
                            <th>Brand Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {data ? data.map((item, i) => {
                            console.log(item);
                            return <tr key={item._id}>
                                <td>{1 + i}</td>
                                <td>
                                    <img style={{ width: "90px", height: "90px" }} src={item?.logo?.url} />
                                </td>
                                <td>
                                    {item?.brand_name}
                                </td>
                                <td>
                                    <img style={{ width: "90px", height: "90px" }} src={item?.proof_attach[0].url} />
                                </td>
                                <td>{item.approve ? 'Approved' : 'Rejected' }</td>
                                <td>fsdf</td>

                            </tr>
                        }) : <tr><td><h5>No Data</h5></td></tr>}

                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}
export default SellerBrnadList