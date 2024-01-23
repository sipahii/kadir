import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import getAllCompanyList from "../../../api/company/getAllCompanyList";

function AllCompanyList() {
  const token = window.localStorage.getItem("adminToken");
  const [isLoading, setIsLoading] = useState(true);
  const [companyList, setCompanyList] = useState(null);
  const [allList, setAllList] = useState([]);
  const inputRef = useRef();
  const getData = async () => {
    try {
      let data = await getAllCompanyList(token);
      console.log("datttt", data);
      if (data) {
        setCompanyList(data);
        setAllList(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const toastSuccessMessage1 = () => {
    toast.success("Company Delete Successfully", {
      position: "top-center",
    });
  };

  const toastErrorMessage1 = () => {
    toast.error("Company Not Delete ", {
      position: "top-center",
    });
  };
  const deleteData = async (id) => {
    try {
      const res = await axios.delete(
        `https://onlineparttimejobs.in/api/accountCompany/delete_company/${id}`,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toastSuccessMessage1();
      getData();
    } catch (error) {
      toastErrorMessage1();
    }
  };

  const getModuleName = (module) => {
    let string = module.map((item) => item.name);
    return string.join(",");
  };

  const searchButtonClicked = () => {
    let list = [...companyList];
    list = list.filter((item) =>
      item?.name?.toLowerCase().includes(inputRef?.current?.value.toLowerCase())
    );
    setAllList(list);
  };
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="tableHeader">
              <h5>All Company List </h5>
              <div class="form-group mb-0 d-flex">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="search"
                  name="search"
                  placeholder="Type Company Name"
                  ref={inputRef}
                />
                <button
                  type="button"
                  class="btn btn-primary ms-1"
                  style={{ padding: " 0px 10px" }}
                  onClick={searchButtonClicked}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">module</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {!!allList.length &&
                    allList?.map((item, i) => {
                      return (
                        <tr key={item._id}>
                          <th scope="row">{i + 1}</th>
                          <td>{item?.name}</td>
                          <td>{getModuleName(item?.roleParent)}</td>
                          <td>
                            <Link
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              title="Edit"
                              to={`/admin/company_edit/${item?._id}`}
                            >
                              <i className="las la-edit" />
                            </Link>
                            <button
                              type="button"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onClick={() => {
                                deleteData(item._id);
                              }}
                            >
                              <i className="las la-trash" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllCompanyList;
