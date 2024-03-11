import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import getAllModules from "../../../api/company/getAllModules";
import { RxCross1, RxPlus } from "react-icons/rx";
import Button from "react-bootstrap/Button";
import getAllControllerLists from "../../../api/company/getAllControllerLists";
import addCompany from "../../../api/company/addCompany";

const CreateCompany = () => {
  const [allModules, setAllModules] = useState([]);
  const [controller, setController] = useState([]);
  const param = useParams();
  const token = window.localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedModuleLists, setSelectedModuleLists] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [isAddRow, setIsAddRow] = useState(false);
  const [component, setComponnet] = useState([]);
  const [selectedParentId, setSelectedParentId] = useState("");

  const [controllerList, setControllerList] = useState([]);
  const [compapanyId, setCompanyId] = useState("");

  const fetchData = useCallback(async () => {
    try {
      let data = await getAllModules(token);
      if (data) {
        setAllModules(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
    getData();
    getControllersData();
  }, [fetchData]);

  const onRemoveModule = (item) => {
    let removedId = selectedModuleLists.filter((list) => list._id !== item._id);
    setSelectedModuleLists(removedId);
  };

  const getData = async () => {
    const res = await axios.get(
      `https://onlineparttimejobs.in/api/accountCompany`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setCompanyList(res.data);
  };

  const getControllersData = async () => {
    const res = await axios.get(
      `https://onlineparttimejobs.in/api/roleController`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setControllerList(res.data);
  };

  const onSelecteModule = (item) => {
    setSelectedModuleLists(item);
  };

  const getContollerList = async () => {
    let ids = selectedModuleLists.map((item) => item._id);
    try {
      let data = await getAllControllerLists(ids, token);
      console.log("datttt", data);
      if (data) {
        setController(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onComponetChange = (e, id) => {
    const { value } = e.target;
    let data = JSON.parse(JSON.stringify(controller));
    data.forEach((item) => {
      item?.components?.forEach((item2) => {
        if (item2?._id === id) item2.displayName = value;
      });
    });
    setController(data);
  };
  const onParentChnagehandler = (e, id) => {
    const { value } = e.target;
    let data = JSON.parse(JSON.stringify(controller));
    data.forEach((item) => {
      if (item?._id === id) item.parent[0].name = value;
    });
    setController(data);
  };

  const componentNameChange = (e) => {
    let list = [...component];
    const { value } = e.target;
    let obj = {
      name: value,
      displayName: value,
      frontName: value,
      frontLabel: value,
      label: list[0].label,
      roleControl: list[0].roleControl,
      _id: list[0].roleControl,
    };
    setComponnet([obj]);
  };

  const onRemoveController = (id) => {
    let data = JSON.parse(JSON.stringify(controller));
    let filterData = data.map((item) => ({
      ...item,
      components: item.components.filter((component) => component?._id !== id),
    }));
    setController(filterData);
  };

  const addController = (id) => {
    setSelectedParentId(id);
    setIsAddRow(true);
  };
  const getName = (id) => {
    console.log(controllerList);
    let element = controllerList.find((item) => item._id === id);
    return element?.label;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    let name = getName(value);
    let obj = {
      roleControl: value,
      label: name,
    };
    setComponnet([obj]);
  };

  const addControllerToList = () => {
    let data = JSON.parse(JSON.stringify(controller));
    console.log(component);
    console.log(selectedParentId);
    data.forEach((element) => {
      if (element?._id === selectedParentId) {
        element.components.push(...component);
      }
    });
    setComponnet([]);
    setController(data);
    setIsAddRow(false);
  };

  const onAddCompany = async () => {
    let allData = JSON.parse(JSON.stringify(controller));

    try {
      let data = await addCompany(allData, compapanyId, token);
      console.log("datttt", data);
      if (data) {
        setController(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-4">
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h4>{param?.id ? "Update" : "Create"} Company</h4>
          <hr />
          <div className="container">
            <div className="row">
              <div className="form-group col-md-6" id="seller">
                <label className="col-from-label">Select Company </label>
                {/* <div className="col-md-8"> */}
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={compapanyId}
                  name="seller_id"
                  onChange={(e) => {
                    setCompanyId(e.target?.value);
                  }}
                >
                  <option>Select Company</option>
                  {companyList?.length &&
                    companyList?.map((item) => {
                      return (
                        <option value={item._id} key={item._id}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
                {/* </div> */}
              </div>
              <div className="col-6 ">
                <label for="exampleInputEmail1" className="form-label">
                  * Select Module
                </label>
                <div className="d-flex gap-4">
                  <div style={{ flex: "1" }}>
                    <Multiselect
                      isObject={true}
                      displayValue="name"
                      options={allModules}
                      showCheckbox
                      selectedValues={selectedModuleLists}
                      onRemove={(item) => {
                        onRemoveModule(item);
                      }}
                      onSelect={(item) => {
                        onSelecteModule(item);
                      }}
                    />
                  </div>
                  <Button onClick={getContollerList} variant="success">
                    Get Controllers
                  </Button>
                </div>
              </div>
              {!!controller.length && (
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="d-flex gap-4 justify-content-between">
                      {!!controller.length &&
                        controller?.map((item, i) => {
                          return (
                            <React.Fragment key={i}>
                              <div className="flex-grow-1">
                                <label> {item?.parent[0]?.label}</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={item?.parent[0]?.name}
                                  onChange={(e) =>
                                    onParentChnagehandler(e, item._id)
                                  }
                                />
                              </div>
                              <div className="flex-grow-1 align-self-end componnetsWrapper">
                                {item?.components?.map((val, key) => {
                                  return (
                                    <div
                                      key={`list_${key}`}
                                      style={{
                                        display: "flex",
                                        alignContent: "baseline",
                                      }}
                                    >
                                      <label style={{ minWidth: "120px" }}>
                                        {val.label}
                                      </label>
                                      <input
                                        placeholder="Value"
                                        name={val?._id}
                                        value={val.displayName}
                                        id={i}
                                        className="form-control"
                                        onChange={(e) => {
                                          onComponetChange(e, val._id);
                                        }}
                                      />
                                      <div
                                        style={{
                                          fontSize: "17px",
                                          margin: "0 5px",
                                        }}
                                      >
                                        {" "}
                                        <RxCross1
                                          onClick={() => {
                                            onRemoveController(val?._id, i);
                                          }}
                                        />
                                      </div>
                                      {item?.components.length - 1 === key && (
                                        <div
                                          style={{
                                            fontSize: "17px",
                                            margin: "0 5px",
                                          }}
                                        >
                                          {" "}
                                          <RxPlus
                                            onClick={() =>
                                              addController(item?._id)
                                            }
                                          />
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </React.Fragment>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}

              {isAddRow && (
                <div>
                  <div className="row">
                    <div className="col-md-6">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="roleControl"
                        onChange={handleChange}
                      >
                        <option>Select Controller</option>
                        {!!controllerList.length &&
                          controllerList.map((item) => (
                            <option value={item._id} key={item._id}>
                              {item.label}
                            </option>
                          ))}
                      </select>
                    </div>
                    {!!component.length && (
                      <>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            value={component[0]?.name}
                            onChange={componentNameChange}
                          />
                        </div>
                        <div className="col-md-2">
                          <div
                            style={{
                              fontSize: "17px",
                              margin: "0 5px",
                            }}
                          >
                            {" "}
                            <RxCross1
                              onClick={() => {
                                setIsAddRow(false);
                                setComponnet([]);
                              }}
                            />
                          </div>
                          <div
                            style={{
                              fontSize: "17px",
                              margin: "0 5px",
                            }}
                          >
                            {" "}
                            <RxPlus onClick={addControllerToList} />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
              <div className="buttonBottom">
                <Button onClick={onAddCompany} variant="success">
                  Add Company
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCompany;
