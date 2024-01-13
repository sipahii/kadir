import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
// import { useDeleteSellerPackageMutation, useGetSellerPackageQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect, useState } from "react";
// import PerchasePackage from "./PerchasePackage";
// import OnlinePerchase from "./OnlinePerchase";
// import OfflinePerchase from "./OfflinePerchase";
import { useDeleteSellerPackageMutation, useGetSellerPackageQuery } from "../all-products/allproductsApi/allProductsApi";
import PerchasePackage from "../sellerPackage/PerchasePackage";
import OnlinePerchase from "../sellerPackage/OnlinePerchase";
import OfflinePerchase from "../sellerPackage/OfflinePerchase";

function ListCelebrityPackageComp() {
    const isSellerLogin = window.localStorage.getItem('isSellerLogin')

    const { isLoading, data } = useGetSellerPackageQuery();

    const [deleteSellerPackageD, response] = useDeleteSellerPackageMutation();

    const deleteSellerPackageData = (id) => {
        deleteSellerPackageD(id)
    };
    const toastSuccessMessage = () => {
        toast.success("Seller Package Deleted Successfully", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        if (response.isError === true) {
            alert('!Seller Package not deleted')
        };
    }, [response])

    const [modalShow, setModalShow] = useState(false);
    const [items, setItem] = useState(null);
    const [modalShowinner, setModalShowinner] = useState(false);
    const [modalShowouter, setModalShowouter] = useState(false);

    const onlineShow = () => {
        setModalShow(false)
        setModalShowinner(true)
    }

    const offlineShow = () => {
        setModalShow(false)
        setModalShowouter(true)
    }

    const sendData = (item) => {
        setItem(item)
        setModalShow(true)
    };

    console.log('data-----Pc', data)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All Celebrity Packages</h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/add-celebrity-package" className="btn btn-circle btn-info">
                                    <span>Add New Package</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {isLoading ? <h2>Loading...</h2>
                            : data && data.map((item, i) => {
                                return <div className="col-lg-4 col-md-4 col-sm-12" key={item._id}>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <img alt="Package Logo " src={item?.logo?.url} className="mw-100 mx-auto mb-4 Package-3" height="150px" />

                                            <p className="mb-3 h6 fw-600" style={{ textTransform: 'uppercase' }}>{item.name}</p>

                                            <table className="table table-3">
                                                <thead>
                                                    <tr>
                                                        <th class="table-secondary" scope="col">Country</th>
                                                        <th class="table-secondary" scope="col">Currency</th>
                                                        <th class="table-secondary" scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {item?.countries?.map((item, i) => {
                                                        return <tr key={i}>
                                                            <td>{item?.country_id[0]?.name}</td>
                                                            <td>{item?.currency_id[0]?.name}</td>
                                                            {/* <td>AA</td> */}
                                                            <td>{item?.amount}</td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                            <p className="h4">{item?.countries?.amount}</p>

                                            <p className="fs-15">Name:
                                                <b className="text-bold ms-1" style={{ textTransform: 'uppercase' }}>{item?.name}</b>
                                            </p>
                                            <p className="fs-15">Max Services:
                                                <b className="text-bold ms-1">{item?.max_services}</b>
                                            </p>
                                            <p className="fs-15">Max Categories:
                                                <b className="text-bold ms-1">{item?.max_categories}</b>
                                            </p>

                                            <p className="fs-15">Package Duration:
                                                <b className="text-bold ms-1">{item?.duration + " " + item?.duration_type?.name}</b>
                                            </p>
                                            {isSellerLogin === 'true' ?

                                                <button type="button" class="btn btn-info" onClick={() => sendData(item)}>Purchase Package</button>
                                                : <div className="mar-top">
                                                    <Link to={`edit/${item._id}`} className="btn btn-sm btn-info mr-1">Edit</Link>
                                                    <button type="button" onClick={() => deleteSellerPackageData(item._id)} className="btn btn-sm btn-danger confirm-delete">Delete</button>
                                                </div>}

                                        </div>
                                    </div>
                                </div>
                            })}

                        {modalShow && <PerchasePackage
                            show={modalShow}
                            offlineShow={offlineShow}
                            onlineShow={onlineShow}
                            onHide={() => setModalShow(false)}
                        />}


                        {modalShowinner && <OnlinePerchase
                            show={modalShowinner}
                            onHide={() => setModalShowinner(false)}
                            items={items}
                        />}

                        {modalShowouter && <OfflinePerchase
                            show={modalShowouter}
                            items={items}
                            onHide={() => setModalShowouter(false)}
                        />}


                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>



        </>
    )
}
export default ListCelebrityPackageComp