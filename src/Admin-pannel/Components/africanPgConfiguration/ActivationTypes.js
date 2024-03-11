import { Link } from "react-router-dom";

function ActivationTypes({ data }) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6 text-center">{data.title}</h3>
                    </div>
                    <div className="card-body text-center">
                        <div className="clearfix activation-type-image">
                            <img className="float-left" src={data.imgUrl} height={30} />
                            <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                <input type="checkbox" onchange="updateSettings(this, 'flutterwave')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                        <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>{data.description} <Link to="/admin/african/configuration/payment-method">Configure Now</Link> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ActivationTypes;