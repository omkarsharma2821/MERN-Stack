import React from 'react'

const EventHandling = () => {
  return (
<div className='container'>
<h1 className='text-center'>Event Handling</h1>
<hr />
<h4> Click Event</h4>
{/* callback function depends upon the user */}
<button className='btn btn-primary' onClick={() => {alert('Button was clicked')}}>Click Here</button>
<input type="text" className='form-control mt-4' onChange={ (e) => {console.log(e.target.value)}} />
<input type="color" className='mt-4' onChange={(e) => { document.body.style.backgroundColor = e.target.value}}/>
</div>
 )
}
export default EventHandling;