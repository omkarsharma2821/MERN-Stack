import React from 'react'

const Signup = () => {
  return (
    <>
  <header className="bg-dark text-white mb-3">
    <div className="container py-5">
      <h2 className="text-center display-2 fw-bold">Register for free, Hurry up!! </h2>
      <h3 className="text-center fw-light">
        Create your account to save your journey
      </h3>
    </div>
  </header>
  <div className="d-flex justify-content-center align-items-center vh-50 bg-body-secondary">
    <div className="card w-75 py-2 col-6 col-md-6">
      <div className="p-4">
        <h2 className="text-center mt-3">Sign Up, Now</h2>
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
        <label>Phone</label>
        <input
          type="tel"
          className="form-control mt-2 mb-4"
          placeholder="Phone"
        />
        <label htmlFor="">Message</label>
        <input type="text" className="form-control mt-2 mb-4" />
        <button className="col-6 text-center btn btn-danger w-100 mt-2">
          Submit
        </button>
      </div>
    </div>
  </div>
</>
  )
}

export default Signup