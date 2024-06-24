import React from 'react'

const SignUp = () => {
  return (
    <div className='text-black bg-white py-10 text-center p-6'>SignUp
    <div className='py-3'><input type="textarea" className=' resize-none rounded-md border border-grey px-40 py-2 bg-gray-100' placeholder='Full Name'></input></div>
    <div className='py-3'><input type="textarea" className=' resize-none rounded-md border border-grey px-40 py-2 bg-gray-100' placeholder='Email'></input></div>
    <div className='py-3'><input type="textarea" className=' resize-none rounded-md border border-grey px-40 py-2 bg-gray-100' placeholder='Phone Number'></input></div>
    <div className='py-3'><input type="textarea" className=' resize-none rounded-md border border-grey px-40 py-2 bg-gray-100' placeholder='Address'></input></div>
    <div className='py-3 bg-cyan-600'><input type="button" value="" />Register</div>
    </div>
   
  )
}

export default SignUp