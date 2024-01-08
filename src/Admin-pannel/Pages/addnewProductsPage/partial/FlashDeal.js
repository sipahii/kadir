const FlashDeal = ({ flashDeal, freshDeals }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">**Flash Deal </h5>
      </div>
      <div className="card-body">
        <div className="form-group mb-3">
          <label htmlFor="name">Start Date</label>
          <input
            type="date"
            name="start_Date"
            value={flashDeal?.start_Date}
            onChange={freshDeals}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">End Date</label>
          <input
            type="date"
            name="end_Date"
            value={flashDeal?.end_Date}
            onChange={freshDeals}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Discount</label>
          <input
            type="number"
            onChange={freshDeals}
            value={flashDeal?.discount}
            name="discount"
            defaultValue={0}
            min={0}
            step="0.01"
            className="form-control"
            fdprocessedid="hltlp8"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Discount Type</label>
          <select
            className="form-control aiz-selectpicker"
            onChange={freshDeals}
            name="discount_type"
            id="flash_discount_type"
            tabIndex={-98}
          >
            <option value>Choose Discount Type</option>
            <option value="Amount">Amount</option>
            <option value="Percent">Percent</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default FlashDeal;
