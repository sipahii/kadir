import AddNewColors from "../../Components/addNewColors/AddNewColors";
import ColorFilterActivation from "../../Components/colorFilterActivation/ColorFIlterActivation";
import Colors from "../../Components/colors/Colors";

function ColorsPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h3">All Colors</h1>
                        </div>
                    </div>
                    <div className="row">
                        <Colors />
                        <div className="col-md-5">
                            <AddNewColors />
                            <ColorFilterActivation />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ColorsPage;