import React from 'react'

const Login = () => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body-secondary">
  <div className="card p-5 w-25 ">
    <div className="p-4">
      <h2>Login Here</h2>
      <label>Email Address</label>
      <input type="email" className="form-control mt-2 mb-4" />
      <label htmlFor="">Password</label>
      <input type="password" className="form-control mt-2 mb-4" />
      <button className="btn btn-danger w-100 mt-4">Submit</button>
    </div>
  </div>
</div>
</>

  )
}

export default Login