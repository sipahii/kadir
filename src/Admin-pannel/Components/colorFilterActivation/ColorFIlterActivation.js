function ColorFilterActivation() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="mb-0 h6">Color filter activation</h3>
                </div>
                <div className="card-body text-center">
                    <label className="aiz-switch aiz-switch-success mb-0">
                        <input type="checkbox" onchange="updateSettings(this, 'color_filter_activation')" />
                        <span className="slider round" />
                    </label>
                </div>
            </div>
        </>
    )
}
export default ColorFilterActivation;