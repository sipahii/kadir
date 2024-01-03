


import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function OutputPurchase() {

    const [data, setData] = useState()
    const [conditions, setConditions] = useState(true)

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/report/outputSaleTax/${conditions}`)
            setData(res.data)
        } catch (error) {
            alert('Data Not Found Server Error !')
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Output Purchase Tax Report</h2>
            <div style={{display:"flex" , justifyContent:"center"}}>
                <div className="col-4">
                    <label for="basic-url" class="form-label">Select Tax</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Purchase with zero Tax</option>
                        <option value="2">Purchase without zero Tax</option>
                    </select>
                </div>
            </div>
            <Table striped bordered style={{ width: "1450px", margin: "20px auto" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Data</th>
                        <th>Order No</th>
                        <th>Reference No</th>
                        <th>Customer</th>
                        <th>Tax number</th>
                        <th>Total amount</th>
                        <th>Payment Method	</th>
                        <th>Discount VAT@ 10%</th>
                        <th>CGST @ 10%</th>
                        <th>GST @ 18%</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, i) => {
                        return <tr key={i}>
                            <td>{1 + i}</td>
                            <td>{item?.createdAt}</td>
                            <td>{item?.package_id?.duration}</td>
                            <td>{item?.order_referenceNo}</td>
                            <td>{item?.user && item?.user?.firstname + " " + item?.user.lastname}</td>
                            <td>{item?.Seller[0]?.tax_number}</td>
                            <td>{item?.grandTotal}</td>
                            <td>COD</td>
                            <td>{item?.transType}</td>
                            <td>{item?.transType}</td>
                            <td>{item?.transType}</td>
                        </tr>
                    })}


                </tbody>
            </Table>
        </>
    );
}

export default OutputPurchase;