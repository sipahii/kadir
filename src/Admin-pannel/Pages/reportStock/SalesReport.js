import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function SalesReport() {

    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/order/getallorders`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])


    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>Sales Report</h5>
                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Order Id</th>
                            <th>Total Qty</th>
                            <th>Paid Currency</th>
                            <th>Subtotal</th>
                            <th>Total Tax</th>
                            <th>Grand total</th>
                            <th>Paid</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data ? data?.alluserorders.map((item ,i ) => {
                         
                            return <tr key={item._id}>
                                <td>{1 + i}</td>
                                <td>{item.createdAt}</td>
                                <td>{item?.order_referenceNo}</td>
                                <td>{item?.products?.length}</td>
                                <td>{item?.currency?.code ? item?.currency?.symbol + " " + item?.currency?.code : 'ZK'}</td>
                                <td>{item?.subTotal}</td>
                                <td>{item?.tax}</td>
                                <td>{item?.grandTotal}</td>
                                <td>{item?.Paid}</td>
                                <td>{item?.Balance}</td>
                            </tr>
                        }) : <tr><td><h4>No Data....</h4></td></tr>}



                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}
export default SalesReport