import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({

  name : Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),

});

const Signup = () => {
   // initialize formik
  const signupForm = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : '',
      phone : ''
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit : (values) => {
      console.log(values);
      // send values to backened.
    },
    validationSchema: SignupSchema
  });

  return (
    <>
  <header className="bg-dark text-white mb-3 w-50 mx-auto">
    <div className="container py-4">
      <h4 className="text-center display-5 fw-bold">Register for free, Hurry up!! </h4>
      <h2 className="text-center fw-light">
        Create your account to save your journey
      </h2>
    </div>
  </header>
  <div className="d-flex justify-content-center align-items-center vh-50 bg-body-secondary ">
    <div className="card w-50 py-2 col-6 col-md-6 mx-auto">
      <div className="p-4">
        <h2 className="text-center mt-3">Sign Up</h2>
        <form onSubmit={signupForm.handleSubmit}>
        <label>Name</label>
        <span style={{fontSize: 10, marginLeft: '10px', color: 'red'}}>{signupForm.errors.name}</span>
        <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name}
          type="text"
          className="form-control mt-2 mb-4"
          placeholder="Username"
        />
        <label>Email</label>
        <span style={{fontSize: 10, marginLeft: '10px', color: 'red'}}>{signupForm.errors.email}</span>
        <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email}
          type="email"
          className="form-control mt-2 mb-4"
          placeholder="Email"
        />
        <label>Phone</label>
        <span style={{fontSize: 10, marginLeft: '10px', color: 'red'}}>{signupForm.errors.phone}</span>
        <input id='phone' onChange={signupForm.handleChange} value={signupForm.values.phone}
          type="tel"
          className="form-control mt-2 mb-4"
          placeholder="Phone"
        />
        <label htmlFor="">Password</label>
        <span style={{fontSize: 10, marginLeft: '10px', color: 'red'}}>{signupForm.errors.password}</span>
        <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password}
        type="password" className="form-control mt-2 mb-4" placeholder='password'/>
        <button type ='submit' className="col-6 text-center btn btn-danger w-100 mt-2">
          Create account
        </button>
        </form>
      </div>
    </div>
  </div>
</>
  )
}

export default Signup