import axios from "axios"
import { useEffect, useState } from "react"

function Seller_packages_purchase_list() {
    const token = window.localStorage.getItem('token')

    const [data, setData] = useState()
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/packagePaymentHistory`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setData(res.data)
        } catch (error) {
            alert('Data Not Found Server Error !')
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const changeStatus = async (item) => {
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/packagePaymentHistory/update_PackagePaymentStatus/${item?._id}`, { status: !item.status }, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            getData()
            alert('Status Update Successfully')
        } catch (error) {
            alert('Status Not Update')
        }
    }


    return <>
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Seller Packages Purchase List</h5>
                    </div>
                    <div className="card-body">
                        <table cellSpacing={0} width="100%" style={{}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Photo</th>
                                    <th>Data</th>
                                    <th>Package Name</th>
                                    <th>Package Duration</th>
                                    <th>Package Amount</th>
                                    <th>Package Type</th>
                                    <th>Trans Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{1 + i}</td>
                                        <td>
                                            <img style={{ width: "120px", height: "120px" }} src={item?.photo?.url} />
                                        </td>
                                        <td>{item?.createdAt}</td>
                                        <td>{item?.package_id?.name}</td>
                                        <td>{item?.package_id?.duration}</td>
                                        <td>{item?.package_id?.amount}</td>
                                        <td>{item?.packageType}</td>
                                        <td>{item?.transType}</td>
                                        <td>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => changeStatus(item)} checked={item?.status} />
                                            </div>

                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                {/*p className="mb-0">&copy;  v6.3.3</p*/}
            </div>
        </div>

    </>
}
export default Seller_packages_purchase_list