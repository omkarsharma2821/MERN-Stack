import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});
const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      // send values to backened.
    },
    validationSchema: LoginSchema,

  });

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 py-5 bg-body-secondary">
        <div className="card py-3 p-5 w-50">
          <div className="p-4 ">
            <h2 className="text-center fw-semibold display-6 mb-5"> Login Here</h2>
            <form onSubmit={loginForm.handleSubmit}>
              <label>Email </label>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
              {loginForm.errors.email}
            </span>
              <input
                id="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                type="email"
                className="form-control mt-2 mb-4"
                placeholder="Enter your email address"
              />
              <label>Password</label>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
              {loginForm.errors.password}
            </span>
              <input
                id="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                type="password"
                className="form-control mt-2 mb-4"
                placeholder="Enter your password"
              />
              <button type="submit" className="btn btn-danger mx-auto mb-2 d-flex justify-content-center w-50 mt-4">
                Submit
              </button>
              <span className="d-flex justify-content-center">Dont have an account  -
                <span>
                  <a href="/signup">create account</a>
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
