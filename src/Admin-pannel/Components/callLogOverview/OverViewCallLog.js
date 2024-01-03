import React from "react";
import "./Overview.css";
// import img from '../../assets/img/table.png'
import img from '../../../assets/img/table.png'
import img2 from '../../../assets/img/monthlyimg.png'
function OverViewCallLog() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="button">
                      <button className="btn btn-primary">Go back</button>
                    </div>
                  </div>
                </div>
                <hr className="border border-2 opacity-50 border-secondary" />
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="Dark">Filter</p>
                      </div>
                      <div className="col-md-3">
                        <select className="form-select ">
                          <option></option>
                          <option>Suppliers Demo</option>
                          <option>Staff Demo</option>
                          <option>Jay j</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border border-2 opacity-50 border-secondary" />
              </div>
              <div className="container-fluid">
                <div className="row ml-2 mr-2 ">
                  <div className="col-md-5 ">
                    <div
                      className="width border mt-2 "
                      style={{ width: 306, height: 150 }}
                    >
                      <p>Today's call</p>
                      <hr className="border border-2 opacity-50 border-secondary" />
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="text-primary fs-2 text-info">0</div>
                          <span>Inbound</span>
                        </div>
                        <div className="col-4">
                          <div className="text-primary fs-2 text-success">0</div>
                          <span>Outbound</span>
                        </div>
                        <div className="col-4">
                          <div className="text-primary  fs-2 text-primary">8</div>
                          <span>Sms</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="width border mt-2"
                      style={{ width: 306, height: 150 }}
                    >
                      <p>Weekly calls</p>
                      <hr className="border border-2 opacity-50 border-secondary" />
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="text-primary fs-2 text-info ">0</div>
                          <span>Inbound</span>
                        </div>
                        <div className="col-4">
                          <div className="text-primary  fs-2 text-success">0</div>
                          <span>Outbound</span>
                        </div>
                        <div className="col-4">
                          <div className="text-primary  fs-2 text-primary">8</div>
                          <span>Sms</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="width border mt-2"
                      style={{ width: 306, height: 150 }}
                    >
                      <p>Monthly calls</p>
                      <hr className="border border-2 opacity-50 border-secondary" />
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="text-primary fs-2 text-info      ">0</div>
                          <span>Inbound</span>
                        </div>
                        <div className="col-4">
                          <div className="text-primary fs-2 text-success">0</div>
                          <span>Outbound</span>
                        </div>
                        <div className="col-4">
                          <div className="text-primary fs-2 text-primary">8</div>
                          <span>Sms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-7 table-box">
                    <h4>Weekly Calls</h4>
                    <hr className="border border-2 opacity-50 border-secondary" />
                    <div className="table">
                      <img src={img} />
                      {/* <table class="table">
                        <thead>
                          <tr>
                            <th scope="col" ></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"  style={{borderLeft:'none'}}>1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" style={{borderLeft:'none'}}>2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" style={{borderLeft:'none'}}>3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" style={{borderLeft:'none'}}>3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" style={{borderLeft:'none'}}>3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row"  style={{borderLeft:'none',borderBottom:'none'}}></th>
                            <td style={{borderBottom:'none'}}>dsa</td>
                            <td style={{borderBottom:'none'}}>dsa</td>
                            <td style={{borderBottom:'none'}}>ds</td>
                            <td style={{borderBottom:'none'}}>dsa</td>
                            <td style={{borderBottom:'none'}}>ds</td>
                          </tr>
                        </tbody>
                      </table> */}
                    </div>
                  </div>
                </div>
                <div className="table-box mt-3 mb-2 ml-2 mr-2">
                  <h4>Monthly Calls</h4>
                  <hr className="border border-2 opacity-50 border-secondary" />
                  <img src={img2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OverViewCallLog;
