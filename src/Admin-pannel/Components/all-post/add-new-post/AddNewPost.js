import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewBlogsMutation, useGetLanguagesQuery } from '../../all-products/allproductsApi/allProductsApi';
import { useParams } from 'react-router-dom';
import { token } from '../../../common/TokenArea';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MultiForm from './MultiForm';
import axios from 'axios';

const toastSuccessMessage = () => {
  toast.success("Blog added Successfully", {
    position: "top-center"
  })
};

function AddNewPost() {
  const token = window.localStorage.getItem('token')
  const { data: langData, refetch } = useGetLanguagesQuery(token);
  const [val, setVal] = useState(langData)
  const [addNewBlog, { isSuccess, isError }] = useAddNewBlogsMutation();

  const onChangeHandler = (e, id, bul) => {

    if (bul) {
      if (bul == 'meta') {
        const maped = val.map((item) => {
          if (item.language_id == id) {
            const obj = { ...item, meta_img: e.target.files[0] }
            return obj
          } else {
            return item
          }
        })
        setVal(maped)
      } else {
        const maped = val.map((item) => {
          if (item.language_id == id) {
            const obj = { ...item, banner: e.target.files[0] }
            return obj
          } else {
            return item
          }
        })
        setVal(maped)
      }

    } else {
      const maped = val.map((item) => {
        if (item.language_id == id) {
          const obj = { ...item, [e.target.name]: e.target.value }
          return obj
        } else {
          return item
        }
      })
      setVal(maped);
    }

  }
  const [spcOr, setspcOr] = useState(false)
  const addNewAttributeData = async (e) => {
    // addNewBlog(inputval)
    setspcOr(true)
    const images = new FormData();
    const clone = [...val]
    for (let i = 0; i < clone.length; i++) {
      let element = clone[i];

      if (element?.meta_img) {
        images.append('image', element?.meta_img);
        if (element?.meta_img?.size) {
          try {
            const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
            const obj = { ...element, meta_img: { public_id: res2.data.public_id, url: res2.data.url } }
            clone.splice(i, 1, obj)
          } catch (error) {

          }
        } else {
          // if url is peresent
        }
        images.delete('image');
      }

    }
    for (let i = 0; i < clone.length; i++) {
      let element = clone[i];

      if (element?.banner) {
        images.append('image', element?.banner);
        if (element?.banner?.size) {
          try {
            const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
            const obj = { ...element, banner: { public_id: res2.data.public_id, url: res2.data.url } }
            clone.splice(i, 1, obj)
          } catch (error) {

          }
        } else {
          // if url is peresent
        }
        images.delete('image');
      }

    }
    // console.log(clone)
    addNewBlog({ data: {list:clone}, token: token })
    // document.getElementById("create-course-form").reset();
    setspcOr(false)
  };


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toastSuccessMessage = () => {
    toast.success("Blog added Successfully", {
      position: "top-center"
    })
  };


  const params = useParams()
  useEffect(() => {
    if (langData) {
      if (!params) {
        const maped = langData.map((item) => {
          return {
            language_id: item._id,
            title: '',
            lable: item.name,
            slug: '',
            banner: '',
            short_description: '',
            meta_title: '',
            meta_img: '',
            description: '',
          }
        })
        setVal(maped)
      } else {
        const maped = langData.map((item) => {
          return {
            language_id: item._id,
            title: '',
            lable: item.name,
            slug: '',
            banner: '',
            short_description: '',
            meta_title: '',
            meta_img: '',
            description: '',
          }
        })
        setVal(maped)
      }
    }
  }, [langData])


  useEffect(() => {
    if (isSuccess) {
      toastSuccessMessage()
    }
    if (isError) {
      alert('Blog Not Add')
    }
  }, [isSuccess, isError])

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Blog Information</h5>
                </div>
                <div className="card-body">

                  {spcOr && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">ded</span>
                    </div>
                    <h6>please wait your Blog uploading</h6>
                  </div>}

                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          {langData && langData.map((item, i) => {
                            return <Tab label={item?.name} value={i} />
                          })}

                        </TabList>
                      </Box>
                      {val && val.map((item, i) => {
                        return <TabPanel value={i}>
                          <div className="card">
                            <MultiForm setValue={setValue} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
                          </div>

                        </TabPanel>
                      })}

                    </TabContext>
                  </Box>








                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
        <ToastContainer />
      </div>

    </>
  )
}
export default AddNewPost;