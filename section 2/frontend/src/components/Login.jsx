import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({

  firstName: Yup.string()

    .min(2, 'Too Short!')

    .max(50, 'Too Long!')

    .required('Required'),

  lastName: Yup.string()

    .min(2, 'Too Short!')

    .max(50, 'Too Long!')

    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

});
const Login = () => {
  const loginForm = useFormik({
    initialValues : {
      email : '',
      password : ''
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit : (values, {resetForm}) => {
      console.log(values);
      resetForm();
      // send values to backened.
    }
  });

  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body-secondary">
  <div className="card p-5 w-25 ">
    <div className="p-4">
      <h2 className='text-center'> Login Here</h2>
      <form onSubmit={loginForm.handleSubmit}>
      <label>Email Address</label>
      <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email}
      type="email" className="form-control mt-2 mb-4" />
      <label htmlFor="">Password</label>
      <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} 
      type="password" className="form-control mt-2 mb-4" />
      <button type='submit' className="btn btn-danger w-100 mt-4">Submit</button>
      </form>
    </div>
  </div>
</div>
</>

  )
}

export default Login