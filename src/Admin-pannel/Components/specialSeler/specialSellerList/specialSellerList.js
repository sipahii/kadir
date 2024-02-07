import axios from "axios";
import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { base_Url } from "../../../../server";
import { useEffect } from "react";
import { GrView } from "react-icons/gr";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Multiselect from "multiselect-react-dropdown";
import { AiOutlineDownload } from "react-icons/ai";
import html2pdf from "html2pdf.js";
import {
  useGetDistrictQuery,
  useGetDivitionQuery,
} from "../../all-products/allproductsApi/allProductsApi";
import ImgShowModal from "../ImgShowModal";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FcApproval, FcApprove, FcDisapprove } from "react-icons/fc";
import { MdPending } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ModalSelected from "./ModalSelected";
import { Pagination } from "antd";
import { green } from "@mui/material/colors";
import pdfImg from "../../../../assets/img/pdf-icon.png";
// import Pagination from 'react-bootstrap/Pagination';
function SpecialSellerList() {
  const [hitFilterApi, setHitFilterApi] = useState(false);
  const [excelDownloadDataAcc, setExcelDownloadDataAcc] = useState(true);
  const [count, setCount] = useState(20);
  const [showExcelTable, setShowExcelTable] = useState(false);
  const token = window.localStorage.getItem("token");

  const [listSeller, setListSeller] = useState(null);
  const [statusList, setStatusList] = useState(null);
  const [categoryy, setCategoryy] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [pagesCount, setPagesCount] = useState();
  const [totalCount, setTotalCount] = useState();

  const [excelDownloadAllData, setExcelDownloadAllData] = useState(null);
  const [showDownloadExcelBtn, setShowDownloadExcelBtn] = useState(false);
  const [finalDisabilityTypeD, setFinalDisabilityTypeD] = useState();
  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const disabilityTypeData = [
    { name: "locoMotor" },
    { name: "leprosy" },
    { name: "cerebralPal" },
    { name: "dwarfism" },
    { name: "muscular_dy" },
    { name: "acidAttactVic" },
    { name: "blindness" },
    { name: "lowVision" },
    { name: "hearingImp" },
    { name: "speechNlang" },
    { name: "intellect" },
    { name: "specific_learn" },
    { name: "autism" },
    { name: "mentalBehave" },
    { name: "multiScler" },
    { name: "parkinson" },
    { name: "hemoPhilia" },
    { name: "thalassemia" },
    { name: "sickieCell" },
    { name: "chronicNeu" },
    { name: "multipleDisab" },
  ];

  const [searchList, setSearchList] = useState({
    start_date: null,
    end_date: null,
    firstname: null,
    lastname: null,
    email: null,
    mobile: null,
    application: null,
    udid: null,
    adharnumber: null,
    status: null,
    minDOB: null,
    maxDOB: null,
    category: null,
    state: null,
    severe_disability: null,
    Division: null,
    District: null,
    disability: null,
    minAge: null,
    maxAge: null,
    page: 0,
    count: 5,
    disType: null,
    otherBusiness: "",
  });
  const { data: divisionData } = useGetDivitionQuery(token);
  const [finalCatD2, setFinalCatD2] = useState();
  const [finalCatD3, setFinalCatD3] = useState();
  const [spinn, setspinn] = useState();
  const [districtData, setdistrictData] = useState();
  const getDistrictDivsion = async () => {
    try {
      const res = await axios.post(
        `${base_Url}district/division`,
        { Division: finalCatD2 },
        {
          withCredentials: true,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setdistrictData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    if (finalCatD2?.length) {
      getDistrictDivsion();
    }
  }, [finalCatD2]);

  const handleChangeSearch = (e) => {
    if (e.target.value == "655871355f3044de88295e94") {
      setShowCategoryInput(true);
    } else {
      setShowCategoryInput(false);
    }
    const clone = { ...searchList };
    const value = e.target.value;
    const name = e.target.name;
    clone[name] = value;
    setSearchList(clone);
  };

  const [categ, setCateg] = useState([
    { name: "null", id: 0 },
    { name: "Below 10k", id: 1 },
    { name: "10k to 1 lakhs", id: 2 },
    { name: "1 lakhs to 2.5 lakhs", id: 3 },
    { name: "2.5 lakhs and more", id: 4 },
  ]);
  const [finalCatD, setFinalCatD] = useState();

  const statusSelect = async () => {
    try {
      const res = await axios.get(`${base_Url}specialSeller/statusList`, {
        withCredentials: true,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      setStatusList(res?.data.status);
    } catch (error) {}
  };
  const [apedFilter, setapedFilter] = useState(false);

  const filterPaginationCounts = async (clone) => {
    try {
      const resp = await axios.post(
        `${base_Url}specialSeller/filterCount`,
        clone,
        {
          withCredentials: true,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const roundedValue = Math.floor(resp.data.page);
      const totalCountD = Math.floor(resp.data.count);
      setPagesCount(roundedValue);
      setTotalCount(totalCountD);
    } catch (error) {
      setTotalCount(0);
    }
  };

  const postSearchList = async (abcPage) => {
    setapedFilter(true);
    setspinn(true);
    const clone = {
      ...searchList,
      income: finalCatD,
      disability: +searchList.disability,
      Division: finalCatD2,
      District: finalCatD3,
      page: abcPage,
      count: 10,
      disType: finalDisabilityTypeD,
    };
    filterPaginationCounts(clone);
    try {
      const res = await axios.post(`${base_Url}specialSeller/filter`, clone, {
        withCredentials: true,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      setListSeller(res.data);
      setExcelDownloadDataAcc(false);
      setHitFilterApi(true);
      if (res.data?.status == 500) {
        alert(res.data.message);
      }
      setspinn(false);
    } catch (error) {
      setspinn(false);
      setTotalCount(0);
    }
  };

  const getSpecialSeller = async (str) => {
    if (hitFilterApi) {
      postSearchList(str);
    } else {
      setspinn(true);
      setapedFilter(false);
      // setPageIndex(pageIndex + 1)
      try {
        const res = await axios.get(`${base_Url}specialSeller/page/${str}&10`, {
          withCredentials: true,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        });
        setListSeller(res?.data);
        setspinn(false);
      } catch (error) {
        setspinn(false);
      }
    }
  };

  const changeLoad = () => {
    setCount(count + 50);
  };

  const getCategory = async () => {
    try {
      const res = await axios.get(`${base_Url}category/admin/child/${25}`, {
        withCredentials: true,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      setCategoryy(res?.data);
    } catch (error) {}
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(
      `${base_Url}specialSeller/delete_seller/${id}`,
      {
        withCredentials: true,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getSpecialSeller();
  };
  const params = useParams();
  useEffect(() => {
    if (!params?.id) {
      getSpecialSeller(0);
    }
    statusSelect();
    getCategory();
  }, []);
  const handleDownloadClick1 = async (url, imagname, forceDownload = false) => {
    if (!forceDownload) {
      const link = document.createElement("a");
      link.href = url;
      link.download = imagname;
      document.body.appendChild(link);
      link.click();
      document.removeChild(link);
    }
    const imagblob = await fetch(url)
      .then((response) => response.arrayBuffer())
      .then((buffer) => new Blob([buffer], { type: "image/png" }));

    const link = document.createElement("a");
    link.href = URL.createObjectURL(imagblob);
    link.download = imagname;
    document.body.appendChild(link);
    link.click();
    document.removeChild(link);
  };

  useEffect(() => {
    if (params?.id) {
      setSearchList({ ...searchList, status: params.id });
      const getParam = async () => {
        setapedFilter(true);
        setspinn(true);
        const clone = {
          ...searchList,
          income: finalCatD,
          disability: +searchList.disability,
          Division: finalCatD2,
          District: finalCatD3,
          status: params.id,
          disType: finalDisabilityTypeD,
        };
        try {
          const res = await axios.post(
            `${base_Url}specialSeller/filter`,
            clone,
            {
              withCredentials: true,
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setListSeller(res.data);
          if (res.data?.status == 500) {
            alert(res.data.message);
          }
          setspinn(false);
        } catch (error) {
          setspinn(false);
        }
      };
      getParam();
    }
  }, [params?.id]);
  const [modalShow, setModalShow] = useState(false);
  const [imgurl, setimgurl] = useState(null);
  const [imghead, imgimghead] = useState(null);
  const openModal = (url, str) => {
    if (!url) {
      return;
    }
    setModalShow(true);
    setimgurl(url);
    imgimghead(str);
  };

  const [filterState, setfilterState] = useState({
    sellers: [],
    status: "",
    comment: "No Comments",
  });
  const seperatechanger = (e) => {
    const clone = { ...filterState };
    clone[e.target.name] = e.target.value;
    setfilterState(clone);
  };

  const changeBulkSelect = async (id) => {
    const clone = { ...filterState };
    const arrCat = [...clone.sellers];
    let flag = false;
    let indexflag = false;
    let index;
    // debugger
    if (arrCat.length == 0) {
      arrCat.push(id);
      clone.sellers = arrCat;
      setfilterState(clone);
    } else {
      for (let i = 0; i <= arrCat.length; i++) {
        if (arrCat[i] == id) {
          flag = true;
          indexflag = true;
          index = i;
        }
      }
      if (indexflag) {
        arrCat.splice(index, 1);
        clone.sellers = arrCat;
        setfilterState(clone);
        index = undefined;
        return;
      }
      if (!flag) {
        arrCat.push(id);
        clone.sellers = arrCat;
        setfilterState(clone);
      }
    }
  };

  const toastSuccessMessage = () => {
    toast.success("Status Update Successfully", {
      position: "top-center",
    });
  };

  const toastErrorMessage = () => {
    toast.error("Statue not Update", {
      position: "top-center",
    });
  };
  const [modalShow3, setModalShow3] = useState(false);
  const sendBulksStatus = async () => {
    // setModalShow3(true)
    setspinn(true);
    try {
      const res = await axios.post(
        `${base_Url}specialSeller/multiStatus`,
        filterState,
        {
          withCredentials: true,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setspinn(false);
      getSpecialSeller();
      toastSuccessMessage();
    } catch (error) {
      toastErrorMessage();
      setspinn(false);
    }
  };

  const statusChangeOnPage = async (id, ite) => {
    setspinn(true);
    try {
      const res = await axios.post(
        `${base_Url}specialSeller/status`,
        { seller_id: ite, status: id },
        {
          withCredentials: true,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setspinn(false);
      getSpecialSeller();
      toastSuccessMessage();
    } catch (error) {
      toastErrorMessage();
      setspinn(false);
    }
  };

  const [pdfPrinting, setPdfprinting] = useState();
  const printNow = async () => {
    const capchare = document.querySelector(".table-to-pdf");
    html2canvas(capchare).then((canvas) => {
      const image = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const compowith = doc.internal.pageSize.getWidth();
      const compohigth = doc.internal.pageSize.getHeight();
      doc.addImage(image, "PNG", 0, 0, compowith, compohigth);
      doc.save("MSHFDC.pdf");
    });
  };

  const [loader, setLoader] = useState(false);
  const handleGenerateExcel = async (item) => {
    setLoader(true);
    setPdfprinting(item);
    setTimeout(() => {
      printNow();
      setLoader(false);
    }, 1000);
  };

  const [pdfData, setPdfData] = useState(null);

  const [imgPhoto, setImgPhoto] = useState("");
  const [imgSign, setImgSign] = useState("");

  const func111 = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();

      reader.onloadend = function () {
        // console.log(reader.result);
        setImgPhoto(reader.result.toString());
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };
  const func222 = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();

      reader.onloadend = function () {
        // console.log(reader.result);
        setImgSign(reader.result.toString());
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };

  const managePdfData = (item) => {
    // setLoader(true)
    // func111(item?.seller?.userPhoto?.url)
    // func222(item?.seller?.signPhoto?.url)
    // setPdfData(item)
    // setTimeout(() => {
    //     handleConvertToPdf()
    // }, 6000);

    listProfe = [item?.seller];
    // listProfe[0].dob = item?.dob
    // listProfe[0].applicationDate = item?.applicationDate
    console.log("---item----", item);
    // setTimeout(() => {
    //   downloadPdf()
    // }, 2000);
    downloadPdf();
  };

  const pdfContainerRef = useRef();

  const handleConvertToPdf = async () => {
    const pdfContainer = pdfContainerRef.current;

    // Ensure the PDF container is not empty
    if (pdfContainer) {
      // Configuration for html2pdf
      const options = {
        margin: 10,
        filename: "generated-pdf.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      // // Generate PDF from HTML content
      html2pdf(pdfContainer, options)
        .outputPdf()
        .then(async (outputData) => {
          // debugger
          // // Convert the Uint8Array to a Blob
          // const pdfBlob = new Blob([outputData], { type: 'application/pdf' });

          // // Read the Blob as ArrayBuffer
          // const arrayBuffer = await pdfBlob.arrayBuffer();

          // // Convert ArrayBuffer to Uint8Array
          // const uint8Array = new Uint8Array(arrayBuffer);

          // // Send the PDF data to the API

          // const file = new File([outputData])

          setLoader(false);
        });
    }
  };
  const [counts, setcounts] = useState(1);
  const getPaginationD = (pageNo) => {
    setcounts(pageNo);
    setPageIndex(pageNo);
    getSpecialSeller(pageNo);
  };
  const getPaginationDExtra = (str) => {
    setcounts(str);
    if (str === "next") {
      getSpecialSeller(pageIndex + 1);
      setPageIndex(pageIndex + 1);
    } else {
      if (pageIndex == 0) {
        return;
      }
      getSpecialSeller(pageIndex - 1);
      setPageIndex(pageIndex - 1);
    }
  };

  const getPages = async () => {
    try {
      const res = await axios.get(`${base_Url}specialSeller/totalPage/${10}`, {
        withCredentials: true,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      const da = [];
      // for (let i = 1; i < res.data.page; i++) {
      //     da.push(i)
      // }
      const roundedValue = Math.floor(res.data.page);
      const totalCountD = Math.floor(res.data.count);
      setPagesCount(roundedValue);
      setTotalCount(totalCountD);
    } catch (error) {
      setTotalCount(0);
    }
  };

  const handleLoadTotalBeneficiaries = async () => {
    const clone = {
      ...searchList,
      income: finalCatD,
      disability: +searchList.disability,
      Division: finalCatD2,
      District: finalCatD3,
      page: pageIndex,
      count: 10,
      disType: finalDisabilityTypeD,
    };
    try {
      if (excelDownloadDataAcc) {
        setLoader(true);
        const res = await axios.get(`${base_Url}specialSeller`, {
          withCredentials: true,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        });
        setExcelDownloadAllData(res.data);
        setLoader(false);
        if (res.data?.length) {
          setShowDownloadExcelBtn(true);
        }
      } else {
        setLoader(true);
        const res = await axios.post(
          `${base_Url}specialSeller/allFilter`,
          clone,
          {
            withCredentials: true,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setExcelDownloadAllData(res.data);
        setLoader(false);
        if (res.data?.length) {
          setShowDownloadExcelBtn(true);
        }
      }
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getPages();
  }, []);

  const onChangeVal = (e) => {
    // console.log(e);
    getSpecialSeller(e - 1);
    setPageIndex(e - 1);
  };

  // const [listProfe, setListProfe] = useState()
  let listProfe;
  // useEffect(() => {
  //   console.log('aaaaaaaaaaa---', listProfe)
  //   downloadPdf()
  // }, [listProfe])

  let colorMode = "red";
  let fontSize = "20px";

  let imgSign1;
  let imgPhoto1,
    castCertificate,
    frontOfBankPassBook,
    affidavith,
    disabilityCert,
    udidCerti,
    addressProof,
    identityProof,
    domacileCertificate;

  async function toDataURL(url, na) {
    var xhr = new XMLHttpRequest();
    xhr.onload = async function () {
      var reader = new FileReader();

      reader.onloadend = async function () {
        //return reader.result.toString();
        // console.log('na', na);
        let base64;
        if (reader.result.toString().slice(0, 13) == "data:text/xml") {
          base64 = "data:image/png" + reader.result.toString().slice(13);
        } else {
          base64 = reader.result.toString();
        }
        if (na == "signPhoto") {
          ///setImgSign(reader.result.toString());
          imgSign1 = base64;
        } else if (na == "cateCertificate") {
          //          setCastCertificate(reader.result.toString());
          castCertificate = base64;
          console.log("castCertificate", castCertificate);
        } else if (na == "frontOfBankPassBook") {
          //        setFrontOfBankPassBook(reader.result.toString());
          frontOfBankPassBook = base64;
        } else if (na == "affidavith") {
          // setAffidavith(reader.result.toString());
          affidavith = base64;
          // console.log(affidavith);
        } else if (na == "disabilityCert") {
          // setDisabilityCert(reader.result.toString());
          disabilityCert = base64;
        } else if (na == "udidcerti") {
          // setUdidCerti(reader.result.toString());
          udidCerti = base64;
        } else if (na == "addressproof1") {
          // setAddressProof(reader.result.toString());
          addressProof = base64;
        } else if (na == "identityproof") {
          // setIdentityProof(reader.result.toString());
          identityProof = base64;
        } else if (na == "domacileCertifi") {
          // setDomacileCertificate(reader.result.toString());
          domacileCertificate = base64;
        } else {
          // setImgPhoto(reader.result.toString());
          // console.log(reader.result.toString());
          imgPhoto1 = base64;
          // console.log('imgPhoto', imgPhoto);
        }
      };
      reader.readAsDataURL(xhr.response);
    };

    if (url != undefined && url != null && url?.slice(-3) == "pdf") {
      url =
        "https://stagingapi.mshfdc.co.in/api/cloudinaryimage/pdf2image/" +
        url?.slice(49);
    }

    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
    // setImgPhoto()
  }

  const [imageAddress, setAddress] = useState();
  const imgShoing = (url) => {
    // setModalShow1(true);
    setAddress(url);
  };
  const downloadPdf = async () => {
    let sign = await toDataURL(
      listProfe[0].signPhoto.url
        ? listProfe[0].signPhoto.url
        : listProfe[0].signPhoto.s3url,
      "signPhoto"
    );
    // console.log("variable", sign);
    console.log(
      "signPhoto img ->",
      listProfe[0].signPhoto.url
        ? listProfe[0].signPhoto.url
        : listProfe[0].signPhoto.s3url
    );
    await toDataURL(
      listProfe[0].userPhoto.url
        ? listProfe[0].userPhoto.url
        : listProfe[0].userPhoto.s3url,
      "userPhoto"
    );

    await toDataURL(
      listProfe[0].castCertificate.url
        ? listProfe[0].castCertificate.url
        : listProfe[0].castCertificate.s3url,
      "cateCertificate"
    );
    await toDataURL(
      listProfe[0].frontOfBankPassBook.url
        ? listProfe[0].frontOfBankPassBook.url
        : listProfe[0].frontOfBankPassBook.s3url,
      "frontOfBankPassBook"
    );
    await toDataURL(
      listProfe[0].affidavith.url
        ? listProfe[0].affidavith.url
        : listProfe[0].affidavith.s3url,
      "affidavith"
    );
    await toDataURL(
      listProfe[0].disabilityCertImage.url
        ? listProfe[0].disabilityCertImage.url
        : listProfe[0].disabilityCertImage.s3url,
      "disabilityCert"
    );
    await toDataURL(
      listProfe[0].udId_File.url
        ? listProfe[0].udId_File.url
        : listProfe[0].udId_File.s3url,
      "udidcerti"
    );
    await toDataURL(
      listProfe[0].addressProof[0]?.url
        ? listProfe[0].addressProof[0]?.url
        : listProfe[0].addressProof[0]?.s3url,
      "addressproof1"
    );
    await toDataURL(
      listProfe[0].idProofFile.url
        ? listProfe[0].idProofFile.url
        : listProfe[0].idProofFile.s3url,
      "identityproof"
    );
    await toDataURL(
      listProfe[0].domacileCert.url
        ? listProfe[0].domacileCert.url
        : listProfe[0].domacileCert.s3url,
      "domacileCertifi"
    );

    // setTimeout(function () {
    console.log(
      "img",
      listProfe[0].disabilityCert.url
        ? listProfe[0].disabilityCert.url
        : listProfe[0].disabilityCert.s3url
    );

    const options = {
      margin: 10,
      filename: "seller-pdf.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // if (cyndd) {
    setTimeout(function () {
      const html = `
    
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Include Bootstrap styles -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>HTML to PDF</title>
      </head>
      <body>
       <div style=border:"1px solid grey" class="seller-special mb-3 mt-2" ref={pdfRef} id="code-are-send">
            <div class="container" ref={pdfContainerRef}>
              <div class="row">
                <div
                  class="col-lg-12 conatct-seller ${
                    colorMode === "white" ? "form-boder" : ""
                  }"
                  style={{ fontSize: ${fontSize}px }}
                >
                  <div
                    class="border border-primary ${
                      colorMode === "white" ? "border-primaryy-2" : ""
                    }"
                  >
                    <div class="form-logo">
                      <img src={log} alt="" />
                    </div>
                    <div style='text-align:"center"' class="col-md-12 text-center mt-2">
                      <p class="fs-6 fw-bold">
                        महाराष्ट्र राज्य दिव्यांग वित्त व विकास महामंडळ मर्या.
                        मुंबई
                      </p>
                      <p class="fs-6 fw-bold">
                        (ISO 9001 : 2008 Certified Organisation)
                      </p>
                      <span class="fs-6 fw-bold">
                        Person with Disabilities Welfare Department, Government of
                        Maharashtra
                      </span>
                      <br />
                      <span>दिव्यांग कल्याण विभाग, महाराष्ट्र शासन </span>
                    </div>
                    <div class="form-logo-2">
                      <img src={log2} alt="" />
                    </div>
                  </div>

                  <div class="border border-primary">
                    <div class="col-md-12 text-center mt-2">
                      <span class="fs-6 ">
                        Application form for Environmentally Friendly
                        e-Vehicles/E-cart for Divyangjan to become self-reliant
                      </span>
                      <br />
                      <span>
                        दिव्यांग व्यक्तींना स्वावलंबी होण्याच्या दृष्टीने हरित
                        उर्जेवर चालणाऱ्या पर्यावरण स्नेही फिरत्या वाहनावरील दुकान
                        योजने अंतर्गत अर्ज करण्यासाठीचा अर्ज
                      </span>
                    </div>
                  </div>
                  <div
                    class="border border-primary"
                  >
                    <div class="col-md-12 mt-4 padding-class">
                      <h6>Personal Details/वैयक्तिक माहिती</h6>
                      <hr class="border border-1 border-primary m-0 p-0" />
                    </div>

                        <h3 class="text-center">
                          Your Registration No:
                          <span style={{ color: "red" }}>
                            ${listProfe[0]?.applicationNo}
                          </span>
                        </h3>

                        <h3 class="text-center">
                          Your Registration Date :
                          <span style={{ color: "red" }}>
                            ${
                              new Date(
                                listProfe[0]?.applicationDate
                              ).getDate() +
                              "/" +
                              (new Date(
                                listProfe[0]?.applicationDate
                              ).getMonth() +
                                1) +
                              "/" +
                              new Date(
                                listProfe[0]?.applicationDate
                              ).getFullYear()
                            }
                          </span>
                        </h3>

                    <form action="" onSubmit={handleValidation}>
                      <div class="row m-0 p-0">
                        <div class="col-md-8 mt-3 m-0 p-0 disc-3">
                          <ul
                            type="disc"
                            class="disc-2 "
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="">

                              <label htmlFor="" class="fw-bold mr-2 mb-2">
                                Name of Applicant/अर्जदाराचे नाव <sup>*</sup>
                              </label>
                              <br />
                              <input
                                type="text"
                                placeholder="First Name"
                                class="pl-2 mr-2 mb-2"
                                name="bene_firstname"
                                id="#txtNumeric"  
                                required
                                value=${listProfe[0]?.bene_firstname}
                                onChange={handleInputChange}
                              />

                              <input
                                type="text"
                                class="pl-2 mr-2"
                                placeholder="Middle name"
                                name="bene_middlename"
                                value=${listProfe[0]?.bene_middlename}
                                onChange={handleInputChange}
                              />

                              <input
                                type="text"
                                placeholder="Last Name"
                                class="pl-2"
                                name="bene_lastname"
                                value=${listProfe[0]?.bene_lastname}
                                onChange={handleInputChange}
                              />

                            </li>

                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2 mb-2">
                                Mother’s Name/आईचे नाव <sup>*</sup>
                              </label>
                              <div>
                                <input
                                  type="text"
                                  placeholder="First Name"
                                  class="pl-2 mb-2"
                                  name="mother_firstname"
                                  value=${listProfe[0].mother_firstname}
                                  onChange={handleInputChange}
                                />

                                <input
                                  type="text"
                                  class="pl-2 me-2"
                                  placeholder="Middle name"
                                  name="mother_middlename"
                                  value=${listProfe[0].mother_middlename}
                                  onChange={handleInputChange}
                                />

                                <input
                                  type="text"
                                  placeholder="Last Name"
                                  class="pl-2 "
                                  name="mother_lastname"
                                  value=${listProfe[0].mother_lastname}
                                  onChange={handleInputChange}
                                />

                              </div>
                            </li>

                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2 mb-2">
                                Date of Birth/जन्मतारीख <sup>*</sup>
                              </label>
                              <div>
                                <input
                                value=${
                                  new Date(listProfe[0]?.dob).getDate() +
                                  "/" +
                                  (new Date(listProfe[0]?.dob).getMonth() + 1) +
                                  "/" +
                                  new Date(listProfe[0]?.dob).getFullYear()
                                }
                                  type="text"
                                  class="pl-2"
                                  id="bday"
                                  name="bday"

                                />

                                <p id="resultBday"></p>

                              </div>

                            </li>

                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2 mb-2">
                                Mobile No./भ्रमणध्वनी क्र. +९१<sup>*</sup>
                              </label>
                              <div>
                                <input

                                  type="number"
                                  placeholder="Only 10 Digit Number"
                                  class="pl-2"
                                  name="mobileset"
                                  value=${listProfe[0]?.mobile}
                                  onChange={changeHandle}
                                />

                                <input
                                  type="number"
                                  placeholder="+91"
                                  class="pl-2 d-none"
                                  name="phoneVerified"
                                  value={phoneVerified}
                                  onChange={changeHandle}
                                />

                              </div>
                            </li>
                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2 mb-2">
                                Email./ईमेल<sup>*</sup>
                              </label>
                              <div class="mb-3">
                                <input
                                  type="email"
                                  placeholder="example@gmail.com"
                                  class="pl-2"
                                  name="email"
                                  value=${listProfe[0].email}
                                  onChange={changeHandle}
                                />

                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4 mt-4 text-center imag-sec">
                          <img
                            src=${imgPhoto1}
                            style= "width: 200px ;height: 160px"
                            alt="Photograph"
                            class="border border-primary"
                          />
                         
                        

                          <input
                            type="file"
                            class="mt-1 mt-1-1"
                            name="userPhoto"
                            id="fileInput"
                            onChange={handleImage}
                          />
                          <label for="img">
                            Photograph <sup>*</sup>
                          </label>
                          <div class="space-between">
                           <!-- <p class="info-message">
                              (Only jpeg, jpg ,png and gif image with size 15 KB
                              to 100 KB allowed and Photo image Width and Height
                              less than 800px allowed)-->
                            </p>

                          </div>

                          <div
                            class="box box-box"
                            style="border 1px solid gray; width:200px;max-height:100px"
                          >
                            <img
                             
                              src=${imgSign1}
                              style=" max-width:90%; max-height:100%;margin:auto"
                              class="border border-primary"
                            />
                              
                          </div>
                          <input
                            type="file"
                            class="mt-1 mt-1-1  "
                            name="signPhoto"
                            id="fileInput1"
                            onChange={handleImage}
                          />
                          <label for="img">
                            Uploaded Signature<sup>*</sup>
                          </label>
                          <div class="space-between">
                            <!--<p class="info-message">
                              (Only jpeg, jpg ,png and gif image with size 3 KB to
                              30 KB allowed)
                            </p>-->
                            <p class="info-message">
                              (Only width:190px,height:50px)
                            </p>

                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-8">
                          <ul
                            type="disc "
                            style={{dispaly:"flex" listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="mt-2">

                              <label htmlFor="" class="fw-bold mr-2 mt-2">
                                Gender/लिंग<sup>*</sup>
                              </label>
                              <div class="Gender" style="display:flex; justify-content:space-around">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="flexRadioDefault1"

                                    ${
                                      listProfe[0].gender == "Male"
                                        ? "checked"
                                        : ""
                                    }
                                   />

                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                  >
                                    Male/पु
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="flexRadioDefault2"
                                    ${
                                      listProfe[0].gender == "Female"
                                        ? "checked"
                                        : ""
                                    }
                                   />

                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault2"
                                  >
                                    Female/स्त्री
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="flexRadioDefault3"
                                    ${
                                      listProfe[0].gender == "Trans"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                    
                                   
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault3"
                                  >
                                    Transgender/ट्रान्सजेडर
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="flexRadioDefault4"
                                    ${
                                      listProfe[0].gender == "Other"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault4"
                                  >
                                    Other/इतर
                                  </label>
                                </div>
                              </div>

                            </li>
                            <li class="mt-5 mb-1" >
                              <label htmlFor="" class="fw-bold mr-2">
                                Blood Group/रक्त गट<sup>*</sup>
                              </label>
                              <div class="Blood-Group" style="display:flex; justify-content:space-around">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="bloodGroup"
                                    id="flexRadioDefault5"
                                    ${
                                      listProfe[0].bloodGroup == "O+"
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault5"
                                  >
                                    O+
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="bloodGroup"
                                    
                                    id="flexRadioDefault6"
                                    ${
                                      listProfe[0].bloodGroup == "O-"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault6"
                                  >
                                    O-
                                  </label>
                                </div>

                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="bloodGroup"
                                    
                                    id="flexRadioDefault8"
                                    ${
                                      listProfe[0].bloodGroup == "A+"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault8"
                                  >
                                    A+
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="bloodGroup"
                                    
                                    id="flexRadioDefault9"
                                    ${
                                      listProfe[0].bloodGroup == "A-"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault9"
                                  >
                                    A-
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="bloodGroup"
                                    
                                    id="flexRadioDefault10"
                                    ${
                                      listProfe[0].bloodGroup == "B+"
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault10"
                                  >
                                    B+
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="bloodGroup"
                                    ${
                                      listProfe[0].bloodGroup == "B-"
                                        ? "checked"
                                        : ""
                                    }
                                    id="flexRadioDefault11"
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault11"
                                  >
                                    B-
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="bloodGroup"
                                   
                                    id="flexRadioDefault12"
                                    ${
                                      listProfe[0].bloodGroup == "AB+"
                                        ? "checked"
                                        : ""
                                    }/>
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault12"
                                  >
                                    AB+
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="bloodGroup"
                                    
                                    id="flexRadioDefault13"
                                    ${
                                      listProfe[0].bloodGroup == "AB-"
                                        ? "checked"
                                        : ""
                                    }/>
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault13"
                                  >
                                    AB-
                                  </label>
                                </div>

                                  </p>

                              </div>
                            </li>

                            <li class="pt-2">
                              <label htmlFor="" class="fw-bold mr-2">
                                Category/जात/प्रवर्ग <sup>*</sup>
                              </label>
                              <div class="Category-1" style="display:flex; flex-wrap:wrap; justify-content:space-around">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                    ${
                                      listProfe[0].castCategory == "General"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault14"
                                  >
                                    General
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                   
                                    id="flexRadioDefault16"
                                    
                                    ${
                                      listProfe[0].castCategory == "OBC"
                                        ? "checked"
                                        : ""
                                    } 
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault16"
                                  >
                                    OBC
                                  </label>
                                </div>

                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                    
                                    id="flexRadioDefault17"
                                   
                                    ${
                                      listProfe[0].castCategory == "SC"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault17"
                                  >
                                    SC
                                  </label>
                                </div>

                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                   
                                    id="flexRadioDefault18" 
                                    ${
                                      listProfe[0].castCategory == "ST"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault18"
                                  >
                                    ST
                                  </label>
                                </div>

                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                   
                                    id="flexRadioDefault19"
                                    
                                    ${
                                      listProfe[0].castCategory == "VJNT"
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault19"
                                  >
                                    VJNT
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                   
                                    
                                    ${
                                      listProfe[0].castCategory == "NT-B"
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault20"
                                  >
                                    NT-B
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                   
                                    id="flexRadioDefault21"
                                    
                                    ${
                                      listProfe[0].castCategory == "NT-C"
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault21"
                                  >
                                    NT-C
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                   
                                    id="flexRadioDefault22"
                                    
                                    ${
                                      listProfe[0].castCategory == "NT-D"
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault22"
                                  >
                                    NT-D
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="castCategory"
                                   
                                    id="flexRadioDefault22"
                                    
                                    ${
                                      listProfe[0].castCategory == "SBC"
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault22"
                                  >
                                    SBC
                                  </label>
                                </div>

                              </div>
                              <span class="mt-4">
                                <!--(Attached Caste Certificate and Non-Creamy Layer-->
                                <!--Certificate for OBC/SC/ST/VJNT/NT-B/NT-C/NT-D/SBC)-->
                              </span>
                            </li>

                            <li class="mt-3">
                              <label htmlFor="" class="fw-bold mr-2">
                                Caste Certificate / जातीचा दाखला<sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="file"
                                  class="pl-2"
                                  disabled=${
                                    listProfe[0].castCategory == "General"
                                  }
                                  name="castCertificate"
                                  id="castCertificate"
                                  onChange={handleImage}
                                />

                              </div>
                              <div class="card" style="border 1px solid gray; width:300px;height:300px;display:flex;justify-content:center object-fit:cover">
                              <img src=${castCertificate}
                              alt="caste" style="max-width:100%; max-height:100% ; margin:auto;" />
                              </div>
                              <p
                                class="error-message"
                                style={{ color: "red" }}
                              >
                              </p>
                            </li>

                            <li class="mt-3">
                              <label htmlFor="" class="fw-bold mr-2">
                                Business Category/व्यवसाय श्रेणी <sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <p class="" style="border:1px solid grey; padding:.3em .7em; margin:.1em">
                                ${listProfe[0]?.businessCategory?.name}
                                </p>
                              </div>
                            </li>

                              <div class="showInput">
                                <input
                                  type="text"
                                  name="otherBusiness"
                                  id=""
                                  placeholder="Please Enter Business Category"
                                  value=${listProfe[0].otherBusiness}
                                />
                              </div>

                              <div
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  marginTop: "10px",
                              >
                                <img
                                  src={filterImage?.icon?.url}
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  alt=""
                                />
                              </div>


                            <li class="mt-3">
                              <label htmlFor="" class="fw-bold mr-2">
                                Marital Status/वैवाहिक स्थिती<sup>*</sup>
                              </label>
                              <div class="Marital-Status" style="display:flex; justify-content:space-around">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="maritalStatus"
                                    ${
                                      listProfe[0].maritalStatus == "Married"
                                        ? "checked"
                                        : ""
                                    }/>
                                    <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault24"
                                  >
                                    Married
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="maritalStatus"
                                    ${
                                      listProfe[0].maritalStatus == "Unmarried"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                    <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault23"
                                  >
                                    Unmarried
                                  </label>
                                </div>

                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="maritalStatus"
                                    ${
                                      listProfe[0].maritalStatus == "Widow"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                    <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault25"
                                  >
                                    Widow
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="maritalStatus"
                                    ${
                                      listProfe[0].maritalStatus == "Divorced"
                                        ? "checked"
                                        : ""
                                    }/>
                                    <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault26"
                                  >
                                    Divorced
                                  </label>
                                </div>
                              </div>

                            </li>

                            <li class="mt-3">
                              <label htmlFor="" class="fw-bold mr-2">
                                If you are married, then please provide name of
                                the Spouse/विवाहित असल्यास पतिचे/पत्नीचे संपूर्ण
                                नाव
                                <sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="text"
                                  class="pl-2"
                                  disabled={
                                    listProfe[0].maritalStatus == "Unmarried" ||
                                    listProfe[0].maritalStatus == "Widow" ||
                                    listProfe[0].maritalStatus == "Divorced"
                                  }
                                  name="spouse_name"
                                  value=${listProfe[0].spouse_name}
                                
                                />

                              </div>
                            </li>

                          </ul>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2">
                                Name of Guardian of the Applicant/Assistant/ Care
                                Taker अर्जदाराच्या पालकाचे/सहाय्यकाचे नाव
                                <sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="text"
                                  class="pl-2"
                                  name="guardian_name"
                                  value=${listProfe[0].guardian_name}
                                  onChange={changeHandle}
                                />
                              </div>

                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <ul style={{ listStyle: "unset" }}>
                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2">
                                His/her Contact No<sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="number"
                                  class="pl-2"
                                  name="guardian_contact"
                                  value=${listProfe[0].guardian_contact}
                                  onChange={changeHandle}
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="row mt-3" style="margin-top:80px">
                        <div class="col-md-12">
                          <ul style={{ listStyle: "unset" }}>

                            <li class="mt-3" style={{ listStyle: "none" }}>

                              <label htmlFor="" class="fw-bold mr-2">
                                Relationship of guardian with the
                                applicant/अर्जदाराचे पालकांसोबतचे नाते<sup>*</sup>
                              </label>
                              <div class="Relationship" style="display:flex; justify-content:space-around">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault27"
                                    ${
                                      listProfe[0].relatedToGuardian == "Father"
                                        ? "checked"
                                        : ""
                                    }
                                    name="relatedToGuardian"
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault27"
                                  >
                                    Father
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault28"
                                    name="relatedToGuardian"
                                    ${
                                      listProfe[0].relatedToGuardian == "Mother"
                                        ? "checked"
                                        : ""
                                    }
                                    
                                 />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault28"
                                  >
                                    Mother
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault29"
                                    name="relatedToGuardian"
                                    value="Wife"
                                    ${
                                      listProfe[0].relatedToGuardian == "Wife"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault29"
                                  >
                                    Wife
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault30"
                                    name="relatedToGuardian"
                                    ${
                                      listProfe[0].relatedToGuardian ==
                                      "Husband"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault30"
                                  >
                                    Husband
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault31"
                                    name="relatedToGuardian"
                                    value="Other"
                                    ${
                                      listProfe[0].relatedToGuardian == "Other"
                                        ? "checked"
                                        : ""
                                    } 
                                    }
                                   />
                                    
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault31"
                                  >
                                    Other
                                  </label>
                                </div>
                              </div>

                            </li>

                            <li class="mt-5" style={{ listStyle: "none" }}>
                              <label htmlFor="" class="fw-bold mr-2">
                                Educational Details/शैक्षणिक अर्हता<sup>*</sup>
                              </label>
                              <div class="Educational">
                              ${
                                listProfe[0].educationDetails.primary
                                  ? '<input type="checkbox" class="seller-checkbox" id="Primary" name="primary" checked  />'
                                  : '<input type="checkbox" class="seller-checkbox">'
                              } 
                                <label htmlFor="Primary" class="ml-1 mr-2  ">
                                  Primary
                                </label>
                                ${
                                  listProfe[0].educationDetails.secondary
                                    ? '<input type="checkbox" class="seller-checkbox" id="Secondary" name="secondary" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                } 
                                <label
                                  htmlFor="Secondary"
                                  class="mr-2 ml-1 seller-label"
                                >
                                  Secondary
                                </label>
                                ${
                                  listProfe[0].educationDetails.higherSecondary
                                    ? '<input type="checkbox" class="seller-checkbox" id="HigherSecondary" name="higherSecondary" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                } 
                                <label
                                  htmlFor="Higher Secondary"
                                  class="mr-2 ml-1 seller-label"
                                >
                                  Higher Secondary
                                </label>
                                ${
                                  listProfe[0].educationDetails.diploma
                                    ? '<input type="checkbox" class="seller-checkbox" id="Diploma" name="diploma" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                } 
                                <label
                                  htmlFor="Diploma"
                                  class="mr-2 ml-1 seller-label"
                                >
                                  Diploma
                                </label>
                                ${
                                  listProfe[0].educationDetails.graduate
                                    ? '<input type="checkbox" class="seller-checkbox" id="Graduate" name="graduate" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                } 
                                <label
                                  htmlFor="Graduate"
                                  class="mr-2 ml-1 seller-label"
                                >
                                  Graduate
                                </label>
                              </div>
                              <div class="d-flex mt-3">
                              ${
                                listProfe[0].educationDetails.postGraduate
                                  ? '<input type="checkbox" class="seller-checkbox" id="PostGraduate" name="postGraduate" checked  />'
                                  : '<input type="checkbox" class="seller-checkbox">'
                              } 
                                <label
                                  htmlFor="Postgraduate"
                                  class="mr-2 ml-1 seller-label"
                                >
                                  Postgraduate
                                </label>
                                ${
                                  listProfe[0].educationDetails.uneducated
                                    ? '<input type="checkbox" class="seller-checkbox" id="Uneducated" name="uneducated" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                } 
                                <label
                                  htmlFor="Uneducated"
                                  class="mr-2 ml-1 seller-label"
                                >
                                  Uneducated
                                </label>
                              </div>

                                <p style={{ color: "red" }}>
                                  Educational Details is Required!
                                </p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="col-md-12 mt-4 padding-class">
                        <h6 style={{ fontWeight: "800" }}>
                          Address Details/ निवासाचे तपशिल
                        </h6>
                        <hr class="border border-1 border-primary m-0 p-0" />
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="mt-5, mb-2">
                              <label htmlFor="" class="fw-bold mr-2">
                                Are you being resident of Maharashtra State?/आपण
                                महाराष्ट्र राज्याचे रहिवासी आहात का? <sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault32"
                                    name="residentOf"
                                    ${
                                      listProfe[0].residentOf == "Yes"
                                        ? "checked"
                                        : ""
                                    }/>
                                    <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault32"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault33"
                                    name="residentOf"
                                    ${
                                      listProfe[0].residentOf == "No"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                    <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault33"
                                  >
                                    No
                                  </label>
                                </div>
                                <span class="ml-3">
                                  (If Yes Please Upload Domicile Certificate)
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="mt-5">
                              <label htmlFor="" class="fw-bold mr-2">
                                Domacile Certificate/अधिवास प्रमाणपत्र<sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="file"
                                  id="domacileCert"
                                  class="pl-2"
                                  name="domacileCert"
                                  onChange={handleImage}
                                />
                                <p
                                  class="error-message"
                                  style={{ color: "red" }}
                                >
                                </p>
                              </div>
                              <div class="card" style="border 1px solid gray; width:300px;height:300px;display:flex;justify-content:center">
                              <img src=${domacileCertificate}
                              alt="passbook" style="max-width:100%; max-height:100% ; margin:auto" />
                              </div>
                            </li>

                            <li class="mt-5">
                              <label htmlFor="" class="fw-bold">
                                Correspondence Address / सध्याचा पत्ता<sup>*</sup>
                              </label>
                              <div class="Correspondence">
                                <p  style="width:90%; padding:.3em .7em; margin:.1em ; border:.1em solid black ">
                                ${listProfe[0].permanentAddress}
                                </p>
                              </div>
                            </li>
                          </ul>

                          <div class="Village-sec ml-3 Village-sec-2" style="margin-top:90px;">
                            <div class="row">
                            <ul  style={{ listStyle: "unset", listStyleType: "none" }} >
                              <div class="col-md-4">
                                <li
                                  class="mt-5"
                                  style={{listStyle: "unset", listStyleType: "none" }}
                                >
                                  <label htmlFor="" class="fw-bold mr-1">
                                    Post / पोस्ट<sup>*</sup>
                                  </label>
                                  <div class="d-flex">
                                    <input
                                      type="text"
                                      class="pl-1"
                                      name="post"
                                      value=${listProfe[0].post}
                                      onChange={changeHandle}
                                    />
                                  </div>
                                </li>
                              </div>

                              <div class="col-md-4">
                                <li
                                  class="mt-3"
                                  style={{listStyle: "unset", listStyleType: "none"}}
                                >
                                  <label htmlFor="" class="fw-bold mr-1">
                                    State / राज्य<sup>*</sup>
                                  </label>
                                  <div class="d-flex">
                                    <input
                                      type="text"
                                      class="pl-1"
                                      name="state"
                                      value=${listProfe[0].state}
                                      onChange={changeHandle}
                                    />
                                  </div>
                                </li>
                              </div>

                              <div class="col-md-4">
                                <li
                                class="mt-3"
                                  style={{ listStyle: "unset", listStyleType: "none" }}
                                >
                                  <label htmlFor="" class="fw-bold mr-1">
                                    Division/विभाग<sup>*</sup>
                                  </label>
                                  <input
                                    class="pl-1"
                                    type="text"
                                    value=${listProfe[0].division[0]?.title}
                                    onChange={divisonChange}
                                  />
                                </li>
                              </div>

                              <div class="col-lg-4">
                                <li
                                  class="mt-3"
                                  style={{listStyle: "unset", listStyleType: "none" }}
                                >
                                  <label htmlFor="" class="fw-bold mr-1">
                                    District/जिल्हा<sup>*</sup>
                                  </label>
                                  <input
                                  class="pl-1"
                                  type="text"
                                    value=${listProfe[0].district[0]?.title}
                                    name="district"
                                    onChange={changeHandle}
                                  />
                                    
                                  </input>
                                </li>
                              </div>

                              <div class="col-md-4">
                                <li
                                  class="mt-3"
                                  style={{ listStyle: "unset", listStyleType: "none" }}
                                >
                                  <label htmlFor="" class="fw-bold mr-1">
                                    Block/तालुका<sup>*</sup>
                                  </label>
                                  <div class="d-flex">
                                    <input
                                      type="text"
                                      class="pl-2"
                                      name="block"
                                      value=${listProfe[0].block}
                                      onChange={changeHandle}
                                    />
                                  </div>
                                </li>
                              </div>

                              <div class="col-md-4">
                                <li
                                  class="mt-3"
                                  style={{ listStyle: "unset", listStyleType: "none" }}
                                >
                                  <label htmlFor="" class="fw-bold mr-1">
                                    Village/गांव<sup>*</sup>
                                  </label>
                                  <div class="Village">
                                    <input
                                      type="text"
                                      class="pl-2"
                                      name="village"
                                      value=${listProfe[0].village}
                                      onChange={changeHandle}
                                    />
                                  </div>

                                </li>
                              </div>

                              <div class="col-md-4">
                                <li
                                  class="mt-3"
                                  style={{ listStyle: "unset", listStyleType: "none" }}
                                >
                                  <label htmlFor="" class="fw-bold mr-1">
                                    Pincode / पिनकोड<sup>*</sup>
                                  </label>
                                  <div class="d-flex">
                                    <input
                                      type="number"
                                      class="pl-2"
                                      name="pincode"
                                      value=${listProfe[0].pincode}
                                    />
                                  </div>
                                </li>
                              </div>
                              
                           
                         

                              <ul style={{ listStyle: "unset" }}>
                                <li
                                  class="mt-5"
                                  style={{ listStyle: "unset", listStyleType: "none" }}
                                >

                                  <label htmlFor="" class="fw-bold mr-2">
                                    Permanent Address / कायमचा पत्ता<sup>*</sup>
                                  </label>
                                  <div class="Permanent">
                                    <p style="width:90%; padding:.3em .7em; margin:.1em ; border:.1em solid black ">
                                    ${listProfe[0].permanentAddress}</p>
                                    
                                  </div>

                                </li>
                              </ul>

                            </div>
                            </ul>
                          </div>
                        </div>
                      </div>


                      <div class="row">
                        <div class="col-md-12">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li style="margin-top:100px;">
                              <label htmlFor="" class="fw-bold mr-2">
                                Documents of Address Proof/ निवासी असल्याचा पुरावा
                                <sup>*</sup>
                              </label>
                              <div class="Muscular-1 Muscular-2 d-flex">
                              ${
                                listProfe[0].docOfAddProof.drivingLicense
                                  ? '<input type="checkbox" class="seller-checkbox" id="DrivingLicense" name="drivingLicense" checked  />'
                                  : '<input type="checkbox" class="seller-checkbox">'
                              } 
                                <label
                                  htmlFor="Driving License"
                                  class="ml-1 mr-2 seller-label"
                                >
                                  Driving License
                                </label>
                                ${
                                  listProfe[0].docOfAddProof.rationCard
                                    ? '<input type="checkbox" class="seller-checkbox" id="rationCard" name="rationCard" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                } 
                                <label
                                  htmlFor="Ration Card"
                                  class="ml-1 mr-2 seller-label"
                                >
                                  Ration Card
                                </label>
                                ${
                                  listProfe[0].docOfAddProof.voterId
                                    ? '<input type="checkbox" class="seller-checkbox" id="VoterId" name="voterId" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                } 
                                <label htmlFor="Voter Id" class="ml-1 mr-2">
                                  Voter Id
                                </label>
                                ${
                                  listProfe[0].docOfAddProof.passport
                                    ? '<input type="checkbox" class="seller-checkbox" id="Passport" name="passport" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                <label
                                  htmlFor="Passport"
                                  class="ml-1 mr-2 seller-label"
                                >
                                  Passport
                                </label>
                              </div>
                              <div class="d-flex mt-3 Muscular-2">
                              ${
                                listProfe[0].docOfAddProof.electricityBill
                                  ? '<input type="checkbox" class="seller-checkbox" id="VoterId" name="voterId" checked  />'
                                  : '<input type="checkbox" class="seller-checkbox">'
                              }
                                <label
                                  htmlFor="Electricity Bill"
                                  class="ml-1 mr-2  seller-label"
                                >
                                  Electricity Bill
                                </label>
                                ${
                                  listProfe[0].docOfAddProof.propertyTaxReceipt
                                    ? '<input type="checkbox" class="seller-checkbox" id="PropertyTaxReceipt" name="propertyTaxReceipt" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                <label
                                  htmlFor="Property Tax Receipt"
                                  class="ml-1 mr-2 seller-label"
                                >
                                  Property Tax Receipt
                                </label>
                              </div>
                            </li>



                            <li class="" style="margin-top:130px;">
                              <label htmlFor="" class="fw-bold mr-2">
                                Address proof / पत्त्याचा पुरावा<sup>*</sup>

                                ${
                                  listProfe[0]?.addressProof?.url ? (
                                    <button
                                      class="mt-2"
                                      onClick={() =>
                                        imgShoing(
                                          listProfe[0]?.addressProof?.url
                                        )
                                      }
                                    >
                                      Show
                                    </button>
                                  ) : (
                                    ""
                                  )
                                }

                                <p
                                  class="error-message"
                                  style={{ color: "red" }}
                                >

                                </p>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="file"
                                  id="addressProo"
                                  class="pl-2"
                                  name="addressProof"
                                  onChange={handleImage}
                                />
                               
                              </div>

                              <div class="card" style="border 1px solid gray; width:300px;height:300px;display:flex;justify-content:center">
                              <img src=${addressProof}
                              alt="passbook" style="max-width:100%; max-height:100% ; margin:auto" />
                              </div>
                            </li>

                          </ul>
                        </div>
                      </div>

                      <div class="col-md-12 mt-4 padding-class">
                        <h6>Disability Details / दिव्यांगाची माहिती</h6>
                        <hr class="border border-1 border-primary m-0 p-0" />
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2">
                                Do You have Disability Certificate /आपल्याकडे
                                दिव्यांगत्व प्रमाणपत्र आहे का<sup>*</sup>
                              </label>

                              <div class="d-flex">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flex"
                                    name="disabilityCert"
                                   
                                   
                                    ${
                                      listProfe[0].disabilityCert === true
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flex1"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flex2"
                                    name="disabilityCert"
                                    ${
                                      listProfe[0].disabilityCert === false
                                        ? "checked"
                                        : ""
                                    }
                                    
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flex2"
                                  >
                                    No
                                  </label>
                                </div>
                                <span class="ml-3">

                                  (If Yes, Please fill in the following Details &
                                  attach disability certificate)
                                </span>

                              </div>
                            </li>
                            <li class="mt-3" >

                              <label htmlFor="" class="fw-bold mr-2">
                                Disability Certificate/दिव्यांगत्वाचे प्रमाणपत्र
                                <sup>*</sup>


                                <p
                                  class="error-message"
                                  style={{ color: "red" }}
                                >

                                </p>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="file"
                                  id="fileInput2"
                                  class="pl-2"
                                  name="disabilityCertImage"

                                />
                               
                              </div>
                                      
                              <div class="card" style="border 1px solid gray; width:300px;height:200px;display:flex;justify-content:center">
                              <img src=${disabilityCert}
                              alt="passbook" style="max-width:100%; max-height:100% ; margin:auto" />
                              
                              </div>

                               
                            </li>
                          </ul>
                        </div>

                        <div class="col-md-12">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2">
                                Do You have UDID Number<sup>*</sup>
                              </label>

                              <div class="d-flex">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flex8 udidType"
                                    name="udidType"
                                   

                                    ${
                                      listProfe[0].udidType == "Permanent UDID"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flex8"
                                  >
                                    Permanent UDID /कायमस्वरूपी UDID
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flex6"
                                    name="udidType"
                                    
                                    ${
                                      listProfe[0].udidType == "Temporary UDID"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flex6"
                                  >
                                    Temporary UDID /तात्पुरता UDID
                                  </label>
                                </div>

                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="row pt-2" style="margin-top:90px;">
                        <div class="col-md-6">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="">
                              <label htmlFor="" class="fw-bold mr-2">
                                UDID Certificate No/UDID प्रमाणपत्र क्र
                                <sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="text"
                                  class="pl-2"
                                  name="udId_No"
                                  value=${listProfe[0].udId_No}
                                  onChange={changeHandle}
                                />
                              </div>

                            </li>

                            <li class="" style="margin-top:40px;">

                              <label htmlFor="" class="fw-bold mr-2">
                                UDID Certificate/UDID प्रमाणपत्र <sup>*</sup>

                                

                                <p
                                  class="error-message"
                                  style={{ color: "red" }}
                                >
                                  
                                </p>
                              </label>
                              <div class="d-flex">
                                
                                
                              </div>

                              <div class="card" style="border 1px solid gray; width:300px;height:300px;display:flex;justify-content:center">
                              <img src=${udidCerti}
                              alt="passbook" style="max-width:100%; max-height:100% ; margin:auto" />
                              
                              </div>

                            </li>
                          </ul>
                        </div>

                        <div class="col-md-6">

                        </div>
                        <div class="col-md-6">

                        </div>
                      </div>


                      <div class="row">
                        <div class="col-md-12">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="" style="margin-top:60px;">

                              <label htmlFor="" class="fw-bold mr-2">
                                Percentage of disability (40% or more than
                                40%)/दिव्यांगत्व प्रमाण (किमान ४०% अथवा त्यापेक्षा
                                अधिक) <sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="number"
                                  class="pl-2"
                                  name="PerOfDis"
                                  min="40"
                                  max="100"
                                  value=${listProfe[0].PerOfDis}
                                  onChange={changeHandle}
                                />
                              </div>

                            </li>

                                  </li>
                            <li class="" style="margin-top:70px;">
                              <label htmlFor="" class="fw-bold mr-2">
                                Types Of Disability/दिव्यांगत्वाचा प्रकार
                                <sup>*</sup>
                              </label>

                                <p style={{ color: "red" }}>
                                  Types Of Disability is Required!
                                </p>

                              <div class="Disability">
                              <li>
                              <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.locoMotor
                                    ? '<input type="checkbox" class="seller-checkbox" id="locomotorsDisability" name="locomotorsDisability" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Locomotors Disability"
                                  >
                                    Locomotors Disability/अस्थिव्यंग
                                  </label>
                                </div>
                              </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.leprosy
                                    ? '<input type="checkbox" class="seller-checkbox" id="Leprosy" name="leprosy" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Leprosy Cured persons"
                                  >
                                    Leprosy Cured persons/कुष्ठरोग निवारीत मुक्त
                                  </label>
                                </div>
                                
                                </li>
                               
                                
                               <li>
                               <div class="form-check mr-2">
                               ${
                                 listProfe[0].typesOfDisability.cerebralPal
                                   ? '<input type="checkbox" class="seller-checkbox" id="Cerebral" name="cerebral" checked  />'
                                   : '<input type="checkbox" class="seller-checkbox">'
                               }
                                 <label
                                   class="form-check-label"
                                   htmlFor="Cerebral Palsy"
                                 >
                                   Cerebral Palsy/मेंदूचा पक्षाघात
                                 </label>
                               </div>
                               </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.dwarfism
                                    ? '<input type="checkbox" class="seller-checkbox" id="Dwarfism" name="dwarfism" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Dwarfism"
                                  >
                                    Dwarfism /शारीरिक वाढ खुंटणे
                                  </label>
                                </div>
                                </li>

                                <li>
                                <!--<div class="Muscular-1 d-flex mt-3">-->
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.muscular_dy
                                    ? '<input type="checkbox" class="seller-checkbox" id="Muscular" name="muscular" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Muscular Dystrophy"
                                  >
                                    Muscular Dystrophy/स्नायुंची विकृती
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.acidAttactVic
                                    ? '<input type="checkbox" class="seller-checkbox" id="Acid" name="acid" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Acid Attack victim"
                                  >
                                    Acid Attack victim/आम्ल हल्ला पीडित
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.blindness
                                    ? '<input type="checkbox" class="seller-checkbox" id="Blindness" name="blindness" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Blindness"
                                  >
                                    Blindness/पुर्णतः अंध
                                  </label>
                                </div>
                                </li>

                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.lowVision
                                    ? '<input type="checkbox" class="seller-checkbox" id="LowVision" name="lowVision" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Low-vision"
                                  >
                                    Low-vision/अंशतः अंध (दृष्टिदोष)
                                  </label>
                                </div>
                                </li>

                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.hearingImp
                                    ? '<input type="checkbox" class="seller-checkbox" id="Hearing" name="hearing" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Hearing Impairment"
                                  >
                                    Hearing Impairment (Deaf and hard of
                                    Hearing)/कर्णबधीर / ऐकू कमी येणे
                                  </label>
                                </div>
                                </li>
                                <li >
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.speechNlang
                                    ? '<input type="checkbox" class="seller-checkbox" id="Speech" name="speech" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Speech"
                                  >
                                    Speech and Language disability/वाचा / भाषा दोष
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.intellect
                                    ? '<input type="checkbox" class="seller-checkbox" id="intellectual" name="intellectual" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Intellectual Disability"
                                  >
                                    Intellectual Disability/बौद्धिक अक्षम
                                  </label>
                                </div>
                                </li>
                                <li>
                              <div class="form-check mr-2">
                              ${
                                listProfe[0].typesOfDisability.specific_learn
                                  ? '<input type="checkbox" class="seller-checkbox" id="Specific" name="specific" checked  />'
                                  : '<input type="checkbox" class="seller-checkbox">'
                              }
                                <label
                                  class="form-check-label"
                                  htmlFor="Specific"
                                >
                                  Specific Learning Disabilities/विशिष्ट अध्ययन
                                  अक्षम
                                </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check mr-2">
                              ${
                                listProfe[0].typesOfDisability.autism
                                  ? '<input type="checkbox" class="seller-checkbox" id="Autism" name="Autism" checked  />'
                                  : '<input type="checkbox" class="seller-checkbox">'
                              }
                                <label
                                  class="form-check-label"
                                  htmlFor="Autism"
                                >
                                  Autism Spectrum Disorder/स्वमग्न
                                </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.mentalBehave
                                    ? '<input type="checkbox" class="seller-checkbox" id="Mental" name="Mental" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Mental"
                                  >
                                    Mental Behavior/Mental illness/मानसिक वर्तन /
                                    मानसिक आधार
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.multiScler
                                    ? '<input type="checkbox" class="seller-checkbox" id="Multiple" name="Multiple" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Multiple"
                                  >
                                    Multiple Sclerosis/हातापायातील स्नायू कमजोर /
                                    शिथिल होणे
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.parkinson
                                    ? '<input type="checkbox" class="seller-checkbox" id="Parkinson" name="Parkinson" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Parkinson"
                                  >
                                    Parkinson's disease/कंपावात
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.hemoPhilia
                                    ? '<input type="checkbox" class="seller-checkbox" id="hemophilia" name="hemophilia" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Hemophilia"
                                  >
                                    Hemophilia/अधिक रक्तस्त्राव
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2 mt-4">
                                ${
                                  listProfe[0].typesOfDisability.thalassemia
                                    ? '<input type="checkbox" class="seller-checkbox" id="thalassemia" name="thalassemia" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Thalassemia"
                                  >
                                    Thalassemia/रक्ताची कमतरता
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.sickieCell
                                    ? '<input type="checkbox" class="seller-checkbox" id="Sickle" name="Sickle" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Sickle"
                                  >
                                    Sickle Cell disease/रक्ताचे हिमोग्लोबीनचे
                                    प्रमाण कमी होणे
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.chronicNeu
                                    ? '<input type="checkbox" class="seller-checkbox" id="chronic" name="chronic" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="Chronic"
                                  >
                                    Chronic Neurological conditions/मज्जासंस्थेचे
                                    तीव्र आजार
                                  </label>
                                </div>
                                </li>
                                <li>
                                <div class="form-check mr-2">
                                ${
                                  listProfe[0].typesOfDisability.multipleDisab
                                    ? '<input type="checkbox" class="seller-checkbox" id="multipleDisabilities" name="multipleDisabilities" checked  />'
                                    : '<input type="checkbox" class="seller-checkbox">'
                                }
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault56"
                                  >
                                    Multiple Disabilities/बहुविकलांग
                                  </label>
                                </div>
                              </div>
                              </li>
                             <!-- </div>-->
                            
                               
                                
                               
                              </div>
                              <div class="">
                              
                             
                              
                               
                               
                                
                                
                                
                               
                                
                                
                               
                              </div>
                              <div class="">
                                
                               
                               
                              </div>
                              <div class="">
                                
                               
                                
                              </div>
                              <div class="">
                               
                               
                               
                              </div>
                              <div class="">
                               
                               
                         

                            <li class="mt-4 ml-4">

                              <label htmlFor="" class="fw-bold mr-2">
                                Do you have Disability by Birth/तुम्हाला जन्मतःच
                                दिव्यांगत्व आहे का<sup>*</sup>
                              </label>

                              <div class="have-Disability ml-2">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault57"
                                   
                                    ${
                                      listProfe[0].disabltyByBirth === true
                                        ? "checked"
                                        : ""
                                    }
                                    
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault57"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault58"
                                   
                                    name="disabilitiesBirth"
                                  
                                    ${
                                      listProfe[0].disabltyByBirth === false
                                        ? "checked"
                                        : ""
                                    }
                                   
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault58"
                                  >
                                    No
                                  </label>
                                </div>
                                <label htmlFor="" class="ml-5 seller-label">
                                  If No then Disability Since
                                </label>
                                <input
                                  type="text"
                                  class="ml-3"
                                  disabled={disabilitiesBirth === true}
                                  name="disabtlySince"
                                  value=${listProfe[0].disabtlySince}
                                  onChange={changeHandle}
                                />
                              </div>
                            </li>



                            <li class="mt-5 ml-4">

                              <label htmlFor="" class="fw-bold mr-2">
                                Area of Disability/दिव्यांगत्व क्षेत्र<sup>*</sup>
                              </label>

                              <div class="Area-of-Disability">
                                <p class="ml-2"  style="width:90%; height:80px  ">
                               
                                  
                                  ${listProfe[0].areaOfDisable}
                               
                                  </p>
                                </div>
                            </li>
                            
                          </ul>
                        </div>

                      <div class="col-md-12 mt-2 padding-class">
                        <h6 style={{ fontWeight: "700" }}>
                          Employment Details /रोजगाराची सद्यस्थिती
                        </h6>
                        <hr class="border border-1 border-primary m-0 p-0" />
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li class="mt-3">

                              <label htmlFor="" class="fw-bold mr-2">
                                Employment Status/रोजगाराची स्थिती<sup>*</sup>
                              </label>

                               

                              <div class="d-flex">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="Employed"
                                    name="status"
                                    ${
                                      listProfe[0].employmentDetail.status ==
                                      "Employed"
                                        ? "checked"
                                        : ""
                                    }
                                  
                                     />
                                  <label
                                    class="form-check-label"
                                    htmlFor="Employed"
                                  >
                                    Employed
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="Unemployed"
                                    name="status"
                                    
                                    ${
                                      listProfe[0].employmentDetail.status ==
                                      "Unemployed"
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    htmlFor="Unemployed"
                                  >
                                    Unemployed
                                  </label>
                                </div>
                              </div>
                            </li>


                            <li class="mt-3">
                              <label htmlFor="" class="fw-bold mr-2">
                                Are you employed by the Government, Semi
                                Government, or any Government body/Corporation?
                                /आपण शासकीय/निमशासकीय/मंडळे/महामंडळे यांचे
                                कर्मचारी आहात का?<sup>*</sup>
                              </label>

                                
                              <div class="d-flex">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="employeeByGov"
                                    name="employeeByGov"
                                   
                                    ${
                                      listProfe[0].employeeByGov == "Yes"
                                        ? "checked"
                                        : ""
                                    }
                                   />
                                  <label
                                    class="form-check-label"
                                    htmlFor="employeeByGov"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="employeeByGov"
                                    name="employeeByGov"
                                    
                                    ${
                                      listProfe[0].employeeByGov == "No"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="employeeByGov"
                                  >
                                    No
                                  </label>
                                </div>
                              </div>
                              <div class="Semi-Government-2 mt-2">
                                <textarea
                                  name="employeeGovInDepart"
                                  id=""
                                  cols="70"
                                  rows="2"
                                  disabled={empDetails.employeeByGov == "No"}
                                  value=${listProfe[0].employeeGovInDepart}
                                  onChange={changeHandle}
                                ></textarea>
                              </div>
                            </li>

                            <li class="mt-3">
                              <label htmlFor="" class="fw-bold mr-2">
                                BPL/APL/दारिद्र्यरेषेच्या वर / दारिद्र्यरेषेच्या
                                खालील<sup>*</sup>
                              </label>

                                <p style={{ color: "red" }}>
                                  BPL/APL is Required!
                                </p>

                              <div class="d-flex">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault62"
                                    name="bpl"
                                    
                                    ${
                                      listProfe[0].employmentDetail.bpl == "N/A"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault62"
                                  >
                                    N/A
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault63"
                                    name="bpl"
                                    
                                    ${
                                      listProfe[0].employmentDetail.bpl == "APL"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault63"
                                  >
                                    APL
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault64"
                                    name="bpl"
                                    ${
                                      listProfe[0].employmentDetail.bpl == "BPL"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault64"
                                  >
                                    BPL
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault65"
                                    name="bpl"
                                   
                                    ${
                                      listProfe[0].employmentDetail.bpl ==
                                      "Antoday"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault65"
                                  >
                                    Antyoday
                                  </label>
                                </div>
                              </div>
                            </li>


                            <li style="margin-top:150px;">
                              <label htmlFor="" class="fw-bold mr-2">
                                Annual Income of the Applicant/लाभार्थ्याचे
                                वार्षिक उत्पन्न<sup>*</sup>
                              </label>

                                <p style={{ color: "red" }}>
                                  Annual Income of the Applicant is Required!
                                </p>

                              <div class="d-flex">
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault66"
                                    name="annualIncom"
                                    
                                    ${
                                      listProfe[0].employmentDetail
                                        .annualIncom == "Below 10k"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault66"
                                  >
                                    Below 10k
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault67"
                                    name="annualIncom"
                                    ${
                                      listProfe[0].employmentDetail
                                        .annualIncom == "10k to 1 lakhs"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault67"
                                  >
                                    10k to 1 lakhs
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault68"
                                    name="annualIncom"
                                    ${
                                      listProfe[0].employmentDetail
                                        .annualIncom == "1 lakhs to 2.5 lakhs"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault68"
                                  >
                                    01 lakhs to 2.5 lakhs
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault69"
                                    name="annualIncom"
                                    ${
                                      listProfe[0].employmentDetail
                                        .annualIncom == "2.5 lakhs and more"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault69"
                                  >
                                    Above 2.5 lakhs
                                  </label>
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                      <div class="col-md-12 mt-5  padding-class">
                        <h6 style={{ fontWeight: "700" }}>
                          Identity Details (Min-1)/ओळखीचा पुरावा (किमान - १)
                        </h6>
                        <hr class="border border-1 border-primary m-0 p-0" />
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <ul
                            style={{ listStyle: "unset", listStyleType: "none" }}
                          >
                            <li style="margin-top:80px;">

                              <label htmlFor="" class="fw-bold mr-2 mt-2">
                                Identity Proof/ओळखपत्र क<sup>*</sup>
                              </label>

                              <div class="Identity-proof Identity-proof-2">
                                <input
                                  type="radio"
                                  class="seller-checkbox "
                                  id="Driving License1"
                                  name="idProof"
                                 
                                  ${
                                    listProfe[0].idProof == "Driving License"
                                      ? "checked"
                                      : ""
                                  }
                                 />
                                <label
                                  htmlFor="Driving License1"
                                  class="ml-1 seller-label"
                                >
                                  Driving License
                                </label>
                                <input
                                  type="radio"
                                  class="ml-3 seller-checkbox"
                                  id="PAN Card1"
                                  name="idProof"
                                  
                                  ${
                                    listProfe[0].idProof == "PAN Card"
                                      ? "checked"
                                      : ""
                                  }
                                 />
                                <label
                                  htmlFor="PAN Card1"
                                  class="ml-1 seller-label"
                                >
                                  PAN Card
                                </label>
                                <input
                                  type="radio"
                                  class="ml-3 seller-checkbox  "
                                  id="Ration Card1"
                                  name="idProof"
                                ${
                                  listProfe[0].idProof == "Ration Card"
                                    ? "checked"
                                    : ""
                                }
                                  />
                                <label
                                  htmlFor="Ration Card1"
                                  class="ml-1 seller-label"
                                >
                                  Ration Card
                                </label>
                                <input
                                  type="radio"
                                  class="ml-3 seller-checkbox  "
                                  id="Voter ID1"
                                  name="idProof"
                                  ${
                                    listProfe[0].idProof == "Voter ID"
                                      ? "checked"
                                      : ""
                                  }
                                  />
                                <label
                                  htmlFor="Voter ID1"
                                  class="ml-1 seller-label"
                                >
                                  Voter ID
                                </label>
                                <input
                                  type="radio"
                                  class="ml-3 seller-checkbox  "
                                  id="Aadhar Card1"
                                  name="idProof"
                                 
                                  ${
                                    listProfe[0].idProof == "Aadhar Card"
                                      ? "checked"
                                      : ""
                                  }
                                 />
                                <label
                                  htmlFor="Aadhar Card1"
                                  class="ml-1 seller-label"
                                >
                                  Aadhar Card
                                </label>
                              </div>
                              <div class="d-flex mt-3">
                                <input
                                  type="radio"
                                  class="seller-checkbox "
                                  id="Passport1"
                                  name="idProof"
                                  ${
                                    listProfe[0].idProof == "Passport"
                                      ? "checked"
                                      : ""
                                  }
                                  />
                                <label
                                  htmlFor="Passport1"
                                  class="ml-1 seller-label"
                                >
                                  Passport
                                </label>
                                <input
                                  type="radio"
                                  class="ml-3 seller-checkbox  "
                                  id="MGNERGA Job Card1"
                                  name="idProof"
                                  
                                  ${
                                    listProfe[0].idProof == "MGNERGA Job Card"
                                      ? "checked"
                                      : ""
                                  }
                                  />
                                <label
                                  htmlFor="MGNERGA Job Card1"
                                  class="ml-1 seller-label"
                                >
                                  MGNERGA Job Card
                                </label>
                              </div>
                              <div class="d-flex mt-3">
                        
                              </div>

                              <div class="card" style="border 1px solid gray; width:300px;height:280px;display:flex;justify-content:center">
                              <img src=${identityProof}
                              alt="passbook" style="max-width:100%; max-height:100% ; margin:auto" />
                              
                              </div>

                            </li>

                            <li style="margin-top:70px;">

                              <label htmlFor="" class="fw-bold mr-2">
                                Identity Proof No./ओळखपत्र क्र<sup>*</sup>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="text"
                                  class="pl-2"
                                  value=${listProfe[0].idProofNo}
                                  name="idProofNo"
                                  onChange={changeHandle}
                                />
                              </div>
                            </li>

                            <li class="" style="margin-top:150px;"> 
                              <div class="d-flex">
                                <div class="col-md-6">
                                  <label htmlFor="" class="fw-bold mr-2">
                                    Aadhar Card No./आधार क्रमांक <sup>*</sup>
                                  </label>
                                  <div class="d-flex">
                                    <input
                                      type="number"
                                      class="pl-2"
                                      name="adhaarCard"
                                      value=${listProfe[0].adhaarCard}
                                      onChange={handleAadharChange}
                                    />
                                  </div>

                                    <div style={{ color: "red" }}>

                                    </div>
                                </div>
                              </div>
                            </li>

                            
                            <li class="" style="margin-top:50px;">
                              <label htmlFor="" class="fw-bold mr-2">
                                Bank Details of the Applicant/अर्जदाराचे बँक
                                तपशील*<sup>*</sup>
                              </label>
                              <div class=" col-md-12">
                                <label htmlFor="" class="fw-bold mr-2">
                                  Account Holder's Name /खातेधारकाचे नाव
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    class="pl-2"
                                    style={{ width: "300px" }}
                                    name="accHolderName"
                                    value=${listProfe[0].accHolderName}
                                    onChange={changeHandle}
                                  />
                                </div>

                              </div>
                              <div class="col-md-12 mt-3">
                                <label htmlFor="" class="fw-bold mr-2">
                                  Account Number/खाते क्रमांक
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    class="pl-2"
                                    style={{ width: "300px" }}
                                    name="accNo"
                                    value=${listProfe[0].accNo}
                                    onChange={changeHandle}
                                  />
                                </div>

                              </div>
                              <div class="col-md-12 mt-3">
                                <label htmlFor="" class="fw-bold mr-2">
                                  Bank Name/बँकेचे नाव
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    class="pl-2"
                                    style={{ width: "300px" }}
                                    name="bankName"
                                    value=${listProfe[0].bankName}
                                    onChange={changeHandle}
                                  />
                                </div>

                              </div>
                              <div class="col-md-12 mt-3">
                                <label htmlFor="" class="fw-bold mr-2">
                                  IFSC Code/IFSC कोड
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    class="pl-2"
                                    style={{ width: "300px" }}
                                    name="ifscCode"
                                    value=${listProfe[0].ifscCode}
                                    onChange={changeHandle}
                                  />
                                </div>

                              </div>
                              <div class="col-md-12 mt-3">
                                <label htmlFor="" class="fw-bold mr-2">
                                  Branch Name/शाखेचे नाव
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    class="pl-2"
                                    style={{ width: "300px" }}
                                    name="branchName"
                                    value=${listProfe[0].branchName}
                                    onChange={changeHandle}
                                  />
                                </div>

                              </div>
                              <div class="col-md-12 mt-3">
                                <label htmlFor="" class="fw-bold mr-2">
                                  Branch Code/शाखा कोड
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    class="pl-2"
                                    style={{ width: "300px" }}
                                    name="branchCode"
                                    value=${listProfe[0].branchCode}
                                    onChange={changeHandle}
                                  />
                                </div>

                              </div>
                            </li>

                            <li class="mt-5">
                              <label htmlFor="" class="fw-bold mr-2">
                                Please upload Front Page of Bank Passbook/कृपया
                                बँक पासबुकचे पहिले पान अपलोड करा<sup>*</sup>

                               
                                <p
                                  class="error-message"
                                  style={{ color: "red" }}
                                >

                                </p>
                              </label>
                              <div class="d-flex">
                                <input
                                  type="file"
                                  id="fileInput5"
                                  class="pl-2"
                                  name="frontOfBankPassBook"
                                  onChange={handleImage}
                                />

                              </div>


                              <div class="card" style="border 1px solid gray; width:300px;height:200px;display:flex;justify-content:center">
                              <img src=${frontOfBankPassBook}
                              alt="passbook" style="max-width:100%; max-height:100% ; margin:auto" />
                              
                              </div>
                              
                            </li>

                            <li style="margin-top:100px;">
                              <label htmlFor="" class="fw-bold mr-2">
                                Applicant’s Affidavit/अर्जदाराचे प्रतिज्ञापत्रक*
                                <sup>*</sup>
                                <p
                                  class="error-message"
                                  style={{ color: "red" }}
                                >  
                                </p>
                              </label>

                              <div class="d-flex ">
                                <input
                                  type="file"
                                  id="fileInput"
                                  class="pl-2"
                                  name="affidavith"
                                 
                                />
                              </div>
                              <div class="card" style="border 1px solid gray; width:300px;height:340px;display:flex;justify-content:center">
                              <img src=${affidavith}
                              alt="affidavith" style="max-width:100%; max-height:100% ; margin:auto" />
                              </div>
                            </li>

                            <li class="mt-3">
                              <label htmlFor="" class="fw-bold mr-2">
                                What Business would you like to do?/तुम्ही कोणता
                                व्यवसाय करण्यास इच्छुक आहात?<sup>*</sup>
                              </label>

                              <div class="col-md-6 border border-2 border-secondary mt-3 ">
                                <div class="mt-2 ">
                                  <div class="form-check mr-2">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      id="flexRadioDefault70"
                                      name="businessYouLikeToDo"
                                     
                                      ${
                                        listProfe[0].businessYouLikeToDo ==
                                        "Food Item"
                                          ? "checked"
                                          : ""
                                      }
                                      />
                                    <label
                                      class="form-check-label"
                                      htmlFor="flexRadioDefault70"
                                    >
                                      Food item / खादयपदार्थ
                                    </label>
                                  </div>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault71"
                                    name="businessYouLikeToDo"
                                    ${
                                      listProfe[0].businessYouLikeToDo ==
                                      "Minor"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault71"
                                  >
                                    Minor/किरकोळ
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault72"
                                    name="businessYouLikeToDo"
                                   
                                    ${
                                      listProfe[0].businessYouLikeToDo ==
                                      " Independent Business"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault72"
                                  >
                                    Independent Business/स्वतंत्र व्यवसाय
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault73"
                                    name="businessYouLikeToDo"
                                   
                                    ${
                                      listProfe[0].businessYouLikeToDo ==
                                      "Transport business"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault73"
                                  >
                                    Transport business/वाहतूक
                                  </label>
                                </div>
                                <div class="form-check mr-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault74"
                                    name="businessYouLikeToDo"
                                   
                                    ${
                                      listProfe[0].businessYouLikeToDo ==
                                      "Others"
                                        ? "checked"
                                        : ""
                                    }
                                    />
                                  <label
                                    class="form-check-label"
                                    htmlFor="flexRadioDefault74"
                                  >
                                    Others
                                  </label>
                                </div>
                              </div>
                            </li>

                            <li class="mt-2" >
                              <label
                                htmlFor=""
                                class="fw-bold mr-2 fw-bold-fw-bold"
                               
                              >
                                Declaration<sup>*</sup>
                              </label>
                              <div class="col-md-12"  style="margin-top: 10px; line-height:1.6;">
                                <span
                                  style={{
                                    lineHeight: "normal",
                                    lineBreak: "auto",
                                  }}
                                >
                                  I, Mr/Ms/Mrs
                                  <input
                                    type="text"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      textAlign: "center",
                                    }}
                                    name="declareName"
                                    value=${
                                      listProfe[0].bene_firstname +
                                      listProfe[0].bene_lastname
                                    }
                                    onChange={handleInputChange}
                                  />

                                  Son/Daughter/Wife of
                                  <input
                                    type="text"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      textAlign: "center",
                                    }}
                                    name="declareGuard"
                                    value=${listProfe[0].bene_firstname}
                                    onChange={changeHandle}
                                  />
                                  Age
                                  <input
                                    type="number"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      width: "50px",
                                      textAlign: "center",
                                    }}
                                    name="declareAge"
                                    value=${new Number(
                                      (new Date().getTime() -
                                        new Date(listProfe[0].dob).getTime()) /
                                        31536000000
                                    ).toFixed(0)}
                                    onChange={changeHandle}
                                  />
                                  Caste
                                  <input
                                    type="text"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      textAlign: "center",
                                    }}
                                    name="declareCaste"
                                    value=${listProfe[0].castCategory}
                                    onChange={changeHandle}
                                  />
                                  (General/OBC/SC/ST/VJNT/NT-B/NT-C/NT-D/SBC)
                                  ,Resident of
                                  <input
                                    type="text"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      textAlign: "center",
                                    }}
                                    name="residentOf"
                                    value=${listProfe[0].village}
                                    onChange={changeHandle}
                                  />
                                  , Post
                                  <input
                                    type="text"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      textAlign: "center",
                                    }}
                                    name="declarePost"
                                    value=${listProfe[0].post}
                                    onChange={changeHandle}
                                  />
                                  ,Block
                                  <input
                                    type="text"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      textAlign: "center",
                                    }}
                                    name="block"
                                    value=${listProfe[0].block}
                                    
                                    onChange={changeHandle}
                                  />
                                  ,District
                                  <input
                                    type="text"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      textAlign: "center",
                                    }}
                                    name="district"
                                    value=${listProfe[0].district[0]?.title}
                                    onChange={changeHandle}
                                  />
                                  ,State Maharashtra, Pin code
                                  <input
                                    type="text"
                                    id=""
                                    style={{
                                      borderTop: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      paddingLeft: "5px",
                                      textAlign: "center",
                                    }}
                                    name="pincode"
                                    value=${listProfe[0].pincode}
                                    // onChange={changeHandle}
                                  />
                                  do hereby declare that, the Information given
                                  above and in the enclosed documents is true to
                                  the best of my knowledge and belief, and nothing
                                  has been concealed therein. I am well aware of
                                  the fact that if the information given by me is
                                  provided false/not true, then I will be liable
                                  for disqualifying the application as per the
                                  law. Also, if any benefits availed by me shall
                                  be summarily withdrawn. I will use the
                                  grant/e-vehicle/e-cart for the same purpose as
                                  per the scheme guidelines dated 10 June 2019
                                </span>
                              </div>
                            </li>

                          </ul>

                        </div>
                      </div>

                      <div class="description p-3">
                        <h4>Terms and conditions of the scheme*</h4>
                        <p class="mb-1">
                          1. Applicant should be resident of Maharashtra State.
                        </p>
                        <p class="mb-1">
                          2. Applicant should have at least 40% disability and
                          should have a fitness certificate from District Surgeon
                          / Competent Authority.
                        </p>
                        <p class="mb-1">
                          3. Age of the applicant should be between 18 to 55 year
                        </p>
                        <p class="mb-1">
                          4. In case of intellectual disabilities applicants their
                          legal guardians/parents will be eligible to apply for
                          the Scheme.
                        </p>
                        <p class="mb-1">
                          5. Annual income of the applicant should not exceed INR
                          2.50 lakhs.
                        </p>
                        <p class="mb-1">
                          6. First priority will be given to those having severe
                          disabilities while selecting the beneficiaries. So, the
                          order of selection will be from severe disability to
                          mild disability.
                        </p>
                        <p class="mb-1">
                          7. If person having severe disability is denied for
                          driving license, even in such a situation preference
                          will be given to a severely disabled person who does not
                          have a license to do mobile business with the help of an
                          escort.
                        </p>
                        <p class="mb-2">
                          8. At the time of submission of the application, the
                          applicant required to submit a bond/affidavit agreeing
                          to all rules and conditions and taking proper care of
                          his/her-vehicle/e-cart.
                        </p>
                        <p class="mb-1 mt-5">
                          9. District wise list of the beneficiaries will be
                          announced in proportion to number of persons with
                          disabilities in the district.
                        </p>
                        <p class="mb-1">
                          10. The applicant should not be employed by the
                          Government, Semi Government, or any Government
                          body/Corporation.
                        </p>
                        <p class="mb-1">
                          11. If the applicant has previously availed a loan from
                          our corporation, they should not be in default of the
                          said loan.
                        </p>
                        <h4 style={{ marginTop: "10px" }}>
                          योजनेच्या अटी व शर्ती*
                        </h4>
                        <p class="mb-1">
                          1. अर्जदार हा महाराष्ट्र राज्याचा रहिवाशी असावा.
                        </p>
                        <p class="mb-1">
                          2. अर्जदाराकडे दिव्यांगत्वाचे प्रमाण किमान ४०% टक्के
                          असावे तसेच जिल्हा शल्य चिकित्सक / सक्षम प्राधिकारी यांनी
                          प्रमाणित केलेले प्रमाणपत्रधारक असावा
                        </p>
                        <p class="mb-1">
                          3. अर्जदार हा १८ ते ५५ या वयोगटातील असावा
                        </p>
                        <p class="mb-1">
                          4. बौध्दिक अक्षम अर्जदाराच्या बाबतीत त्यांचे कायदेशीर
                          पालक अर्ज करण्यास सक्षम असतील
                        </p>
                        <p class="mb-1">
                          5. दिव्यांग अर्जदाराचे वार्षिक उत्पन्नरु. २.५० लाख
                          पेक्षा अधिक नसावे.
                        </p>
                        <p class="mb-1">
                          6. लाभार्थी निवड करताना जास्त अपंगत्व असलेल्यास प्रथम
                          प्राधान्य दिले जाईल. त्यामुळे निवडीचा क्रम हा अतितीव्र
                          दिव्यांगत्व ते कमी दिव्यांगत्व या क्रमाने राहील.
                        </p>
                        <p class="mb-1">
                          7. अतितीव्र दिव्यांगत्व असणाऱ्या दिव्यांग व्यक्तीस वाहन
                          चालविण्याचा परवाना नाकारला असल्यास अशा परिस्थितीत देखील
                          परवाना धारक नसलेल्या अतितीव्र दिव्यांग व्यक्तीच्या
                          बाबतीत सोबत्याच्या (Escort) सहाय्याने फिरता मोबाईल
                          व्यवसाय करण्यास प्राधान्य दिले जाईल.
                        </p>
                        <p class="mb-1">
                          8. अर्जाच्या वेळी अर्जदाराने सर्व अटी मान्य असल्याचे
                          तसेच संबंधीत वाहनाची योग्यती काळजी घेण्याचे बंधपत्र सादर
                          करणे आवश्यक राहील
                        </p>
                        <p class="mb-1">
                          9. जिल्हानिहाय लाभार्थ्यांची घोषणा दिव्यांगांच्या
                          संख्येच्या प्रमाणात केली जाईल.
                        </p>
                        <p class="mb-1">
                          10. अर्जदार हा शासकीय/निमशासकीय/मंडळे/महामंडळे यांचा
                          कर्मचारी नसावा.
                        </p>
                        <p class="mb-1">
                          11. या योजनेसाठी अर्ज करणारा अर्जदार जर दिव्यांग वित्त व
                          विकास महामंडळाचा कर्जदार असेल तर तो थकबाकीदार नसावा.
                        </p>

                        <p class="fw-bold">
                          <div class="form-check ml-3">
                            <input
                              class="form-check-input form-check-input-2"
                              type="checkbox"
                              checked
                            />
                            <label
                              class="form-check-label mt-2 ml-2"
                              htmlFor="conditions"
                            >
                              Are the terms and conditions acceptable?
                              <sup>*</sup>
                            </label>
                          </div>
                        </p>

                        <p>

                        </p>

                      </div>

                        <div
                          class=".table-to-pdf ffef text-center mt-1"
                          ref={pdfRef2}
                        >
                          <h2>प्रतिज्ञापत्र</h2>

                          <div class="col-md-12">
                            <span
                              style={{ lineHeight: "normal", lineBreak: "auto" }}
                            >
                              मी श्री/श्रीमती
                              <input
                                type="text"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                }}
                                name="declareName"
                                value=${
                                  listProfe[0].bene_firstname +
                                  " " +
                                  listProfe[0].bene_lastname
                                }
                                onChange={handleInputChange}
                              />

                              वय
                              <input
                                type="text"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                }}
                                name="declareGuard"
                                value=${listProfe[0].relatedToGuardian}
                                onChange={changeHandle}
                              />
                              वर्षे
                              <input
                                type="number"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                  width: "50px",
                                }}
                                name="declareAge"
                                value=${new Number(
                                  (new Date().getTime() -
                                    new Date(listProfe[0].dob).getTime()) /
                                    31536000000
                                ).toFixed(0)}
                               
                              />
                              जात.
                              <input
                                type="text"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                }}
                                name="declareCaste"
                                value=${listProfe[0].castCategory}
                                onChange={changeHandle}
                              />
                              यांचा/यांचीमुलगा/मुलगी/पत्नी असून, मी गांव/शहर
                              <input
                                type="text"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                }}
                                name="residentOf"
                                value=${listProfe[0].village}
                                
                              />
                              , पोष्ट
                              <input
                                type="text"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                }}
                                name="declarePost"
                                value=${listProfe[0].post}
                               
                              />
                              ,तालुका
                              <input
                                type="text"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                }}
                                name="block"
                                value=${listProfe[0].block}
                               
                               
                              />
                              ,जिल्हा
                              <input
                                type="text"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                }}
                                name="district"
                                value=${listProfe[0].district[0]?.title}
                                
                                
                              />
                              ,राज्य महाराष्ट्र, पिनकोड
                              <input
                                type="text"
                                id=""
                                style={{
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  paddingLeft: "5px",
                                }}
                                name="pincode"
                                value=${listProfe[0].pincode}
                                // onChange={changeHandle}
                              />
                              <p style="margin-top:5px; margin-bottom:5px;">
                              येथील रहिवासी असून याद्वारे प्रतिज्ञापत्र करतो/करते
                              की, वर दिलेली आणि संलग्न दस्तऐवजांमध्ये सादर केलेली
                              माहिती माझ्या सर्वोत्तम माहितीनुसार आणि
                              विश्वासानुसार सत्य आहे आणि त्यात कोणतीही गोष्ट लपवून
                              ठेवण्यात आलेली नाही. मला या वस्तुस्थितीची चांगली
                              जाणीव आहे की जर मी दिलेली माहिती खरी नसली, तर
                              कायद्यानुसार अर्ज अपात्र ठरवण्यास मी जबाबदार असेन.
                              तसेच, मला मिळालेले सर्व फायदे सरसकट काढून घेतले
                              जातील. मी महाराष्ट्र राज्यातील इतर कोणत्याही योजने
                              अंतर्गत मोफत ई-वाहनाचा लाभ घेतलेला नाही. मी 10 जून
                              2019 च्या शासन निर्णयातील योजनेच्या मार्गदर्शक
                              तत्त्वांनुसार अनुदान / ई-वाहन / ई-कार्टचा वापर त्याच
                              उद्देशासाठी करेन तसेच संबंधीत वाहनाची योग्य ती काळजी
                              घेईन. मी याद्वारे प्रतिज्ञापत्रावर असेही कथन करतो
                              की, मी शासकीय/निमशासकीय/मंडळे/महामंडळे
                              </p>
                              <p class="mt-2">यांचा
                              कर्मचारी नाही. तसेच महाराष्ट्र राज्य दिव्यांग वित्त
                              व विकास महामंडळ, मुंबई यांचा थकीत कर्जदार लाभार्थी
                              नाही.</p>
                            </span>
                            <div class="sign-section">
                              <div class="date-sec">दिनांक:</div>
                              <div class="box-doc-2">
                                <h5>सही</h5>
                                <div class="box-doc"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                     
                    </form>

                  </div>

                </div>
              </div>
            </div>
            <ToastContainer />

          </div>
          </body></html>`;
      html2pdf(html, options)
        .outputPdf()
        .get("pdf")
        .then(async (outputData) => {});
    }, 20000);
    // } else {
    //   cyndd = true;
    //   downloadPdf();
    // }
  };

  return (
    <>
      {loader && (
        <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <ToastContainer />
      {modalShow && (
        <ImgShowModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          imgurl={imgurl}
          imghead={imghead}
        />
      )}

      {modalShow3 && (
        <ModalSelected
          show={modalShow3}
          onHide={() => setModalShow3(false)}
          data={[]}
        />
      )}
      <div className="aiz-main-content">
        {spinn && (
          <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h1 className="h2">Beneficiary List </h1>
                <h3 className="h6">
                  Self-Employment To Divyangjan Through Various Businesses on
                  Environmentally Friendly E-Vehicles / E-Cart \ पर्यावरणपूरक
                  ई-वाहने/ई-कार्टवर विविध व्यवसायांद्वारे दिव्यांगजनांना
                  स्वयंरोजगार
                </h3>
              </div>
              {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              {/* <h5 className="mb-0 h6">Special Seller List</h5> */}
              {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/category-type/add" className="btn btn-circle btn-info">
                                    <span>Add Category</span>
                                </Link>
                            </div> */}
            </div>
            <div className="card-body">
              <section className="form-section">
                <div className="row">
                  {/* <form action=""> */}
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Start Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        name="start_date"
                        value={searchList.start_date}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">End Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        name="end_date"
                        value={searchList.end_date}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="First Name"
                        name="firstname"
                        value={searchList.firstname}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                        name="lastname"
                        value={searchList.lastname}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Adhar Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Adhar Number"
                        name="adharnumber"
                        value={searchList.adharnumber}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        name="email"
                        value={searchList.email}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Mobile"
                        name="mobile"
                        value={searchList.mobile}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Application No</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Application No"
                        name="application"
                        value={searchList.application}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">UDID Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="UDID Number"
                        name="udid"
                        value={searchList.udid}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Minimum DOB</label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="UDID Number"
                        name="minDOB"
                        value={searchList.minDOB}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Maximum DOB</label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="UDID Number"
                        name="maxDOB"
                        value={searchList.maxDOB}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <label htmlFor="">Category</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="category"
                      onChange={handleChangeSearch}
                    >
                      <option selected value={null}>
                        Open this select menu
                      </option>
                      {categoryy &&
                        categoryy?.map((item, i) => {
                          return (
                            <option value={item?._id} key={i}>
                              {item?.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  {showCategoryInput && (
                    <div className="col-lg-3">
                      <div>
                        <label htmlFor="">Other Category</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Other Category"
                          name="otherBusiness"
                          value={searchList.otherBusiness}
                          onChange={handleChangeSearch}
                        />
                      </div>
                    </div>
                  )}

                  <div className="col-lg-3">
                    <label htmlFor="">Status</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={searchList.status}
                      name="status"
                      onChange={handleChangeSearch}
                    >
                      <option selected value={null}>
                        Open this select menu
                      </option>
                      {statusList &&
                        statusList?.map((item, i) => {
                          return (
                            <option value={item?._id} key={i}>
                              {item?.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="col-lg-3">
                    <label htmlFor="">Income</label>
                    <Multiselect
                      isObject={true}
                      displayValue="name"
                      options={categ}
                      showCheckbox
                      selectedValues={[]}
                      onRemove={(selectedCat) => {
                        const selectedIds = selectedCat.map((cat) => {
                          return cat.name;
                        });
                        setFinalCatD(selectedIds);
                      }}
                      onSelect={(selectedCat) => {
                        const selectedIds = selectedCat.map((cat) => {
                          return cat.name;
                        });
                        setFinalCatD(selectedIds);
                      }}
                    />
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Disability</label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="disability"
                        value={searchList.disability}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Severe Disability</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="severe_disability"
                        value={searchList.severe_disability}
                        onChange={handleChangeSearch}
                      >
                        <option selected value={null}>
                          Open this select menu
                        </option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">In Maharashtra </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="state"
                        onChange={handleChangeSearch}
                      >
                        <option selected value={null}>
                          Open this select menu
                        </option>
                        <option value={1}>
                          Permanent address state (in maharashtra)
                        </option>
                        <option value={2}>
                          Residental address state (in maharashtra)
                        </option>
                        <option value={3}>Both (in maharashtra)</option>
                        <option value={4}>None of them in maharashtra</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Division </label>
                      <Multiselect
                        isObject={true}
                        displayValue="title"
                        options={divisionData}
                        showCheckbox
                        selectedValues={[]}
                        onRemove={(selectedCat) => {
                          const selectedIds = selectedCat.map((cat) => {
                            return cat.uid;
                          });
                          setFinalCatD2(selectedIds);
                        }}
                        onSelect={(selectedCat) => {
                          const selectedIds = selectedCat.map((cat) => {
                            return cat.uid;
                          });
                          setFinalCatD2(selectedIds);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">District</label>
                      <Multiselect
                        isObject={true}
                        displayValue="title"
                        options={districtData}
                        showCheckbox
                        selectedValues={[]}
                        onRemove={(selectedCat) => {
                          const selectedIds = selectedCat.map((cat) => {
                            return cat.uid;
                          });
                          setFinalCatD3(selectedIds);
                        }}
                        onSelect={(selectedCat) => {
                          const selectedIds = selectedCat.map((cat) => {
                            return cat.uid;
                          });
                          setFinalCatD3(selectedIds);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Minimum Age</label>
                      <input
                        type="number"
                        placeholder="Enter number greater than 0"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="minAge"
                        value={searchList.minAge}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Maximum Age</label>
                      <input
                        type="number"
                        placeholder="Enter number less than 100"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="maxAge"
                        value={searchList.maxAge}
                        onChange={handleChangeSearch}
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div>
                      <label htmlFor="">Disability Type</label>
                      <Multiselect
                        isObject={true}
                        displayValue="name"
                        options={disabilityTypeData}
                        showCheckbox
                        selectedValues={[]}
                        onRemove={(selectedCat) => {
                          const selectedIds = selectedCat.map((cat) => {
                            return cat.name;
                          });
                          setFinalDisabilityTypeD(selectedIds);
                        }}
                        onSelect={(selectedCat) => {
                          const selectedIds = selectedCat.map((cat) => {
                            return cat.name;
                          });
                          setFinalDisabilityTypeD(selectedIds);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 mt-3">
                    <button
                      type="button"
                      className="btn btn-primary mr-3 mt-2"
                      onClick={() => postSearchList(0)}
                    >
                      Search
                    </button>
                  </div>
                  {/* </form> */}
                </div>
              </section>

              <button
                type="button"
                className="btn btn-primary mr-3 mt-2"
                onClick={handleLoadTotalBeneficiaries}
              >
                Prepare Beneficiary Excel Sheet
              </button>

              {showDownloadExcelBtn && (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {apedFilter && (
                    <button
                      type="button"
                      className="btn btn-primary mr-3 mt-2"
                      onClick={() => {
                        getSpecialSeller(0);
                      }}
                    >
                      Reset List
                    </button>
                  )}
                  <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button cusxel"
                    table="table-to-xlsx"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download Excel sheet"
                  />
                </div>
              )}

              {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                {apedFilter && <button type="button" className="btn btn-primary mr-3 mt-2" onClick={() => { getSpecialSeller(0) }}>Reset List</button>}
                <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button cusxel"
                  table="table-to-xls"
                  filename="tablexls"
                  sheet="tablexls"
                  buttonText="Export to Excel sheet" />
              </div> */}

              <div
                style={{ width: "700px", margin: "10px 0", display: "flex" }}
              >
                <input
                  placeholder="Comment"
                  disabled={filterState?.sellers?.length == 0}
                  onChange={seperatechanger}
                  name="comment"
                  className="form-control"
                  value={filterState?.comment}
                />
                <select
                  className="form-select"
                  style={{ margin: "0 10px" }}
                  disabled={filterState?.sellers?.length == 0}
                  aria-label="Default select example"
                  value={filterState.status}
                  name="status"
                  onChange={seperatechanger}
                >
                  <option selected value={null}>
                    Open this select menu
                  </option>
                  {statusList &&
                    statusList?.map((item, i) => {
                      return (
                        <option value={item?._id} key={i}>
                          {item?.name}
                        </option>
                      );
                    })}
                </select>
                <button
                  style={{ width: "364px" }}
                  type="button"
                  className="btn btn-primary mr-3 mt-2"
                  disabled={filterState?.sellers?.length == 0}
                  onClick={sendBulksStatus}
                >
                  Status Change
                </button>
              </div>
              <div style={{ fontSize: "20px" }}>
                <span>
                  {" "}
                  <MdPending />
                  :Pending
                </span>
                <span style={{ margin: "0 15px" }}>
                  {" "}
                  <FcApproval />
                  :Approved
                </span>
                <FcDisapprove />
                :Rejected
              </div>

              <div className="mainsel" style={{ overflow: "auto" }}>
                <table className="table table-3" id="">
                  <thead>
                    <tr>
                      <th className="table-secondary" scope="col">
                        #
                      </th>
                      <th className="table-secondary" scope="col">
                        #
                      </th>
                      <th className="table-secondary" scope="col">
                        Status
                      </th>
                      <th className="table-secondary" scope="col">
                        Registration No
                      </th>
                      <th className="table-secondary" scope="col">
                        Registration Date
                      </th>
                      <th className="table-secondary" scope="col">
                        First Name
                      </th>
                      <th className="table-secondary" scope="col">
                        Last Name
                      </th>
                      <th className="table-secondary" scope="col">
                        D O B
                      </th>
                      <th className="table-secondary" scope="col">
                        Age
                      </th>
                      <th className="table-secondary" scope="col">
                        Gender
                      </th>
                      <th className="table-secondary" scope="col">
                        Phone No
                      </th>
                      <th className="table-secondary" scope="col">
                        Email
                      </th>
                      <th className="table-secondary" scope="col">
                        UDID No
                      </th>
                      <th className="table-secondary" scope="col">
                        Disability
                      </th>
                      <th className="table-secondary" scope="col">
                        Annual Income
                      </th>
                      <th className="table-secondary" scope="col">
                        BPL/APL
                      </th>
                      <th className="table-secondary" scope="col">
                        Resident Of
                      </th>
                      <th className="table-secondary" scope="col">
                        Aadhar Card
                      </th>
                      {/* <th className="table-secondary" scope="col">Blood Group</th> */}
                      <th className="table-secondary" scope="col">
                        Category{" "}
                      </th>
                      <th className="table-secondary" scope="col">
                        Marital Status
                      </th>
                      {/* <th className="table-secondary" scope="col">Educational Details</th>
                      <th className="table-secondary" scope="col">Resident of Maharashtralagate</th>
                      <th className="table-secondary" scope="col">Types Of Disability</th>
                      <th className="table-secondary" scope="col">Area of Disability</th> */}
                      <th className="table-secondary" scope="col">
                        Business Category
                      </th>
                      <th className="table-secondary" scope="col">
                        UDID type
                      </th>
                      <th className="table-secondary" scope="col">
                        Disability by birth ?
                      </th>
                      <th className="table-secondary" scope="col">
                        identify Upload
                      </th>
                      <th className="table-secondary" scope="col">
                        User Photo
                      </th>
                      <th className="table-secondary" scope="col">
                        Sign Photo{" "}
                      </th>
                      <th className="table-secondary" scope="col">
                        Identity Proof
                      </th>
                      <th className="table-secondary" scope="col">
                        Address Proof
                      </th>
                      <th className="table-secondary" scope="col">
                        Caste Certificate Proof
                      </th>
                      <th className="table-secondary" scope="col">
                        Disability Certificate Proof
                      </th>
                      <th className="table-secondary" scope="col">
                        UDID Proof{" "}
                      </th>
                      <th className="table-secondary" scope="col">
                        Front Of Bank PassBook{" "}
                      </th>
                      <th className="table-secondary" scope="col">
                        Affidavit{" "}
                      </th>
                      <th className="table-secondary" scope="col">
                        Comment{" "}
                      </th>
                      <th className="table-secondary" scope="col">
                        Status Change
                      </th>
                      <th
                        className="table-secondary"
                        scope="col"
                        style={{ display: "none" }}
                      >
                        Identity Proof
                      </th>
                      <th
                        className="table-secondary"
                        scope="col"
                        style={{ display: "none" }}
                      >
                        Affidavith
                      </th>
                      <th className="table-secondary" scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listSeller &&
                      listSeller?.map((item, i) => {
                        console.log("listSellerMOIN----", listSeller);
                        return (
                          <tr key={item._id} className="table-to-xls">
                            <td>{pageIndex * 10 + i + 1}</td>

                            <td className="bulkkk">
                              <Form.Check
                                onClick={() => {
                                  changeBulkSelect(item.seller._id);
                                }}
                                type={"checkbox"}
                                id={`default-checkbox`}
                              />
                            </td>

                            {/* <td style={{ fontSize: '27px' }}>
                                                    {item?.status[0]?.name == 'Rejected' && <FcDisapprove />}
                                                    {item?.status[0]?.name == 'Pending' && <MdPending />}
                                                    {item?.status[0]?.name == 'Approved' && <FcApproval />}

                                                    {item?.status[0]?.name == 'Rejected' && <span style={{ border: '1px solid black', height: '15px', width: '15px', borderRadius: '100%', backgroundColor: 'red' }}>0</span>}
                                                    {item?.status[0]?.name == 'Pending' && <span style={{ border: '1px solid black', height: '15px', width: '15px', borderRadius: '100%', backgroundColor: 'yellow' }}>0</span>}
                                                    {item?.status[0]?.name == 'Approved' && <span style={{ border: '1px solid black', height: '15px', width: '15px', borderRadius: '100%', backgroundColor: 'green' }}>0</span>}
                                                </td> */}

                            <td style={{ display: "table-cell" }}>
                              {/* <span className="badge badge-inline badge-danger">{item.status}</span> */}
                              <span
                                class="badge badge-inline badge-danger"
                                style={{
                                  color: "black",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  backgroundColor:
                                    item?.status[0]?.name === "Rejected"
                                      ? "red"
                                      : item?.status[0]?.name === "Pending"
                                      ? "yellow"
                                      : item?.status[0]?.name === "Approved"
                                      ? "green"
                                      : item?.status[0]?.name === "Waiting"
                                      ? "blue"
                                      : item?.status[0]?.name === "Next Slot"
                                      ? "purple"
                                      : "",
                                }}
                              >
                                {item?.status[0]?.name}
                              </span>
                            </td>

                            <td>{item?.seller?.applicationNo}</td>
                            {/* <td>{item?.seller?.applicationDate}</td> */}
                            <td>
                              {new Date(
                                item?.seller?.applicationDate
                              ).getDate() +
                                "/" +
                                (new Date(
                                  item?.seller?.applicationDate
                                ).getMonth() +
                                  1) +
                                "/" +
                                new Date(
                                  item?.seller?.applicationDate
                                ).getFullYear()}
                            </td>
                            <td>{item?.seller?.bene_firstname}</td>
                            <td>{item?.seller?.bene_lastname}</td>
                            {/* <td>{item?.seller?.dob}</td> */}
                            <td>
                              {new Date(item?.seller?.dob).getDate() +
                                "/" +
                                (new Date(item?.seller?.dob).getMonth() + 1) +
                                "/" +
                                new Date(item?.seller?.dob).getFullYear()}
                            </td>
                            <td>{item?.seller?.age}</td>
                            <td>{item?.seller?.gender}</td>
                            <td>{item?.seller?.mobile}</td>
                            <td>{item?.seller?.email}</td>
                            <td>{item?.seller?.udId_No}</td>
                            <td>{item?.seller?.PerOfDis}%</td>
                            <td>
                              {item?.seller?.employmentDetail?.annualIncom}
                            </td>
                            <td>{item?.seller?.employmentDetail?.bpl}</td>
                            <td>{item?.seller?.residentOf}</td>
                            <td>{item?.seller?.adhaarCard}</td>

                            {/* <td>{item?.seller?.bloodGroup}</td> */}
                            <td>{item?.seller?.castCategory}</td>
                            <td>{item?.seller?.maritalStatus}</td>
                            <td>{item?.seller?.businessCategory?.name}</td>
                            <td>{item?.seller?.udidType}</td>
                            <td>
                              {item?.seller?.disabltyByBirth ? "Yes" : "No"}
                            </td>
                            <td>{item?.seller?.idProof}</td>
                            <td
                              id="image-container"
                              onClick={() =>
                                openModal(
                                  item?.seller?.userPhoto?.url,
                                  "User Photo "
                                )
                              }
                            >
                              <img
                                src={item?.seller?.userPhoto?.url}
                                alt=""
                                style={{ width: "40px" }}
                              />
                            </td>
                            <td
                              id="image-container2"
                              onClick={() =>
                                openModal(
                                  item?.seller?.signPhoto?.url,
                                  "Sign Photo"
                                )
                              }
                            >
                              <img
                                src={item?.seller?.signPhoto?.url}
                                alt=""
                                style={{ width: "40px" }}
                              />
                            </td>
                            <td
                              id="image-container"
                              onClick={() =>
                                openModal(
                                  item?.seller?.idProofFile?.url,
                                  "Identity Proof"
                                )
                              }
                            >
                              {/* <img src={item?.seller?.idProofFile?.url} alt="" style={{ width: '40px' }} /> */}
                              <button
                                type="button"
                                onClick={() =>
                                  openModal(
                                    item?.seller?.idProofFile?.url,
                                    "Identity Proof"
                                  )
                                }
                              >
                                Show
                              </button>
                            </td>
                            <td
                              id="image-container"
                              onClick={() =>
                                openModal(
                                  item?.seller?.addressProof[0]?.url,
                                  "Address Proof"
                                )
                              }
                            >
                              {/* <img src={item?.seller?.addressProof[0].url} alt="" style={{ width: '40px' }} /> */}
                              <button
                                type="button"
                                onClick={() =>
                                  openModal(
                                    item?.seller?.addressProof[0]?.url,
                                    "Address Proof"
                                  )
                                }
                              >
                                Show
                              </button>
                            </td>
                            <td
                              id="image-container"
                              onClick={() =>
                                openModal(
                                  item?.seller?.castCertificate?.url,
                                  "Cast Certificate Proof"
                                )
                              }
                            >
                              {/* <img src={item?.seller?.castCertificate.url} alt="" style={{ width: '40px' }} /> */}
                              <button
                                type="button"
                                onClick={() =>
                                  openModal(
                                    item?.seller?.castCertificate?.url,
                                    "Cast Certificate Proof"
                                  )
                                }
                              >
                                Show
                              </button>
                            </td>
                            {/* <td id="image-container" onClick={() => openModal(item?.seller?.castCertificate?.url, 'cast Certificate Proof')}>
                                                    <img src={item?.seller?.castCertificate.url} alt="" style={{ width: '40px' }} />
                                                </td> */}
                            <td
                              id="image-container2"
                              onClick={() =>
                                openModal(
                                  item?.seller?.disabilityCertImage?.url,
                                  "Disability Cert Image"
                                )
                              }
                            >
                              {/* <img src={item?.seller?.disabilityCertImage?.url} alt="" style={{ width: '40px' }} /> */}
                              <button
                                type="button"
                                onClick={() =>
                                  openModal(
                                    item?.seller?.disabilityCertImage?.url,
                                    "Disability Cert Image"
                                  )
                                }
                              >
                                Show
                              </button>
                            </td>
                            <td
                              id="image-container2"
                              onClick={() =>
                                openModal(
                                  item?.seller?.udId_File?.url,
                                  "UDID Proof"
                                )
                              }
                            >
                              {/* <img src={item?.seller?.udId_File?.url} alt="" style={{ width: '40px' }} /> */}
                              <button
                                type="button"
                                onClick={() =>
                                  openModal(
                                    item?.seller?.udId_File?.url,
                                    "UDID Proof"
                                  )
                                }
                              >
                                Show
                              </button>
                            </td>
                            <td
                              id="image-container2"
                              onClick={() =>
                                openModal(
                                  item?.seller?.frontOfBankPassBook?.url,
                                  "Front Of Bank PassBook"
                                )
                              }
                            >
                              {/* <img src={item?.seller?.frontOfBankPassBook?.url} alt="" style={{ width: '40px' }} /> */}
                              <button
                                type="button"
                                onClick={() =>
                                  openModal(
                                    item?.seller?.frontOfBankPassBook?.url,
                                    "Front Of Bank PassBook"
                                  )
                                }
                              >
                                Show
                              </button>
                            </td>
                            <td
                              id="image-container2"
                              onClick={() =>
                                openModal(
                                  item?.seller?.affidavith?.url,
                                  "Affidavith"
                                )
                              }
                            >
                              {/* <img src={item?.seller?.affidavith?.url} alt="" style={{ width: '40px' }} /> */}
                              <button
                                type="button"
                                onClick={() =>
                                  openModal(
                                    item?.seller?.affidavith?.url,
                                    "Affidavith"
                                  )
                                }
                              >
                                Show
                              </button>
                            </td>

                            <td style={{ display: "none" }}>
                              {item?.seller?.idProofFile?.url}
                            </td>
                            <td style={{ display: "none" }}>
                              {item?.seller?.affidavith?.url}
                            </td>
                            <td>
                              {
                                item?.seller?.status[
                                  item?.seller?.status?.length - 1
                                ]?.comment
                              }
                            </td>
                            <td>
                              <select
                                className="form-select"
                                style={{ width: "120px" }}
                                aria-label="Default select example"
                                value={
                                  item?.seller?.status[
                                    item?.seller?.status?.length - 1
                                  ]?.status
                                }
                                name="status"
                                onChange={(e) => {
                                  statusChangeOnPage(
                                    e.target.value,
                                    item?.seller?._id
                                  );
                                }}
                              >
                                <option selected value={null}>
                                  Open this select menu
                                </option>
                                {statusList &&
                                  statusList?.map((item, i) => {
                                    return (
                                      <option value={item?._id} key={i}>
                                        {item?.name}
                                      </option>
                                    );
                                  })}
                              </select>
                            </td>
                            <td className="d-flex">
                              <button
                                onClick={() => {
                                  managePdfData(item);
                                }}
                                className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                                type="button"
                              >
                                <VscFilePdf />
                              </button>
                              {/* <button onClick={() => { handleGenerateExcel(item) }} className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" type="button">
                                                        <VscFilePdf />
                                                    </button> */}

                              <button
                                type="button"
                                onClick={() => handleDelete(item?.seller?._id)}
                                className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                                title="delete"
                                fdprocessedid="yghhlt"
                              >
                                <i className="las la-trash icon-icon"></i>
                              </button>
                              <Link
                                className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                                title="View"
                                to={`/admin/special-seller/details/${item?.seller?._id}`}
                              >
                                {/* <i className="las la-eye">
                                    </i> */}
                                <GrView />
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              {/* 
              <div className="aiz-pagination">
                                <div style={{ display: "flex", justifyContent: "center", margin: '8px' }}>
                                    <button type="button" onClick={changeLoad} className="btn btn-info">load more...</button>
                                </div>
                            </div> */}

              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "5px 10px",
                }}
              >
                {pagesCount && (
                  <Pagination
                    onChange={onChangeVal}
                    total={totalCount}
                    showQuickJumper
                  />
                )}
                <h5 style={{ marginTop: "10px" }}>
                  Total Beneficiaries:{" "}
                  <span style={{ color: "green" }}>{totalCount}</span>
                </h5>
              </div>

              {/* <div className="aiz-pagination">
                <ul className="pagination" style={{ justifyContent: "center" }}>
                  <li className="page-item" style={{ cursor: "pointer" }} onClick={() => getPaginationDExtra('previous')}><a className="page-link">Previous</a></li>


                  {pagesCount && pagesCount?.slice(0, 10).map((o) => {
                    return <li style={{ cursor: "pointer" }} className={`page-item ${pageIndex == o && 'active'}`} onClick={() => getPaginationD(o)}><a className="page-link">{o}</a></li>
                  })}

                  <li className="page-item" style={{ cursor: "pointer" }} onClick={() => getPaginationDExtra('next')}><a className="page-link">Next</a></li>
                </ul>
              </div> */}
            </div>

            {false && (
              <div className="table-to-pdf">
                <div className="headerpdf">
                  <div>
                    {/* <div className="imgpdf">
                                        <img style={{ width: "170px" }}
                                            src='https://res.cloudinary.com/ddk7r5yth/image/upload/v1700134795/owbjkxwcukld63odusm8.jpg'
                                            alt="Login" className="img-fluid" />
                                    </div> */}
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "center",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <h5>
                        Registration No : {pdfPrinting?.seller?.applicationNo}
                      </h5>
                      <h5 style={{ margin: "0 15px" }}>
                        UDID No : {pdfPrinting?.seller?.udId_No}
                      </h5>
                      <h5>Status :{pdfPrinting?.status[0]?.name}</h5>
                    </div>
                  </div>
                </div>
                <div className="bodypdf container">
                  <div className="row">
                    <div className="col-6">First Name :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.bene_firstname}
                    </div>
                    <div className="col-6">Last Name :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.bene_lastname}
                    </div>
                    <div className="col-6">DOB :</div>
                    <div className="col-6">{pdfPrinting?.seller?.dob}</div>
                    <div className="col-6">Age :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.declareAge}
                    </div>
                    <div className="col-6">Gender :</div>
                    <div className="col-6">{pdfPrinting?.seller?.gender}</div>
                    <div className="col-6">Phone No :</div>
                    <div className="col-6">{pdfPrinting?.seller?.mobile}</div>
                    <div className="col-6">Email :</div>
                    <div className="col-6">{pdfPrinting?.seller?.email}</div>
                    <div className="col-6">Registration Date :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.applicationDate}
                    </div>
                    <div className="col-6">Blood Group :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.bloodGroup}
                    </div>
                    <div className="col-6">Resident Of :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.residentOf}
                    </div>
                    <div className="col-6">Disability :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.PerOfDis}%
                    </div>

                    <div className="col-6">Category : </div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.castCategory}
                    </div>
                    <div className="col-6">Marital Status :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.maritalStatus}
                    </div>
                    <div className="col-6">BPL/APL :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.employmentDetail?.bpl}
                    </div>
                    <div className="col-6">Annual Income :</div>
                    <div className="col-6">
                      {pdfPrinting?.seller?.employmentDetail?.annualIncom}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {pdfData && (
              <div ref={pdfContainerRef} style={{ zIndex: "-2" }}>
                <div className={`border border-primary border-primaryy-2`}>
                  <div className="col-md-12 text-center mt-2">
                    <p className="fs-6 fw-bold">
                      महाराष्ट्र राज्य दिव्यांग वित्त व विकास महामंडळ मर्या.
                      मुंबई
                    </p>
                    <p className="fs-6 fw-bold">
                      (ISO 9001 : 2008 Certified Organisation)
                    </p>
                    <span className="fs-6 fw-bold">
                      Person with Disabilities Welfare Department, Government of
                      Maharashtra
                    </span>{" "}
                    <br />
                    <span>दिव्यांग कल्याण विभाग, महाराष्ट्र शासन </span>
                  </div>
                </div>
                {/* <hr className='border border-1 border-secondary' /> */}
                <div className="border border-primary">
                  <div className="col-md-12 text-center mt-2">
                    <span className="fs-6 ">
                      Application form for Environmentally Friendly
                      e-Vehicles/E-cart for Divyangjan to become self-reliant{" "}
                    </span>{" "}
                    <br />
                    <span>
                      दिव्यांग व्यक्तींना स्वावलंबी होण्याच्या दृष्टीने हरित
                      उर्जेवर चालणाऱ्या पर्यावरण स्नेही फिरत्या वाहनावरील दुकान
                      योजने अंतर्गत अर्ज करण्यासाठीचा अर्ज
                    </span>
                  </div>
                </div>
                <div
                  className="container border border-primary"
                  style={{ width: 800 }}
                >
                  <div className="col-md-12 mt-4">
                    <h6>Personal Details/</h6>
                    <hr className="border border-1 border-primary m-0 p-0" />
                  </div>
                  <div className="row m-0 p-0">
                    <div className="col-md-10 mt-3 m-0 p-0">
                      <ul style={{ display: "flex" }}>
                        <li>
                          <label htmlFor="" className="fw-bold mr-2">
                            Applicant Photo <sup>*</sup>
                          </label>
                          <div>
                            <img
                              style={{ width: "200px", height: "200px" }}
                              src={imgPhoto}
                            />
                          </div>
                        </li>
                        <li>
                          <label htmlFor="" className="fw-bold mr-2">
                            Applicant Signature <sup>*</sup>
                          </label>
                          <div>
                            <img
                              style={{ width: "200px", height: "60px" }}
                              src={imgSign}
                            />
                          </div>
                        </li>
                      </ul>
                      <ul type="disc " style={{ listStyle: "unset" }}>
                        <li>
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Name of Applicant/अर्जदाराचे नाव <sup>*</sup>
                          </label>
                          <div>
                            <input
                              type="text"
                              placeholder="First Name"
                              className="pl-2"
                              value={pdfData?.seller?.bene_firstname}
                            />{" "}
                            <input
                              type="text"
                              className="pl-2"
                              placeholder="Middle Name"
                              value={pdfData?.seller?.bene_middlename}
                            />
                            <input
                              type="text"
                              className="pl-2"
                              placeholder="Last Name"
                              value={pdfData?.seller?.bene_lastname}
                            />
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Mother’s Name/आईचे नाव <sup>*</sup>
                          </label>
                          <div>
                            <input
                              type="text"
                              placeholder="First Name"
                              className="pl-2"
                              value={pdfData?.seller?.mother_firstname}
                            />{" "}
                            <input
                              type="text"
                              className="pl-2"
                              placeholder="Middle Name"
                              value={pdfData?.seller?.mother_middlename}
                            />
                            <input
                              type="text"
                              className="pl-2"
                              placeholder="Middle Name"
                              value={pdfData?.seller?.mother_lastname}
                            />
                          </div>
                        </li>

                        <div className="col-md-12">
                          <li className="mt-3">
                            {" "}
                            <div className="col-md-12">
                              <label htmlFor="" className="fw-bold mr-2">
                                Date of Birth/जन्मतारीख <sup>*</sup>
                              </label>
                            </div>
                            <div className="col-md-12">
                              <input
                                type="text"
                                value={pdfData?.seller?.dob}
                                className="pl-2"
                              />{" "}
                              {/* <input
                                                        type="text"
                                                        placeholder="Age(Min 18 to Max 55)"
                                                        className="ml-5 pl-2"
                                                        style={{ width: 250 }}
                                                    /> */}
                            </div>
                          </li>
                        </div>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Mobile No./भ्रमणध्वनी क्र. +९१<sup>*</sup>
                          </label>
                          <div>
                            <input
                              type="number "
                              value={pdfData?.seller?.mobile}
                              placeholder="+91"
                              className="pl-2"
                            />{" "}
                          </div>
                        </li>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Email<sup>*</sup>
                          </label>
                          <div>
                            <input
                              type="number "
                              style={{ width: "300px" }}
                              value={pdfData?.seller?.email}
                              placeholder="+91"
                              className="pl-2"
                            />{" "}
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Gender/लिंग<sup>*</sup>
                          </label>
                          <div>
                            <input
                              type="checkbox"
                              checked={pdfData?.seller.gender == "Male"}
                              className="seller-checkbox "
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Male/पु
                            </label>
                            <input
                              type="checkbox"
                              checked={pdfData?.seller.gender == "Female"}
                              className="ml-3 seller-checkbox"
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Female/स्त्री
                            </label>
                            <input
                              type="checkbox"
                              checked={pdfData?.seller.gender == "Trans"}
                              className="ml-3 seller-checkbox"
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Transgender/ट्रान्सजेडर
                            </label>
                            <input
                              type="checkbox"
                              checked={pdfData?.seller.gender == "Other"}
                              className="ml-3 seller-checkbox"
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Other/इतर
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-2 mt-4">
                      {/* <img alt="nizam" className="border border-primary" /> */}
                      {/* <input type="file" className='mt-1 ' name="uploadfile" id="img" style={{ display: 'none' }} />
                        <label for="img">Upload Certificate</label> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul type="disc " style={{ listStyle: "unset" }}>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Blood Group/रक्त गट
                          </label>
                          <div className="Blood-Group d-flex">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="bloodGroup"
                                checked={pdfData?.seller.bloodGroup == "O+"}
                                id="flexRadioDefault5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault5"
                              >
                                O+
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="bloodGroup"
                                checked={pdfData?.seller.bloodGroup == "O-"}
                                id="flexRadioDefault6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault6"
                              >
                                O-
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="bloodGroup"
                                checked={pdfData?.seller.bloodGroup == "A+"}
                                id="flexRadioDefault8"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault8"
                              >
                                A+
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="bloodGroup"
                                checked={pdfData?.seller.bloodGroup == "A-"}
                                id="flexRadioDefault9"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault9"
                              >
                                A-
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="bloodGroup"
                                checked={pdfData?.seller.bloodGroup == "B+"}
                                id="flexRadioDefault10"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault10"
                              >
                                B+
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="bloodGroup"
                                checked={pdfData?.seller.bloodGroup == "B-"}
                                id="flexRadioDefault11"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault11"
                              >
                                B-
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="bloodGroup"
                                checked={pdfData?.seller.bloodGroup == "AB+"}
                                id="flexRadioDefault12"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault12"
                              >
                                AB+
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="bloodGroup"
                                checked={pdfData?.seller.bloodGroup == "AB-"}
                                id="flexRadioDefault13"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault13"
                              >
                                AB-
                              </label>
                            </div>
                          </div>
                        </li>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Category <sup>*</sup>
                          </label>
                          <div className="Category-1 d-flex">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={
                                  pdfData?.seller.castCategory == "General"
                                }
                                id="flexRadioDefault14"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault14"
                              >
                                General
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={pdfData?.seller.castCategory == "OBC"}
                                id="flexRadioDefault16"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault16"
                              >
                                OBC
                              </label>
                            </div>

                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={pdfData?.seller.castCategory == "SC"}
                                id="flexRadioDefault17"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault17"
                              >
                                SC
                              </label>
                            </div>

                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={pdfData?.seller.castCategory == "ST"}
                                id="flexRadioDefault18"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault18"
                              >
                                ST
                              </label>
                            </div>

                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={pdfData?.seller.castCategory == "VJNT"}
                                id="flexRadioDefault19"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault19"
                              >
                                VJNT
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={pdfData?.seller.castCategory == "NT-B"}
                                id="flexRadioDefault20"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault20"
                              >
                                NT-B
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={pdfData?.seller.castCategory == "NT-C"}
                                id="flexRadioDefault21"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault21"
                              >
                                NT-C
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={pdfData?.seller.castCategory == "NT-D"}
                                id="flexRadioDefault22"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault22"
                              >
                                NT-D
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="castCategory"
                                checked={pdfData?.seller.castCategory == "SBC"}
                                id="flexRadioDefault22"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault22"
                              >
                                SBC
                              </label>
                            </div>
                          </div>
                          <span>
                            (Atteched Caste Certificate and Non-Creamy Layer
                            Certificate for OBC/SC/ST/VJNT/NT-B/NT-C/NT-D/SBC){" "}
                          </span>
                        </li>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Caste Certificate / जातीचा दाखला<sup>*</sup>
                          </label>
                          {pdfData?.seller?.castCertificate?.url ? (
                            <p
                              className="success-message"
                              style={{ color: "green" }}
                            >
                              Documents Uploaded{" "}
                            </p>
                          ) : (
                            <p
                              className="success-message"
                              style={{ color: "red" }}
                            >
                              Not Upload{" "}
                            </p>
                          )}
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Business Category/व्यवसाय श्रेणी <sup>*</sup>
                          </label>
                          {pdfData?.seller?.businessCategory?.name ? (
                            <p
                              className="success-message"
                              style={{ color: "green" }}
                            >
                              ({pdfData?.seller?.businessCategory?.name}) ,
                              Documents Uploaded{" "}
                            </p>
                          ) : (
                            <p
                              className="success-message"
                              style={{ color: "red" }}
                            >
                              Not Upload{" "}
                            </p>
                          )}
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Marital Status/वैवाहिक स्थिती <sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <input
                              type="checkbox"
                              checked={
                                pdfData?.seller.maritalStatus == "Unmarried"
                              }
                              className="seller-checkbox "
                            />
                            <label htmlFor="" className="ml-1  ">
                              Unmarried
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox  "
                              checked={
                                pdfData?.seller.maritalStatus == "Married"
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Married
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={pdfData?.seller.maritalStatus == "Widow"}
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Widow
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={
                                pdfData?.seller.maritalStatus == "Divorced"
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Divorced
                            </label>
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            If you are married, then please provide name of the
                            Spouse/विवाहित असल्यास पतिचे/पत्नीचे संपूर्ण नाव
                            <sup>*</sup>
                          </label>
                          <div className="">
                            <input
                              type="text"
                              className="pl-2"
                              name="spouse_name"
                              value={pdfData?.seller.spouse_name}
                              style={{ width: "600px" }}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Name of Guardian of the beneficiary<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <input
                              type="text"
                              className="pl-1"
                              value={pdfData?.seller?.guardian_name}
                              style={{ width: "600px" }}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul style={{ listStyle: "unset" }}>
                        F
                        <li className="">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            His/her Contact No<sup>*</sup>
                          </label>
                          <div className="d-flex" style={{ width: "500px" }}>
                            <input
                              type="number"
                              className="pl-1"
                              value={pdfData?.seller?.guardian_contact}
                              placeholder="+91"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Relationship of Guardian with the beneficiary
                            <sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <input
                              type="checkbox"
                              checked={
                                pdfData?.seller?.relatedToGuardian == "Father"
                              }
                              className="seller-checkbox "
                            />
                            <label htmlFor="" className="ml-1  ">
                              Father
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox  "
                              checked={
                                pdfData?.seller?.relatedToGuardian == "Mother"
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Mother{" "}
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={
                                pdfData?.seller?.relatedToGuardian == "Wife"
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Wife
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={
                                pdfData?.seller?.relatedToGuardian == "Husband"
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Husband
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={
                                pdfData?.seller?.relatedToGuardian == "Other"
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Other
                            </label>
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Educational Details<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <input
                              type="checkbox"
                              className="seller-checkbox "
                              checked={
                                pdfData?.seller?.educationDetails.primary
                              }
                            />
                            <label htmlFor="" className="ml-1  ">
                              Primary
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox  "
                              checked={
                                pdfData?.seller?.educationDetails.secondary
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Secondary{" "}
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={
                                pdfData?.seller?.educationDetails
                                  .higher_secondary
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Higher Secondary
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={
                                pdfData?.seller?.educationDetails.diploma
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Diploma
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={
                                pdfData?.seller?.educationDetails.graduate
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Graduate
                            </label>
                          </div>
                          <div className="d-flex mt-3">
                            <input
                              type="checkbox"
                              className=" seller-checkbox "
                              checked={
                                pdfData?.seller?.educationDetails.post_graduate
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Postgraduate
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox "
                              checked={
                                pdfData?.seller?.educationDetails.unGraduate
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Uneducated
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <h6>Address Details/अर्जदाराचे निवासाचे तपशिल</h6>
                    <hr className="border border-1 border-primary m-0 p-0" />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Are you being resident of Maharashtra?
                          </label>
                          <div className="d-flex">
                            <input
                              type="checkbox"
                              className="seller-checkbox "
                              checked={pdfData?.seller?.residentOf == "Yes"}
                            />
                            <label htmlFor="" className="ml-1  ">
                              Yes
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox  "
                              checked={pdfData?.seller?.residentOf == "No"}
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              No
                            </label>
                            <span className="ml-3">
                              (If Yes Please Upload Domicile Certificate)
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="mt-2">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Domacile Certificate/अधिवास प्रमाणपत्र<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            {pdfData?.seller?.domacileCert?.url ? (
                              <p
                                className="success-message"
                                style={{ color: "green" }}
                              >
                                {" "}
                                Documents Uploaded{" "}
                              </p>
                            ) : (
                              <p
                                className="success-message"
                                style={{ color: "red" }}
                              >
                                Not Upload{" "}
                              </p>
                            )}
                          </div>
                        </li>
                        <li className="mt-2">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Corespondence Address / सध्याचा पत्ता<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <textarea
                              name=""
                              id=""
                              cols="80"
                              rows="2"
                              value={pdfData?.seller?.coresAddress}
                              className="pl-2"
                            ></textarea>
                          </div>
                        </li>
                      </ul>
                      <div className="Village-sec ml-5 Village-sec-2">
                        <div className="row">
                          <div className="col-md-2">
                            <li
                              className="mt-1"
                              style={{ listStyleType: "none" }}
                            >
                              {" "}
                              <label htmlFor="" className="fw-bold mr-2">
                                Post / पोस्ट<sup>*</sup>
                              </label>
                              <div className="d-flex">
                                <input
                                  type="text"
                                  className="pl-2"
                                  name="post"
                                  value={pdfData?.seller?.post}
                                />
                              </div>
                            </li>
                          </div>
                          <div className="col-md-3">
                            <li
                              className="mt-1"
                              style={{ listStyleType: "none" }}
                            >
                              {" "}
                              <label htmlFor="" className="fw-bold mr-2">
                                State / राज्य<sup>*</sup>
                              </label>
                              <div className="d-flex">
                                <input
                                  type="text"
                                  className="pl-2"
                                  name="state"
                                  value={pdfData?.seller.state}
                                />
                              </div>
                            </li>
                          </div>
                          <div className="col-md-3">
                            <li className="" style={{ listStyleType: "none" }}>
                              {" "}
                              <label htmlFor="" className="fw-bold mr-2">
                                Division/विभाग<sup>*</sup>
                              </label>
                              <div className="d-flex">
                                <input
                                  type="text"
                                  className="pl-1"
                                  name="state"
                                  value={pdfData?.seller.division[0]?.title}
                                />
                              </div>
                              {/* <select className="form-select" aria-label="Default select example" value={vlueDistric} onChange={divisonChange}>
                                                                    <option selected>Open this select menu</option>
                                                                    {divisonn && divisonn?.map((item) => {
                                                                        return <option value={item?.uid}>{item?.title}</option>
                                                                    })}
                                                                </select> */}
                              {/* {errors.divisonn && <p style={{ color: 'red' }}>{errors.divisonn}</p>} */}
                              {/* <div className="d-flex">
                                                            <input type="text" className="pl-2" name="district" value={pdfData?.seller?.district}  />
                                                        </div> */}
                            </li>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <li
                                className=""
                                style={{ listStyleType: "none" }}
                              >
                                {" "}
                                <label htmlFor="" className="fw-bold mr-2">
                                  District/जिल्हा<sup>*</sup>
                                </label>
                                <div className="d-flex">
                                  <input
                                    type="text"
                                    className="pl-2"
                                    name="state"
                                    value={pdfData?.seller.district[0]?.title}
                                  />
                                </div>
                                {/* <select className="form-select" aria-label="Default select example" value={addSeller.district} name="district" >
                                                                    <option selected>Open this select menu</option>
                                                                    {districMaha && districMaha?.map((item) => {
                                                                        return <option value={item?.uid}>{item?.title}</option>
                                                                    })}
                                                                </select> */}
                                {/* <div className="d-flex">
                                                            <input type="text" className="pl-2" name="district" value={addSeller.district}  />
                                                        </div> */}
                              </li>
                            </div>
                            <div className="col-md-3">
                              <li
                                className=""
                                style={{ listStyleType: "none" }}
                              >
                                {" "}
                                <label htmlFor="" className="fw-bold mr-2">
                                  Block/तालुका<sup>*</sup>
                                </label>
                                <div className="d-flex">
                                  <input
                                    type="text"
                                    className="pl-2"
                                    name="block"
                                    value={pdfData?.seller?.block}
                                  />
                                </div>
                              </li>
                            </div>
                            <div className="col-md-3">
                              <li
                                className=""
                                style={{ listStyleType: "none" }}
                              >
                                {" "}
                                <label htmlFor="" className="fw-bold mr-2">
                                  Village/गांव<sup>*</sup>
                                </label>
                                <div className="Village">
                                  <input
                                    type="text"
                                    className="pl-2"
                                    name="village"
                                    value={pdfData?.seller?.village}
                                  />
                                </div>
                              </li>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <li
                                className=""
                                style={{ listStyleType: "none" }}
                              >
                                {" "}
                                <label htmlFor="" className="fw-bold">
                                  Pincode / पिनकोड<sup>*</sup>
                                </label>
                                <div className="d-flex">
                                  <input
                                    type="number"
                                    className=""
                                    name="pincode"
                                    value={pdfData?.seller?.pincode}
                                  />
                                </div>
                              </li>
                            </div>
                          </div>

                          {/* <ul style={{ listStyle: "unset" }}>
                                                    <li className="mt-3" style={{ listStyleType: 'none' }}>
                                                        {" "}
                                                        <label htmlFor="" className="fw-bold mr-2">
                                                            Permanent Address / कायमचा पत्ता<sup>*</sup>
                                                        </label>
                                                        <div className="Permanent">
                                                            <textarea
                                                                name="permanentAddress"
                                                                id=""
                                                                cols="80"
                                                                rows="2"
                                                                className="pl-2" value={pdfData?.seller?.permanentAddress} ></textarea>
                                                        </div>

                                                    </li>
                                                </ul> */}
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <label htmlFor="" className="fw-bold mr-2">
                              Permanent Address / कायमचा पत्ता<sup>*</sup>
                            </label>
                            <div className="Permanent">
                              <textarea
                                name="permanentAddress"
                                id=""
                                cols="80"
                                rows="2"
                                className="pl-2"
                                value={pdfData?.seller?.permanentAddress}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Documents of Address Proof <sup>*</sup>
                          </label>
                          <div className="Muscular-1 Muscular-2 d-flex">
                            <input
                              type="checkbox"
                              className="seller-checkbox "
                              id="Driving License"
                              name="driveLicen"
                              checked={
                                pdfData?.seller?.docOfAddProof.driveLicen
                              }
                            />
                            <label
                              htmlFor="Driving License"
                              className="ml-1 seller-label"
                            >
                              Driving License
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox  "
                              id="Ration Card"
                              name="rationCard"
                              checked={
                                pdfData?.seller?.docOfAddProof.rationCard
                              }
                            />
                            <label
                              htmlFor="Ration Card"
                              className="ml-1 seller-label"
                            >
                              Ration Card
                            </label>
                            <input
                              type="checkbox"
                              className=" ml-3 seller-checkbox "
                              id="Voter Id"
                              name="voterId"
                              checked={pdfData?.seller?.docOfAddProof.voterId}
                            />
                            <label htmlFor="Voter Id" className="ml-1  ">
                              Voter Id
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox  "
                              id="Passport"
                              name="passport"
                              checked={pdfData?.seller?.docOfAddProof.passport}
                            />
                            <label
                              htmlFor="Passport"
                              className="ml-1 seller-label"
                            >
                              Passport{" "}
                            </label>
                          </div>
                          <div className="d-flex mt-3">
                            <input
                              type="checkbox"
                              className=" seller-checkbox "
                              checked={
                                pdfData?.seller?.docOfAddProof.electricBill
                              }
                            />
                            <label htmlFor="" className="ml-1  ">
                              Electricity Bill
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox  "
                              checked={
                                pdfData?.seller?.docOfAddProof.properTaxRec
                              }
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              Property Tax Receipt
                            </label>
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Address proof / पत्त्याचा पुरावा<sup>*</sup>
                          </label>
                          {pdfData?.seller?.addressProof[0]?.url ? (
                            <p
                              className="success-message"
                              style={{ color: "green" }}
                            >
                              Documents Uploaded{" "}
                            </p>
                          ) : (
                            <p
                              className="success-message"
                              style={{ color: "red" }}
                            >
                              Not Upload{" "}
                            </p>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-12 mt-5">
                    <h6>Disability Certificate/ दिव्यांगत्व प्रमाणपत्र</h6>
                    <hr className="border border-1 border-primary m-0 p-0" />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Do You have Disability Certificate
                          </label>
                          <div className="d-flex">
                            <input
                              type="checkbox"
                              className="seller-checkbox "
                              checked={pdfData?.seller?.disabilityCert == true}
                            />
                            <label htmlFor="" className="ml-1  ">
                              Yes
                            </label>
                            <input
                              type="checkbox"
                              className="ml-3 seller-checkbox  "
                              checked={pdfData?.seller?.disabilityCert == false}
                            />
                            <label htmlFor="" className="ml-1 seller-label">
                              No
                            </label>
                            <span className="ml-3">
                              {" "}
                              (If Yes, Please fill in the following Details &
                              attach disability certificate)
                            </span>
                          </div>
                        </li>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Disability Certificate/दिव्यांगत्वाचे प्रमाणपत्र
                            <sup>*</sup>
                            {pdfData?.seller?.disabilityCertImage?.url ? (
                              <p
                                className="success-message"
                                style={{ color: "green" }}
                              >
                                {" "}
                                Documents Uploaded{" "}
                              </p>
                            ) : (
                              <p
                                className="success-message"
                                style={{ color: "red" }}
                              >
                                Not Upload{" "}
                              </p>
                            )}
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            UDID Certificate No<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flex8"
                                name="udidType"
                                checked={
                                  pdfData?.seller?.udidType == "Permanent UDID"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flex8"
                              >
                                Permanent UDID /कायमस्वरूपी UDID
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flex6"
                                name="udidType"
                                checked={
                                  pdfData?.seller?.udidType == "Temporary UDID"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flex6"
                              >
                                Temporary UDID /तात्पुरता UDID
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <ul style={{ listStyle: "unset", listStyleType: "none" }}>
                      <li className="">
                        {" "}
                        <label htmlFor="" className="fw-bold mr-2">
                          UDID Certificate No/UDID प्रमाणपत्र क्र <sup>*</sup>
                        </label>
                        <div className="d-flex">
                          <input
                            type="text"
                            className="pl-2"
                            name="udId_No"
                            value={pdfData?.seller?.udId_No}
                          />
                        </div>
                      </li>

                      <li className="">
                        {" "}
                        <label htmlFor="" className="fw-bold mr-2">
                          UDID Certificate/UDID प्रमाणपत्र <sup>*</sup>
                          {pdfData?.seller?.udId_File?.url ? (
                            <p
                              className="success-message"
                              style={{ color: "green" }}
                            >
                              {" "}
                              Documents Uploaded{" "}
                            </p>
                          ) : (
                            <p
                              className="success-message"
                              style={{ color: "red" }}
                            >
                              Not Upload{" "}
                            </p>
                          )}
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Percentage of disability (40% or more than 40%)
                            <sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <input
                              type="text"
                              className="pl-2"
                              value={pdfData?.seller?.PerOfDis}
                            />
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Types Of Disability/दिव्यांगत्वाचा प्रकार
                            <sup>*</sup>
                          </label>
                          <div className="Disability">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="locoMotor"
                                id="Locomotors Disability"
                                checked={
                                  pdfData?.seller?.typesOfDisability.locoMotor
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Locomotors Disability"
                              >
                                Locomotors Disability/अस्थिव्यंग
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="leprosy"
                                id="Leprosy Cured persons"
                                checked={
                                  pdfData?.seller?.typesOfDisability.leprosy
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Leprosy Cured persons"
                              >
                                Leprosy Cured persons/कुष्ठरोग निवारीत मुक्त
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="cerebralPal"
                                id="Cerebral Palsy"
                                checked={
                                  pdfData?.seller?.typesOfDisability.cerebralPal
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Cerebral Palsy"
                              >
                                Cerebral Palsy/मेंदूचा पक्षाघात
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="dwarfism"
                                id="Dwarfism"
                                checked={
                                  pdfData?.seller?.typesOfDisability.dwarfism
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Dwarfism"
                              >
                                Dwarfism /शारीरिक वाढ खुंटणे
                              </label>
                            </div>
                          </div>
                          {/* <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="muscular_dy" id="Muscular Dystrophy" checked={pdfData?.seller?.typesOfDisability.muscular_dy} />
                                                        <label className="form-check-label" htmlFor="Muscular Dystrophy">
                                                            Muscular Dystrophy/स्नायुंची विकृती
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="acidAttactVic" id="Acid Attack victim" checked={pdfData?.seller?.typesOfDisability.acidAttactVic} />
                                                        <label className="form-check-label" htmlFor="Acid Attack victim">
                                                            Acid Attack victim/आम्ल हल्ला पीडित
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="blindness" id="Blindness" checked={pdfData?.seller?.typesOfDisability.blindness} />
                                                        <label className="form-check-label" htmlFor="Blindness">
                                                            Blindness/पुर्णतः अंध
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="lowVision" id="Low-vision" checked={pdfData?.seller?.typesOfDisability.lowVision} />
                                                        <label className="form-check-label" htmlFor="Low-vision">
                                                            Low-vision/अंशतः अंध (दृष्टिदोष)
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="hearingImp" id="Hearing Impairment" checked={pdfData?.seller?.typesOfDisability.hearingImp} />
                                                        <label className="form-check-label" htmlFor="Hearing Impairment">
                                                            Hearing Impairment (Deaf and hard of Hearing)/कर्णबधीर / ऐकू कमी येणे
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="speechNlang" id="Speech" checked={pdfData?.seller?.typesOfDisability.speechNlang} />
                                                        <label className="form-check-label" htmlFor="Speech">
                                                            Speech and Language disability/वाचा / भाषा दोष
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="intellect" id="Intellectual Disability" checked={pdfData?.seller?.typesOfDisability.intellect} />
                                                        <label className="form-check-label" htmlFor="Intellectual Disability">
                                                            Intellectual Disability/बौद्धिक अक्षम
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="specific_learn" id="Specific" checked={pdfData?.seller?.typesOfDisability.specific_learn} />
                                                        <label className="form-check-label" htmlFor="Specific">
                                                            Specific Learning Disabilities/विशिष्ट अध्ययन अक्षम
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="autism" id="Autism" checked={pdfData?.seller?.typesOfDisability.autism} />
                                                        <label className="form-check-label" htmlFor="Autism">
                                                            Autism Spectrum Disorder/स्वमग्न
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="mentalBehave" id="Mental" checked={pdfData?.seller?.typesOfDisability.mentalBehave} />
                                                        <label className="form-check-label" htmlFor="Mental">
                                                            Mental Behavior/Mental illness/मानसिक वर्तन / मानसिक आधार
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="multiScler" id="Multiple" checked={pdfData?.seller?.typesOfDisability.multiScler} />
                                                        <label className="form-check-label" htmlFor="Multiple">
                                                            Multiple Sclerosis/हातापायातील स्नायू कमजोर / शिथिल होणे
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="parkinson" id="Parkinson" checked={pdfData?.seller?.typesOfDisability.parkinson} />
                                                        <label className="form-check-label" htmlFor="Parkinson">
                                                            Parkinson's disease/कंपावात
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="hemoPhilia" id="Hemophilia" checked={pdfData?.seller?.typesOfDisability.hemoPhilia} />
                                                        <label className="form-check-label" htmlFor="Hemophilia">
                                                            Hemophilia/अधिक रक्तस्त्राव
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="thalassemia" id="Thalassemia" checked={pdfData?.seller?.typesOfDisability.thalassemia} />
                                                        <label className="form-check-label" htmlFor="Thalassemia">
                                                            Thalassemia/रक्ताची कमतरता
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="sickieCell" id="Sickle" checked={pdfData?.seller?.typesOfDisability.sickieCell} />
                                                        <label className="form-check-label" htmlFor="Sickle">
                                                            Sickle Cell disease/रक्ताचे हिमोग्लोबीनचे प्रमाण कमी होणे
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="Muscular-1 d-flex mt-3">
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="chronicNeu" id="Chronic" checked={pdfData?.seller?.typesOfDisability.chronicNeu} />
                                                        <label className="form-check-label" htmlFor="Chronic">
                                                            Chronic Neurological conditions/मज्जासंस्थेचे तीव्र आजार
                                                        </label>
                                                    </div>
                                                    <div className="form-check mr-2">
                                                        <input className="form-check-input" type="checkbox" name="multipleDisab" id="Multiple" checked={pdfData?.seller?.typesOfDisability.multipleDisab} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault56">
                                                            Multiple Disabilities/बहुविकलांग
                                                        </label>
                                                    </div>
                                                </div> */}
                        </li>

                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-3">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="muscular_dy"
                                id="Muscular Dystrophy"
                                checked={
                                  pdfData?.seller?.typesOfDisability.muscular_dy
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Muscular Dystrophy"
                              >
                                Muscular Dystrophy/स्नायुंची विकृती
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="acidAttactVic"
                                id="Acid Attack victim"
                                checked={
                                  pdfData?.seller?.typesOfDisability
                                    .acidAttactVic
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Acid Attack victim"
                              >
                                Acid Attack victim/आम्ल हल्ला पीडित
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="blindness"
                                id="Blindness"
                                checked={
                                  pdfData?.seller?.typesOfDisability.blindness
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Blindness"
                              >
                                Blindness/पुर्णतः अंध
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-5 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="lowVision"
                                id="Low-vision"
                                checked={
                                  pdfData?.seller?.typesOfDisability.lowVision
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Low-vision"
                              >
                                Low-vision/अंशतः अंध (दृष्टिदोष)
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="hearingImp"
                                id="Hearing Impairment"
                                checked={
                                  pdfData?.seller?.typesOfDisability.hearingImp
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Hearing Impairment"
                              >
                                Hearing Impairment (Deaf and hard of
                                Hearing)/कर्णबधीर / ऐकू कमी येणे
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="speechNlang"
                                id="Speech"
                                checked={
                                  pdfData?.seller?.typesOfDisability.speechNlang
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Speech"
                              >
                                Speech and Language disability/वाचा / भाषा दोष
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="intellect"
                                id="Intellectual Disability"
                                checked={
                                  pdfData?.seller?.typesOfDisability.intellect
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Intellectual Disability"
                              >
                                Intellectual Disability/बौद्धिक अक्षम
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="specific_learn"
                                id="Specific"
                                checked={
                                  pdfData?.seller?.typesOfDisability
                                    .specific_learn
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Specific"
                              >
                                Specific Learning Disabilities/विशिष्ट अध्ययन
                                अक्षम
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="autism"
                                id="Autism"
                                checked={
                                  pdfData?.seller?.typesOfDisability.autism
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Autism"
                              >
                                Autism Spectrum Disorder/स्वमग्न
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-5 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="mentalBehave"
                                id="Mental"
                                checked={
                                  pdfData?.seller?.typesOfDisability
                                    .mentalBehave
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Mental"
                              >
                                Mental Behavior/Mental illness/मानसिक वर्तन /
                                मानसिक आधार
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="multiScler"
                                id="Multiple"
                                checked={
                                  pdfData?.seller?.typesOfDisability.multiScler
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Multiple"
                              >
                                Multiple Sclerosis/हातापायातील स्नायू कमजोर /
                                शिथिल होणे
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="parkinson"
                                id="Parkinson"
                                checked={
                                  pdfData?.seller?.typesOfDisability.parkinson
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Parkinson"
                              >
                                Parkinson's disease/कंपावात
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="hemoPhilia"
                                id="Hemophilia"
                                checked={
                                  pdfData?.seller?.typesOfDisability.hemoPhilia
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Hemophilia"
                              >
                                Hemophilia/अधिक रक्तस्त्राव
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-5 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="thalassemia"
                                id="Thalassemia"
                                checked={
                                  pdfData?.seller?.typesOfDisability.thalassemia
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Thalassemia"
                              >
                                Thalassemia/रक्ताची कमतरता
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-6">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="sickieCell"
                                id="Sickle"
                                checked={
                                  pdfData?.seller?.typesOfDisability.sickieCell
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Sickle"
                              >
                                Sickle Cell disease/रक्ताचे हिमोग्लोबीनचे प्रमाण
                                कमी होणे
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="chronicNeu"
                                id="Chronic"
                                checked={
                                  pdfData?.seller?.typesOfDisability.chronicNeu
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Chronic"
                              >
                                Chronic Neurological conditions/मज्जासंस्थेचे
                                तीव्र आजार
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="multipleDisab"
                                id="Multiple"
                                checked={
                                  pdfData?.seller?.typesOfDisability
                                    .multipleDisab
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault56"
                              >
                                Multiple Disabilities/बहुविकलांग
                              </label>
                            </div>
                          </div>
                        </div>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Do you have Disability by Birth<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault57"
                                checked={
                                  pdfData?.seller?.disabltyByBirth == true
                                }
                                name="disabilitiesBirth"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault57"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault58"
                                checked={
                                  pdfData?.seller?.disabilitiesBirth == false
                                }
                                name="disabilitiesBirth"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault58"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Area of Disability<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <textarea
                              name="areaOfDisable"
                              id=""
                              value={pdfData?.seller?.areaOfDisable}
                              cols="80"
                              rows="3"
                            ></textarea>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <h6>Employment Details /रोजगाराची सद्दस्थिती</h6>
                    <hr className="border border-1 border-primary m-0 p-0" />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Employement Status<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="Employed"
                                name="status"
                                checked={
                                  pdfData?.seller.employmentDetail.status ==
                                  "Employed"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Employed"
                              >
                                Employed
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="Unemployed"
                                name="status"
                                checked={
                                  pdfData?.seller.employmentDetail.status ==
                                  "Unemployed"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Unemployed"
                              >
                                Unemployed
                              </label>
                            </div>
                          </div>
                        </li>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-1">
                            Are you employed by the Government, Semi Government,
                            or any Government body/Corporation. /आपण
                            शासकीय/निमशासकीय/मंडळे/महामंडळे यांचे कर्मचारी आहात
                            का?<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="employeeByGov"
                                name="employeeByGov"
                                checked={
                                  pdfData?.seller.employmentDetail
                                    .employeeByGov == "Yes"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="employeeByGov"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check mr-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="employeeByGov"
                                name="employeeByGov"
                                checked={
                                  pdfData?.seller.employmentDetail
                                    .employeeByGov == "No"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="employeeByGov"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="Semi-Government-2 mt-2">
                            <textarea
                              name="employeeGovInDepart"
                              id=""
                              cols="70"
                              rows="2"
                              disabled={pdfData?.seller.employeeByGov == "No"}
                              value={pdfData?.seller.employeeGovInDepart}
                            ></textarea>
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            BPL/APL<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault62"
                                name="bpl"
                                checked={
                                  pdfData?.seller.employmentDetail.bpl == "N/A"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault62"
                              >
                                N/A
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault63"
                                name="bpl"
                                checked={
                                  pdfData?.seller.employmentDetail.bpl == "APL"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault63"
                              >
                                APL{" "}
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault64"
                                name="bpl"
                                checked={
                                  pdfData?.seller.employmentDetail.bpl == "BPL"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault64"
                              >
                                BPL{" "}
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault65"
                                name="bpl"
                                checked={
                                  pdfData?.seller.employmentDetail.bpl ==
                                  "Antoday"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault65"
                              >
                                Antyoday{" "}
                              </label>
                            </div>
                          </div>
                        </li>

                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Annual Income of the beneficiary<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault66"
                                name="annualIncom"
                                checked={
                                  pdfData?.seller.employmentDetail
                                    .annualIncom == "Below 10k"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault66"
                              >
                                Below 10k{" "}
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault67"
                                name="annualIncom"
                                checked={
                                  pdfData?.seller.employmentDetail
                                    .annualIncom == "10k to 1 lakhs"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault67"
                              >
                                10k to 1 lakhs{" "}
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault68"
                                name="annualIncom"
                                checked={
                                  pdfData?.seller.employmentDetail
                                    .annualIncom == "1 lakhs to 2.5 lakhs"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault68"
                              >
                                01 lakhs to 2.5 lakhs{" "}
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault69"
                                name="annualIncom"
                                checked={
                                  pdfData?.seller.employmentDetail
                                    .annualIncom == "2.5 lakhs and more"
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault69"
                              >
                                Above 2.5 lakhs{" "}
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <h6>Identity Details (Min-1)/ओळखीचा पुरावा (किमान - १ )</h6>
                    <hr className="border border-1 border-primary m-0 p-0" />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul style={{ listStyle: "unset" }}>
                        <li className="mt-3">
                          {" "}
                          <label htmlFor="" className="fw-bold mr-2">
                            Identity Proof<sup>*</sup>
                          </label>
                          <div className="Identity-proof Identity-proof-2">
                            <input
                              type="radio"
                              className="seller-checkbox "
                              id="Driving License1"
                              name="idProof"
                              checked={
                                pdfData?.seller.idProof == "Driving License"
                              }
                            />
                            <label
                              htmlFor="Driving License1"
                              className="ml-1 seller-label"
                            >
                              Driving License
                            </label>
                            <input
                              type="radio"
                              className="ml-3 seller-checkbox"
                              id="PAN Card1"
                              name="idProof"
                              checked={pdfData?.seller.idProof == "PAN Card"}
                            />
                            <label
                              htmlFor="PAN Card1"
                              className="ml-1 seller-label"
                            >
                              PAN Card
                            </label>
                            <input
                              type="radio"
                              className="ml-3 seller-checkbox  "
                              id="Ration Card1"
                              name="idProof"
                              checked={pdfData?.seller.idProof == "Ration Card"}
                            />
                            <label
                              htmlFor="Ration Card1"
                              className="ml-1 seller-label"
                            >
                              Ration Card
                            </label>
                            <input
                              type="radio"
                              className="ml-3 seller-checkbox  "
                              id="Voter ID1"
                              name="idProof"
                              checked={pdfData?.seller.idProof == "Voter ID"}
                            />
                            <label
                              htmlFor="Voter ID1"
                              className="ml-1 seller-label"
                            >
                              Voter ID
                            </label>
                            <input
                              type="radio"
                              className="ml-3 seller-checkbox  "
                              id="Aadhar Card1"
                              name="idProof"
                              checked={pdfData?.seller.idProof == "Aadhar Card"}
                            />
                            <label
                              htmlFor="Aadhar Card1"
                              className="ml-1 seller-label"
                            >
                              Aadhar Card
                            </label>
                          </div>
                          <div className="d-flex mt-1">
                            <input
                              type="radio"
                              className="seller-checkbox "
                              id="Passport1"
                              name="idProof"
                              checked={pdfData?.seller.idProof == "Passport"}
                            />
                            <label
                              htmlFor="Passport1"
                              className="ml-1 seller-label"
                            >
                              Passport
                            </label>
                            <input
                              type="radio"
                              className="ml-3 seller-checkbox  "
                              id="MGNERGA Job Card1"
                              name="idProof"
                              checked={
                                pdfData?.seller.idProof == "MGNERGA Job Card"
                              }
                            />
                            <label
                              htmlFor="MGNERGA Job Card1"
                              className="ml-1 seller-label"
                            >
                              MGNERGA Job Card
                            </label>
                          </div>
                        </li>

                        <div className="row mt-5">
                          <div className="col-md-4">
                            <label htmlFor="" className="fw-bold mr-2">
                              Identity Proof No.<sup>*</sup>
                            </label>
                            <div className="d-flex">
                              <input
                                type="text"
                                className="pl-2"
                                value={pdfData?.seller?.idProofNo}
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="" className="fw-bold">
                              Aadhar Card<sup>*</sup>
                            </label>
                            <div className="d-flex">
                              <input
                                type="text"
                                className="pl-2"
                                value={pdfData?.seller?.adhaarCard}
                              />
                            </div>
                          </div>
                        </div>

                        {/* <li className="mt-3">
                                                {" "}
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Identity Proof No.<sup>*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input type="text" className="pl-2" value={pdfData?.seller?.idProofNo} />
                                                </div>
                                            </li> */}

                        {/* <li className="mt-3">
                                                <div className="d-flex">
                                                    <div className="col-md-6">
                                                        <label htmlFor="" className="fw-bold">
                                                            Aadhar Card<sup>*</sup>
                                                        </label>
                                                        <div className="d-flex">
                                                            <input type="text" className="pl-2" value={pdfData?.seller?.adhaarCard} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </li> */}

                        {/* <li className="mt-3">
                                                <label htmlFor="" className="fw-bold mr-2">
                                                    Bank Details of the Applicant/अर्जदाराचे बँक तपशील*<sup>*</sup>
                                                </label>
                                                <div className=" col-md-12">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Account Holder's Name /खातेधारकाचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="accHolderName" value={pdfData?.seller.accHolderName}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Account Number/खाते क्रमांक
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="accNo" value={pdfData?.seller.accNo}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Bank Name/बँकेचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="bankName" value={pdfData?.seller.bankName}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        IFSC Code/IFSC कोड
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="ifscCode" value={pdfData?.seller.ifscCode}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Branch Name/शाखेचे नाव
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="branchName" value={pdfData?.seller.branchName}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label htmlFor="" className="fw-bold mr-2">
                                                        Branch Code/शाखा कोड
                                                    </label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="pl-2"
                                                            style={{ width: "300px" }}
                                                            name="branchCode" value={pdfData?.seller.branchCode}
                                                        />
                                                    </div>

                                                </div>
                                            </li> */}

                        <div>
                          <label htmlFor="" className="fw-bold mr-2">
                            Bank Details of the Applicant/अर्जदाराचे बँक तपशील*
                            <sup>*</sup>
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor="" className="fw-bold">
                              Account Holder's Name /खातेधारकाचे नाव
                            </label>
                            <div>
                              <input
                                type="text"
                                className="pl-2"
                                style={{ width: "300px" }}
                                name="accHolderName"
                                value={pdfData?.seller.accHolderName}
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <label htmlFor="" className="fw-bold">
                              Account Number/खाते क्रमांक
                            </label>
                            <div>
                              <input
                                type="text"
                                className="pl-2"
                                style={{ width: "270px" }}
                                name="accNo"
                                value={pdfData?.seller.accNo}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor="" className="fw-bold mr-2">
                              Bank Name/बँकेचे नाव
                            </label>
                            <div>
                              <input
                                type="text"
                                className="pl-2"
                                style={{ width: "300px" }}
                                name="bankName"
                                value={pdfData?.seller.bankName}
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <label htmlFor="" className="fw-bold mr-2">
                              IFSC Code/IFSC कोड
                            </label>
                            <div>
                              <input
                                type="text"
                                className="pl-2"
                                style={{ width: "270px" }}
                                name="ifscCode"
                                value={pdfData?.seller.ifscCode}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor="" className="fw-bold mr-2">
                              Branch Name/शाखेचे नाव
                            </label>
                            <div>
                              <input
                                type="text"
                                className="pl-2"
                                style={{ width: "300px" }}
                                name="branchName"
                                value={pdfData?.seller.branchName}
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <label htmlFor="" className="fw-bold mr-2">
                              Branch Code/शाखा कोड
                            </label>
                            <div>
                              <input
                                type="text"
                                className="pl-2"
                                style={{ width: "270px" }}
                                name="branchCode"
                                value={pdfData?.seller.branchCode}
                              />
                            </div>
                          </div>
                        </div>

                        <li className="mt-3">
                          <label htmlFor="" className="fw-bold mr-2">
                            Please upload Front Page of Bank Passbook
                            <sup>*</sup>
                          </label>
                          <div className="d-flex">
                            {pdfData?.seller?.frontOfBankPassBook?.url ? (
                              <p
                                className="success-message"
                                style={{ color: "green" }}
                              >
                                {" "}
                                Documents Uploaded{" "}
                              </p>
                            ) : (
                              <p
                                className="success-message"
                                style={{ color: "red" }}
                              >
                                Not Upload{" "}
                              </p>
                            )}
                          </div>
                        </li>

                        <li className="mt-3">
                          <label htmlFor="" className="fw-bold mr-2">
                            Beneficiary's Affidavith<sup>*</sup>
                          </label>
                          <div className="d-flex">
                            {pdfData?.seller?.frontOfBankPassBook?.url ? (
                              <p
                                className="success-message"
                                style={{ color: "green" }}
                              >
                                Documents Uploaded{" "}
                              </p>
                            ) : (
                              <p
                                className="success-message"
                                style={{ color: "red" }}
                              >
                                Not Upload{" "}
                              </p>
                            )}
                          </div>
                        </li>

                        <li className="mt-3">
                          <label htmlFor="" className="fw-bold mr-2">
                            What Business would you like to do?<sup>*</sup>
                          </label>
                          <div className="col-md-6 border border-2 border-secondary ">
                            <div className="mt-2 ">
                              <div className="form-check mr-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexRadioDefault70"
                                  name="foodItem"
                                  checked={
                                    pdfData?.seller?.businessYouLikeToDo
                                      ?.foodItem
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault70"
                                >
                                  Food item / खादयपदार्थ{" "}
                                </label>
                              </div>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexRadioDefault71"
                                name="minor"
                                checked={
                                  pdfData?.seller?.businessYouLikeToDo?.minor
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault71"
                              >
                                Minor/किरकोळ{" "}
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexRadioDefault72"
                                name="independentBus"
                                checked={
                                  pdfData?.seller?.businessYouLikeToDo
                                    ?.independentBus
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault72"
                              >
                                Independent Business/स्वतंत्र व्यवसाय
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexRadioDefault73"
                                name="transport"
                                checked={
                                  pdfData?.seller?.businessYouLikeToDo
                                    ?.transport
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault73"
                              >
                                Transport business/वाहतूक{" "}
                              </label>
                            </div>
                            <div className="form-check mr-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexRadioDefault74"
                                name="other"
                                checked={
                                  pdfData?.seller?.businessYouLikeToDo?.other
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault74"
                              >
                                Others{" "}
                              </label>
                            </div>
                          </div>
                        </li>
                        {/* <li className="mt-3">
                                <label htmlFor="" className="fw-bold mr-2">
                                    Declaration<sup>*</sup>
                                </label>
                                <div className="col-md-12">
                                    <span style={{ lineHeight: "normal", lineBreak: "auto" }}>
                                        1. Mr./Mrs./{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        Son/Daughter/Wife of{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        Age{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                                width: "50px",
                                            }}
                                        />{" "}
                                        Cast{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />{" "}
                                        (SC/ST/OBC/NT/SEBC/VINT) ,Resident of{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />{" "}
                                        , Post{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        ,Block
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        ,District{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        ,State Maharashtra, Pin code{" "}
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            style={{
                                                borderTop: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                paddingLeft: "5px",
                                            }}
                                        />
                                        do hereby declare that, the Information given above and in
                                        the enclosed documents is true to the best of my biowledge
                                        and belief, and nothing has been concealed therein. I am
                                        well aware of the fact that if the information given by me
                                        is provided false/not true, then I will be liable for
                                        disqualifying the application as per the law. Also, if any
                                        benefits availed by me shall be summarily withdrawn. I will
                                        use the grant/e-vehicle/e-cart for the same purpose as per
                                        the scheme guidelines dated 10 June 2019
                                    </span>
                                </div>
                            </li>
                            <li className="mt-3 d-flex">
                                <label htmlFor="" className="fw-bold mr-2">
                                    Accept (All terms & Condition)<sup>*</sup>
                                </label>
                                <div className="col-md-6 border border-2 border-secondary ">
                                    <div className="d-flex mt-2 mb-2 ">
                                        <input type="checkbox" className="seller-checkbox " />
                                        <label htmlFor="" className="ml-1 seller-label">
                                            Yes
                                        </label>
                                        <input type="checkbox" className="ml-3 seller-checkbox  " />
                                        <label htmlFor="" className="ml-1 seller-label">
                                            No
                                        </label>
                                    </div>


                                </div>
                            </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: "none" }}>
              <div className="mainsel" style={{ overflow: "auto" }}>
                <table className="table table-3" id="table-to-xlsx">
                  <thead>
                    <tr>
                      <th className="table-secondary" scope="col">
                        #
                      </th>
                      <th className="table-secondary" scope="col">
                        Status
                      </th>
                      <th className="table-secondary" scope="col">
                        Registration No
                      </th>
                      <th className="table-secondary" scope="col">
                        Registration Date
                      </th>
                      <th className="table-secondary" scope="col">
                        First Name
                      </th>
                      <th className="table-secondary" scope="col">
                        Last Name
                      </th>
                      <th className="table-secondary" scope="col">
                        D O B
                      </th>
                      <th className="table-secondary" scope="col">
                        Age
                      </th>
                      <th className="table-secondary" scope="col">
                        Gender
                      </th>
                      <th className="table-secondary" scope="col">
                        Phone No
                      </th>
                      <th className="table-secondary" scope="col">
                        Email
                      </th>
                      <th className="table-secondary" scope="col">
                        UDID No
                      </th>
                      <th className="table-secondary" scope="col">
                        Disability
                      </th>
                      <th className="table-secondary" scope="col">
                        Annual Income
                      </th>
                      <th className="table-secondary" scope="col">
                        BPL/APL
                      </th>
                      <th className="table-secondary" scope="col">
                        Resident Of
                      </th>
                      <th className="table-secondary" scope="col">
                        Aadhar Card
                      </th>
                      <th className="table-secondary" scope="col">
                        Category{" "}
                      </th>
                      <th className="table-secondary" scope="col">
                        Marital Status
                      </th>
                      <th className="table-secondary" scope="col">
                        Business Category
                      </th>
                      <th className="table-secondary" scope="col">
                        UDID type
                      </th>
                      <th className="table-secondary" scope="col">
                        Disability by birth ?
                      </th>
                      <th className="table-secondary" scope="col">
                        identify Upload
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {excelDownloadAllData &&
                      excelDownloadAllData?.map((item, i) => {
                        return (
                          <tr key={item._id} className="table-to-xls">
                            <td>{i + 1}</td>
                            <td style={{ display: "table-cell" }}>
                              <span
                                class="badge badge-inline badge-danger"
                                style={{
                                  color: "black",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  backgroundColor:
                                    item?.status[0]?.name === "Rejected"
                                      ? "red"
                                      : item?.status[0]?.name === "Pending"
                                      ? "yellow"
                                      : item?.status[0]?.name === "Approved"
                                      ? "green"
                                      : item?.status[0]?.name === "Waiting"
                                      ? "blue"
                                      : item?.status[0]?.name === "Next Slot"
                                      ? "purple"
                                      : "",
                                }}
                              >
                                {item?.status[0]?.name}
                              </span>
                            </td>
                            <td>{item?.seller?.applicationNo}</td>
                            <td>{item?.seller?.applicationDate}</td>
                            <td>{item?.seller?.bene_firstname}</td>
                            <td>{item?.seller?.bene_lastname}</td>
                            <td>{item?.seller?.dob}</td>
                            <td>{item?.seller?.age}</td>
                            <td>{item?.seller?.gender}</td>
                            <td>{item?.seller?.mobile}</td>
                            <td>{item?.seller?.email}</td>
                            <td>{item?.seller?.udId_No}</td>
                            <td>{item?.seller?.PerOfDis}%</td>
                            <td>
                              {item?.seller?.employmentDetail?.annualIncom}
                            </td>
                            <td>{item?.seller?.employmentDetail?.bpl}</td>
                            <td>{item?.seller?.residentOf}</td>
                            <td>{item?.seller?.adhaarCard}</td>
                            <td>{item?.seller?.castCategory}</td>
                            <td>{item?.seller?.maritalStatus}</td>
                            <td>{item?.seller?.businessCategory?.name}</td>
                            <td>{item?.seller?.udidType}</td>
                            <td>
                              {item?.seller?.disabltyByBirth ? "Yes" : "No"}
                            </td>
                            <td>{item?.seller?.idProof}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
      </div>
    </>
  );
}
export default SpecialSellerList;
