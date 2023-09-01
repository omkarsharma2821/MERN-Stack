import React from 'react'

const EventHandling = () => {
  return (
<div className='container'>
<h1 className='text-center'>Event Handling</h1>
<hr />
<h4> Click Event</h4>
<button className='btn btn-primary' onClick={() => {alert('Button was clicked')}}>Click Here</button>
</div>
 )
}
export default EventHandling;