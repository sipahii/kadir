
function Bangla() {
    return (
        <>
        <form className="p-4 color-Change" action="https://mmslfashions.in/admin/seller_packages/4" method="POST">
  <input type="hidden" name="_method" defaultValue="PATCH" />
  <input type="hidden" name="lang" defaultValue="en" />
  <input type="hidden" name="_token" defaultValue="Gg4ztVuENA5SRVWobfiTqHZoeE8KcHxjx34dmZDw" />                <div className="form-group row">
    <label className="col-sm-2 col-from-label" htmlFor="name">Package Name</label>
    <div className="col-sm-10">
      <input type="text" placeholder="Name" defaultValue="Silver" id="name" name="name" className="form-control" required fdprocessedid="ui6rik" />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-from-label" htmlFor="amount">Amount</label>
    <div className="col-sm-10">
      <input type="number" min={0} step="0.01" placeholder="Amount" defaultValue={500} id="amount" name="amount" className="form-control" required fdprocessedid="nvcsyd" />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-from-label" htmlFor="product_upload_limit">Product Upload Limit</label>
    <div className="col-sm-10">
      <input type="number" min={0} step={1} placeholder="Product Upload Limit" defaultValue={10} id="product_upload_limit" name="product_upload_limit" className="form-control" required fdprocessedid="4a4e3r" />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-from-label" htmlFor="duration">Duration</label>
    <div className="col-sm-10">
      <input type="number" min={0} step={1} placeholder="Validity in number of days" defaultValue={90} id="duration" name="duration" className="form-control" required fdprocessedid="sujrro" />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-md-2 col-form-label" htmlFor="signinSrEmail">Package Logo</label>
    <div className="col-md-10">
      <div className="input-group" data-toggle="aizuploader" data-type="image" data-multiple="false">
        <div className="input-group-prepend">
          <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
        </div>
        <div className="form-control file-amount">1 File selected</div>
        <input type="hidden" name="logo" defaultValue={12} className="selected-files" />
      </div>
      <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={12} title="Kynoch-Logo-PNG.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="https://mmslfashions.in/public/uploads/all/z1CNIkuY8rhgQFW7r8RvWWA0akrBbMCTOPgaKzja.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Kynoch-Logo-PNG</span><span className="ext flex-shrink-0">.png</span></h6><p>30 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="dg39md"><i className="la la-close" /></button></div></div></div>
    </div>
  </div>
  <div className="form-group mb-0 text-right">
    <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="g4qsv8i">Save</button>
  </div>
</form>

        </>
    )
}
export default Bangla