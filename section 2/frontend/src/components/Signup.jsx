import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(2, "Too Short!")
    .max(11, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .matches('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$','Password is invalid'),
  email: Yup.string().email("Invalid email").required("Required"),
  confirm: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  // initialize formik
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      // send values to backened.
    },
    validationSchema: SignupSchema,
  });

  return (
    <>
        <div className="bg-body-secondary img">
          <header className='bg-dark text-white w-50 mx-auto rounded '>
            <div className="container py-3">
              <h6 className="text-center display-6 fw-semibold ">
                Register for free, Hurry up!!
              </h6>
              <h4 className="text-center fw-light">
                Create your account to save your journey
              </h4>
            </div>
          </header>
        <div className="d-flex justify-content-center img align-items-center vh-50 bg-body-secondary">
          <div className="card w-50 col-6 col-md-6 ">
            <div className="p-5">
              <h2 className="text-center fw-semibold ">SignUp</h2>
              <form onSubmit={signupForm.handleSubmit}>
                <label>Name</label>
                <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                  {signupForm.touched.name && signupForm.errors.name}
                </span>
                <input
                  id="name"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.name}
                  type="text"
                  className="form-control mt-2 mb-4"
                  placeholder="Username"
                />
                <label>Email</label>
                <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                  {signupForm.touched.email && signupForm.errors.email}
                </span>
                <input
                  id="email"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.email}
                  type="email"
                  className="form-control mt-2 mb-4"
                  placeholder="Email"
                />
                <label>Phone</label>
                <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                  {signupForm.touched.phone && signupForm.errors.phone}
                </span>
                <input
                  id="phone"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.phone}
                  type="tel"
                  className="form-control mt-2 mb-4"
                  placeholder="Phone"
                />
                <label>Password</label>
                <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                  {signupForm.touched.password && signupForm.errors.password}
                </span>
                <input
                  id="password"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.password}
                  type="password"
                  className="form-control mt-2 mb-4"
                  placeholder="password"
                />
                <label>Confirm Password</label>
                <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                  {signupForm.touched.password && signupForm.errors.password}
                </span>
                <input
                  id="password"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.password}
                  type="password"
                  className="form-control mt-2 mb-4"
                  placeholder="password"
                />
                <button
                  type="submit"
                  className='col-6 btn btn-danger w-50 mx-auto mt-5 d-flex justify-content-center'
                >
                  Create account
                </button>
                <span className="d-flex justify-content-center mb-2">Already have an account  -
                  <span>
                    <NavLink to ="/login">Login</NavLink>
                  </span>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
