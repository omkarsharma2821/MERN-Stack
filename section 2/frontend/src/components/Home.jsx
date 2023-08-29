import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Welcome to Home Components</h1>
        <h2 style = {{color: 'red', fontSize: 40}}>Using Inline CSS</h2>
        <br />
        <hr />
        {/* <input type="" /> */}
        <h3 className='myclass'>Using Class Name </h3>

    </div>
  )
}

export default Home

