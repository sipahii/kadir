import axios from "axios"
import { useEffect, useState } from "react"

function AffiliateForm() {

  const [data, setData] = useState()

  const getData = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/affiliateForm`)
      setData(res.data)
    } catch (error) {
      alert('Faild To load Ticket')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const appenddToForm = (str) => {
    const clone = { ...data }
    const valClone = [...data[0].value]

    // for (let i = 0; i < valClone.length; i++) {
    //   if (valClone[i].type === str) {
    //     return
    //   }
    // }

    if (str === 'file') {
      const obj = {
        label: "File",
        type: 'file',
        _id: Math.random()
      }
      valClone.push(obj)

    }
    if (str === 'text') {
      const obj = {
        label: "Text",
        type: 'text',
        _id: Math.random()
      }
      valClone.push(obj)
    }
    if (str === 'select') {
      const obj = {
        label: "Select",
        type: 'select',
        _id: Math.random()
      }
      valClone.push(obj)
    }
    if (str === 'multi-select') {
      const obj = {
        label: "Multi-select",
        type: 'multi-select',
        _id: Math.random()
      }
      valClone.push(obj)
    }
    if (str === 'radio') {
      const obj = {
        label: "Radio",
        type: 'radio',
        _id: Math.random()
      }
      valClone.push(obj)
    }
    clone.value = valClone
    setData([clone])
  }

  const delete_choice_clearfix = (index) => {
    const clone = { ...data }
    const valClone = [...data[0].value]

    const filterd = valClone.filter((item, i) => {
      if (i === index) {

      } else {
        return item
      }
    })

    clone.value = filterd
    setData([clone])
  }

  const add_customer_choice_options = (val) => {
    let ind;
    const clone = { ...data }
    const valClone = [...data[0].value]


    const fildata = valClone.find((item, i) => {
      if (item._id === val._id) {
        ind = i
        return item
      }
    })

    const inerarr = fildata.options
    inerarr.push('')
    fildata.options = inerarr

    valClone.splice(ind , 1 ,fildata)
   clone[0].value = valClone
   setData(clone)
    
  }

  const senDatas = async () => {
    console.log(data);
  }

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 h6">Affiliate Registration Form</h5>
              </div>
              <div className="card-body">
                <form >
                  <div className="row">
                    <div className="col-lg-8 form-horizontal" id="form">

                      {data && data[0].value.map((item, i) => {
                        if (item.type === 'text') {
                          return <div key={i} className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                            <div className="col-lg-3">
                              <label className="control-label">Type : {item?.type} </label>
                            </div>
                            <div className="col-lg-7">
                              <input className="form-control" type='text' placeholder="Label" fdprocessedid="van8ic" />
                            </div>
                            <div className="col-lg-2"><span className="btn btn-icon btn-circle" onClick={() => delete_choice_clearfix(i)}><i className="las la-times" /></span></div>
                          </div>
                        }
                        if (item.type === "radio") {
                          return <div key={i} className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                            <div className="col-lg-3">
                              <label className="control-label">Type : {item?.type} </label>
                            </div>
                            <div className="col-lg-7">
                              <input className="form-control" type='text' placeholder="Label" fdprocessedid="van8ic" />

                              <div style={{ margin: "10px 0" }} className="customer_choice_options_types_wrap_child">
                                {item?.options?.length > 0 && item?.options.map((item) => {
                                  return <div className="form-group row">
                                    <div className="col-sm-6 col-sm-offset-4">
                                      <input className="form-control" type="text" name="options_5[]" value={item} required="" />
                                    </div>
                                    <div className="col-sm-2">
                                      <span className="btn btn-icon btn-circle" onClick="delete_choice_clearfix(this)">
                                        <i className="las la-times"></i>
                                      </span>
                                    </div>
                                  </div>
                                })}

                              </div>


                              <div style={{ display: "flex" }}>
                                <button className="btn btn-success pull-right" type="button" onClick={() => add_customer_choice_options(item)}><i class="glyphicon glyphicon-plus"></i> Add option</button>
                              </div>
                            </div>

                            <div className="col-lg-2"><span className="btn btn-icon btn-circle" onClick={() => delete_choice_clearfix(i)}><i className="las la-times" /></span></div>
                          </div>
                        }

                        if (item.type === "checkbox") {
                          return <div key={i} className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                            <div className="col-lg-3">
                              <label className="control-label">Type : {item?.type} </label>
                            </div>
                            <div className="col-lg-7">
                              <input className="form-control" type='text' placeholder="Label" fdprocessedid="van8ic" />

                              <div style={{ margin: "10px 0" }} className="customer_choice_options_types_wrap_child">
                                {item?.options?.length > 0 && item?.options.map((item) => {
                                  return <div className="form-group row">
                                    <div className="col-sm-6 col-sm-offset-4">
                                      <input className="form-control" type="text" name="options_5[]" value={item} required="" />
                                    </div>
                                    <div className="col-sm-2">
                                      <span className="btn btn-icon btn-circle" onClick="delete_choice_clearfix(this)">
                                        <i className="las la-times"></i>
                                      </span>
                                    </div>
                                  </div>
                                })}
                              </div>



                              <div style={{ display: "flex" }}>
                                <button className="btn btn-success pull-right" type="button" onClick={() => add_customer_choice_options(item)}><i class="glyphicon glyphicon-plus"></i> Add option</button>
                              </div>
                            </div>
                            <div className="col-lg-2"><span className="btn btn-icon btn-circle" onClick={() => delete_choice_clearfix(i)}><i className="las la-times" /></span></div>
                          </div>
                        }
                        if (item.type === 'file') {
                          return <div key={i} className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                            <div className="col-lg-3">
                              <label className="control-label">Type : {item?.type} </label>
                            </div>
                            <div className="col-lg-7">
                              <input className="form-control" type='text' placeholder="Label" fdprocessedid="van8ic" />
                            </div>
                            <div className="col-lg-2"><span className="btn btn-icon btn-circle" onClick={() => delete_choice_clearfix(i)}><i className="las la-times" /></span></div>
                          </div>
                        }
                        if (item.type === 'select') {
                          return <div key={i} className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                            <div className="col-lg-3">
                              <label className="control-label">Type : {item?.type} </label>
                            </div>

                            <div className="col-lg-7">
                              <input className="form-control" type='text' placeholder="Label" fdprocessedid="van8ic" />

                              <div style={{ margin: "10px 0" }} className="customer_choice_options_types_wrap_child">
                                {item?.options?.length > 0 && item?.options.map((item) => {
                                  return <div className="form-group row">
                                    <div className="col-sm-6 col-sm-offset-4">
                                      <input className="form-control" type="text" name="options_5[]" value={item} required="" />
                                    </div>
                                    <div className="col-sm-2">
                                      <span className="btn btn-icon btn-circle" onClick="delete_choice_clearfix(this)">
                                        <i className="las la-times"></i>
                                      </span>
                                    </div>
                                  </div>
                                })}
                              </div>



                              <div style={{ display: "flex" }}>
                                <button className="btn btn-success pull-right" type="button" onClick={() => add_customer_choice_options(item)}><i class="glyphicon glyphicon-plus"></i> Add option</button>
                              </div>
                            </div>
                            <div className="col-lg-2"><span className="btn btn-icon btn-circle" onClick={() => delete_choice_clearfix(i)}><i className="las la-times" /></span></div>
                          </div>
                        }
                        if (item.type === 'multi-select') {
                          return <div key={i} className="form-group row" style={{ background: 'rgba(0,0,0,0.1)', padding: '10px 0' }}>
                            <div className="col-lg-3">
                              <label className="control-label">Type : {item?.type} </label>
                            </div>
                            <div className="col-lg-7">
                              <input className="form-control" type='text' placeholder="Label" fdprocessedid="van8ic" />


                              <div style={{ margin: "10px 0" }} className="customer_choice_options_types_wrap_child">
                                {item?.options?.length > 0 && item?.options.map((item) => {
                                  return <div className="form-group row">
                                    <div className="col-sm-6 col-sm-offset-4">
                                      <input className="form-control" type="text" name="options_5[]" value={item} required="" />
                                    </div>
                                    <div className="col-sm-2">
                                      <span className="btn btn-icon btn-circle" onClick="delete_choice_clearfix(this)">
                                        <i className="las la-times"></i>
                                      </span>
                                    </div>
                                  </div>
                                })}
                              </div>



                              <div style={{ display: "flex" }}>
                                <button className="btn btn-success pull-right" type="button" onClick={() => add_customer_choice_options(item)}><i class="glyphicon glyphicon-plus"></i> Add option</button>
                              </div>
                            </div>
                            <div className="col-lg-2"><span className="btn btn-icon btn-circle" onClick={() => delete_choice_clearfix(i)}><i className="las la-times" /></span></div>
                          </div>
                        }

                      })}

                    </div>

                    <div className="col-lg-4">
                      <ul className="list-group">
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onClick={() => appenddToForm('text')}>Text Input</li>
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onClick={() => appenddToForm('select')}>Select</li>
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onClick={() => appenddToForm('multi-select')}>Multiple Select</li>
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onClick={() => appenddToForm('radio')}>Radio</li>
                        <li className="list-group-item btn" style={{ textAlign: 'left' }} onClick={() => appenddToForm('file')}>File</li>
                      </ul>
                    </div>

                  </div>
                  <div className="form-group mb-0 text-right">
                    <button type="button" className="btn btn-primary" onClick={senDatas}>Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p className="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>

    </>
  )
}
export default AffiliateForm