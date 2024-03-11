function CreditDetails() {
    return <div className='creditCardDetail'>
        <div className='row'>
            <div className="col-6 mb-3">
                <input type="text" placeholder='Credit Card No' className="form-control" />
            </div>
            <div className="col-6 mb-3">
                <input type="text" className="form-control" placeholder='Holder Name' />
            </div>
        </div>

        <div className='row'>
            <div className='col-4'>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Visa</option>
                    <option value="1">MasterCard</option>
                    <option value="3">Others</option>
                </select>
            </div>
            <div className='col-4'>
                <input type="number" className="form-control" placeholder='Month' />
            </div>
            <div className='col-4'>
                <input type="number" className="form-control" placeholder='Year' />
            </div>
            <div className='col-4'>
                <input type="text" className="form-control" placeholder='CVV' />
            </div>
        </div>
    </div>

}
export default CreditDetails