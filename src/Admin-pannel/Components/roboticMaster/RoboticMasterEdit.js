import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { base_Url, base_Url_Assets } from "../../../server";
import { ToastContainer, toast } from "react-toastify";
import RoboticMaster from "./RoboticMaster";
const token = window.localStorage.getItem("token");

function RoboticMasterEdit() {
  return (
    <>
      <RoboticMaster />
    </>
  );
}
export default RoboticMasterEdit;
