

import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function ListParchaseList() {

    const [data, setData] = useState()
    const ids = window.localStorage.getItem('isSellerId')
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/packagePaymentHistory/seller/${ids}`)
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
            <h2 style={{ textAlign: "center" }}>Packages Purchase List</h2>
            <Table striped bordered style={{ width: "1300px", margin: "20px auto" }}>
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
                            <td>{item?.status ? "Approve" : "Pending"}</td>
                        </tr>
                    })}


                </tbody>
            </Table>
        </>
    );
}

export default ListParchaseList;