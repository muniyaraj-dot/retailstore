import React from 'react'

const Stack = () => {
  return (
    <div>
        <div className='row  g-2 align-items-center mb-2'>
            <div className='col'><input type="text" name="" className='form-control form-control-lg rounded-2 shadow-sm'placeholder='Protect ID Or Name'/></div>
            <div className='col'><input type="number" name="" className='form-control form-control-lg rounded-2 shadow-sm'placeholder='Protect Price'/></div>
            <div className='col'><input type="number" name="" className='form-control form-control-lg rounded-2 shadow-sm' placeholder='Protect Count'/></div>
            <div className='col'><button className='btn btn-primary rounded-pill px-4'>Add Stack</button></div>
        </div>
    </div>
  )
}


export default Stack