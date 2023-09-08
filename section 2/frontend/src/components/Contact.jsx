import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Contact = () => {
  // initialize formik
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      // send values to backened.
    },
    validationSchema: ContactSchema,
  });

const Contact = () => {
  return (
<>
<div className="bg-body-secondary ">
  <header className="bg-dark text-white w-50 mx-auto ">
    <div className="container py-3 ">
      <h2 className="text-center display-4 fw-semibold">Get in touch with us</h2>
      <h5 className="text-center fw-light">
        If you need help or have a question, we're here for you.
      </h5>
      {/* <div class="input-group mt-5 w-75 mx-auto"> */}
      {/* <input type="text" class="form-control form-control-lg"> */}
      {/* <button class="btn btn-warning"><i class="fa-solid fa-magnifying-glass"></i></button> */}
      {/* </div> */}
    </div>
  </header>
  <div className="d-flex justify-content-center align-items-center vh-80 bg-body-secondary">
    <div className="card col-6 col-md-6 w-50" >
      <div className="p-4">
        <h2 className="text-center mt-2 mb-4 fw-semibold">Contact Us</h2>
        <form onSubmit={contactForm}></form>
        <label>Name</label>
        <input
          type="text"
          className="form-control mt-2 mb-4"
          placeholder="Username"
        />
        <label>Email</label>
        <input
          type="email"
          className="form-control mt-2 mb-4"
          placeholder="Email"
        />
        <label className='d-flex align-items-center'>Message</label>
        {/* <textarea name="" id="" cols={80} rows={3} defaultValue={" "} /> */}
        <input type="text" className="form-control mt-2 mb-4" />
        <button className="col-6 text-center btn btn-danger w-50 mx-auto d-flex justify-content-center mt-5 mb-4">
          Submit Query
        </button>
      </div>
    </div>
  </div>
  </div>
</>
  )
}

export default Contact