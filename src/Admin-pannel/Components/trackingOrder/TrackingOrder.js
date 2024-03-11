import axios from "axios"
import { SlideshowLightbox } from "lightbox.js-react"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
function TrackingOrder() {

    const [data, setData] = useState(null)

    const [state, setState] = useState(
        {
            courier_reference_no: ""
        }
    )

    const [load, setLoade] = useState(false)

    const getData = async (event) => {
        if (event.key === 'Enter') {
            setLoade(true)
            try {
                const res = await axios.post('https://onlineparttimejobs.in/api/delivery/searchById', state)
                setData(res.data)
                setLoade(false)
            } catch (error) {
                setLoade(false)
            }
        }

    }


    const getData2 = async () => {
        setLoade(true)
        try {
            const res = await axios.post('https://onlineparttimejobs.in/api/delivery/searchById', state)
            setData(res.data)
            setLoade(false)
        } catch (error) {
            setLoade(false)
        }


    }


    const onChanges = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const param = useParams()

    const getHeaderData = async () => {
        setLoade(true)
        try {
            const res = await axios.post('https://onlineparttimejobs.in/api/delivery/searchById', { courier_reference_no: param.val })
            setData(res.data)
            setState({
                courier_reference_no: data.delivery?.courier_reference_no
            })
            setLoade(false)
        } catch (error) {
            setLoade(false)
        }
    }

    useEffect(() => {
        if (param.val) {
            getHeaderData()
        }
    }, [param.val])
    return (
        <>
            <div className="container-1" style={{ margin: "40px 40px 20px 170px" }}>
                <form>
                    <div className="row">
                        {load && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="number" className="form-label">Courie Reference No / Order Id / </label>
                            <input type="text" name="courier_reference_no" aria-describedby="number" className="form-control" value={state.courier_reference_no} onKeyDown={getData} onChange={onChanges} id="number1" />
                        </div>
                        {/* <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="number" className="form-label">Order Id</label>
                            <input disabled value={data?.order_id} type="text" className="form-control" id="number1" aria-describedby="number" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Issue Details</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Receive Details</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="number" className="form-label">COD Amount</label>
                            <input disabled value={'0986'} type="number" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="number" className="form-label">Recd COD Amount</label>
                            <input disabled value={'0986'} type="number" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Forwording Details</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Current Status</label>
                            <input disabled value={data?.status} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Origin</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Destination</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Booking Date</label>
                            <input disabled value={'0986'} type="date" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Credit Customer</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>

                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Zip Code</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Contents</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div>
                        <div className="mb-3 col-lg-6 d-flex align-center">
                            <label htmlFor="text" className="form-label">Address</label>
                            <input disabled value={'0986'} type="text" className="form-control" id="text" aria-describedby="text" />
                        </div> */}
                        <div className="mb-3 col-lg-6c d-flex align-center">
                            <button type="button" onClick={getData2} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row" style={{ margin: "40px 0" }}>
                    {data && <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Awb No</th>
                                <th scope="col">Courier Name</th>
                                <th scope="col">Courier Reference No</th>
                                <th scope="col" colSpan={3}>mode</th>
                                <th scope="col">Rc Name</th>
                                <th scope="col">Rc Date</th>
                                <th scope="col">Rc Phone</th>
                                <th scope="col">Rc Relation</th>
                                <th scope="col">Status</th>
                                <th scope="col">Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.deliverys.map((item) => {
                                return <tr>
                                    <th scope="row">1</th>
                                    <td>{item?.AwbNo}</td>
                                    <td>{data.delivery?.courierName}</td>
                                    <td>{data.delivery?.courier_reference_no}</td>
                                    <td colSpan={3}>{item?.mode}</td>
                                    <td>{item?.rcName}</td>
                                    <td>{item?.updatedAt}</td>
                                    <td>{item?.rcPhone}</td>
                                    <td>{item?.rcRelation}</td>
                                    <td>{item?.status}</td>

                                    <td>
                                        <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto'>
                                            <img style={{ width: '50px' }} src={item?.photo ? item?.photo?.url : 'https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                                            <img style={{ display: 'none' }} src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                                        </SlideshowLightbox>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>}


                    {data && <div className="row">
                        <Table striped style={{ background: "white" }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.getOrderTrans.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{1 + i}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.orderStatusId.orderStatusName}</td>
                                        <td>{item?.Note ? item.Note : "---"}</td>
                                    </tr>
                                })}

                            </tbody>
                        </Table>
                    </div>}




















                </div>
            </div>
        </>
    )
}
export default TrackingOrder