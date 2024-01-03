import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
function Group() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Button variant="primary" onClick={handleShow} style={{ width: 150 }}>
            + New Group
          </Button>
          <button
            className="btn btn-outline-secondary ml-2"
            style={{ width: 120 }}
          >
            Articals
          </button>

          <Modal className="pop" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form">
                <lable>Group Name</lable>
                <input className="form-control" type="text" />
              </div>
              <div className="form">
                <lable>Color</lable>
                <input className="form-control" type="text" />
              </div>
              <div className="form">
                <lable>Short description</lable>
                <textarea className="form-control" typeof="text" />
              </div>
              <div className="form">
                <lable>Order</lable>
                <input type="number" className="form-control" />
              </div>
              <div className="check-box">
              <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Disabled
  </label>
 
</div>
<label>Note: All articles in this group will be hidden if disabled is checked</label>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="container mt-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7 d-flex">
                    <select className="form-select" style={{ width: 90 }}>
                      <option>25</option>
                      <option>30</option>
                      <option>35</option>
                    </select>
                    <button className="btn btn-outline-secondary  ml-2">
                      <span>Export</span>
                    </button>
                  </div>
                  <div className="col-md-5">
                    <div
                      className="input-group flex-nowrap justify-content-end"
                      style={{ width: 140 }}
                    >
                      <span className="input-group-text" id="addon-wrapping">
                        <AiOutlineSearch />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                </div>
                <div className="container mt-3">
                  <div className="row">
                    <table className="table">
                      <thead className="table-secondary">
                        <tr>
                          <td className="col-6">Name</td>
                          <td className="col-3">Active</td>
                          <td className="col-3">Options</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Return Support</td>
                          <td>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input ml-1 mb-2"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                defaultChecked=""
                                style={{ width: 50, height: 20 }}
                                color="text-info"
                              />
                            </div>
                          </td>
                          <td>
                            <button>
                              <span>
                                <AiOutlineEdit />
                              </span>
                            </button>
                            <button className="ml-2">
                              <AiFillCloseCircle />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div className="">
                      <lable className="form-lable">
                        Showing 1 to 1 of 1 entries
                      </lable>
                    </div>
                  </div>
                  <div className="col-md-5 text-end">
                    <button className="btn-outline-secondary">Previous</button>
                    <input type="number" style={{ width: 40 }} />
                    <button className="btn-outline-secondary">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Group