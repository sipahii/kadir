import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddLikeRewardMutation} from "../all-products/allproductsApi/allProductsApi";

function LikeRewardPoint() {

    const [inputVal, setInputVal] = useState({
        Facebook_name_points: '',
        Twitter_name_points: '',
        Instagram_name_points: '',
        LinkedIn_name_points: '',
        Youtube_name_points: '',
    });


    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const [addLikeRewardD, response] = useAddLikeRewardMutation();


    const submitLikeRewardData = (e) => {
        e.preventDefault();
        addLikeRewardD(inputVal)
        console.log(inputVal)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Like Reward added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    console.log(response)
    console.log(inputVal)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">

                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Social Like Reward Points</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" id="create-course-form" onSubmit={submitLikeRewardData}>
                                        <input type="hidden" name="_token" defaultValue="zOLI6djQgPLRjb1g5xZX9s8SLgoSf4ceCRw6vO88" />
                                        <div className="form-group row">

                                            <div className="col-lg-4">
                                                <label className="col-from-label">Facebook Share</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="number" className="form-control" name="Facebook_name_points" required onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-2">
                                                <label className="col-from-label">Points</label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Twitter Share</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="number" className="form-control" name="Twitter_name_points" required onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-2">
                                                <label className="col-from-label">Points</label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Linkedin Share</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="number" className="form-control" name="LinkedIn_name_points" required onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-2">
                                                <label className="col-from-label">Points</label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Instagram Share</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="number" className="form-control" name="Instagram_name_points" required onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-2">
                                                <label className="col-from-label">Points</label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Youtube Share</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="number" className="form-control" name="Youtube_name_points" required onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-2">
                                                <label className="col-from-label">Points</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                <ToastContainer />
            </div>
        </>
    )
}
export default LikeRewardPoint;