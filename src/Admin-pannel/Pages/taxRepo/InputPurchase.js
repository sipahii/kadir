
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function InputPurchase() {

    const [data, setData] = useState()
    const ids = window.localStorage.getItem('isSellerId')
    const [conditions, setConditions] = useState(true)

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/report/inputPurchaseTax/${conditions}`)
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
            <h2 style={{ textAlign: "center" }}>Input Purchase Tax Report</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-4">
                    <label for="basic-url" class="form-label">Select Tax</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Purchase with zero Tax</option>
                        <option value="2">Purchase without zero Tax</option>
                    </select>
                </div>
            </div>
            <Table striped bordered style={{ width: "1300px", margin: "20px auto" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Data</th>
                        <th>Order No</th>
                        <th>Reference No</th>
                        <th>Supplier</th>
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
                            <td>{item?.createdAt}</td>
                            <td>{item?.createdAt}</td>
                            <td>{item?.package_id?.name}</td>
                            <td>{item?.package_id?.duration}</td>
                            <td>{item?.package_id?.amount}</td>
                            <td>{item?.packageType}</td>
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

export default InputPurchase;