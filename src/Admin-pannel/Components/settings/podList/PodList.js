// import { SlideshowLightbox } from "lightbox.js-react";
// import Lightbox from "react-awesome-lightbox";
// import "react-awesome-lightbox/build/style.css";

import axios from "axios"
import { SlideshowLightbox } from "lightbox.js-react"
import 'lightbox.js-react/dist/index.css'
import { useEffect, useState } from "react"

// import "react-awesome-lightbox/build/style.css";
function PodList() {

    const [data, setData] = useState(null)
    const [load, setLoade] = useState(false)

    const getData = async () => {
        setLoade(true)
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/delivery')
            setData(res.data)
            setLoade(false)
        } catch (error) {
            setLoade(false)
        }


    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">POD List</h1>
                            </div>
                            {load && <div className="preloaderCount">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>}
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">POD List</h5>
                        </div>
                        <div className="card-body">


                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr. No</th>
                                        <th scope="col">POD No</th>
                                        <th scope="col">Entry Date</th>
                                        <th scope="col">Order No</th>
                                        {/* <th scope="col">Order Date</th> */}
                                        <th scope="col">AWB No</th>
                                        <th scope="col">Receiver Name</th>
                                        <th scope="col">Receiver Relation</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Comments </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item, i) => {
                                        return <tr key={item._id}>
                                            <th>{1 + i}</th>
                                            <td>{item._id}</td>
                                            <td>{item?.createdAt}</td>
                                            <td>{item?.order_id}</td>
                                            {/* <td>30-05-2023</td> */}
                                            <td>{item?.AwbNo}</td>
                                            <td>{item?.rcName}</td>
                                            <td>{item?.rcRelation}</td>

                                            <td>
                                                <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto'>
                                                    <img style={{ width: '50px' }} src={item?.photo ? item?.photo.url: 'https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                                                    <img style={{ display: 'none' }} src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                                                </SlideshowLightbox>
                                            </td>

                                            <td>{item?.note}</td>
                                        </tr>
                                    })}


                                </tbody>
                            </table>


                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default PodList