import React from 'react'
import "../style/signin.css";
import Navbar from './navbar.jsx';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import {MDBInput,} from "mdb-react-ui-kit";
// import axios from "axios";
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom"; */

//<----------- Formik validation------------>
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }
  return errors;
};


export default function Signin() {
  
  //<----------- Formik values------------>
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validate,
  // <-------------Axios-------------->
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
<>
<Navbar/>
<div className='container'>
<div>
<img
    alt="Zoom"
    className="introimg img-fluid"
    src="../signin.svg"
  />
</div>
<form onSubmit={formik.handleSubmit}>
  <h3 className='p-3 text-center'>Sign In</h3>
  <div class="form-outline mb-4">
  <MDBInput
            className="mb-4"
            type="email"
            Name="email"
            label="Email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
  </div>  
  <div class="form-outline mb-4">
  <MDBInput className="mb-4" type="password" label="Password" Name="password" onChange={formik.handleChange}
            value={formik.values.password}/>
  </div>
  <button type={"submit"} value="Submit" class="login btn btn-success btn-block mb-4">Login</button>
  <div class="text-center">
  Not a member? <Link to="/signup">Register Your Account</Link>
  </div>
</form>

    </div>

 
</>
  )
}

