import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import SignUp from './components/SignUp'
const App = () => {
  return (
    <div className= ' bg-cyan-500 size-auto p-8 text-white'>
    <div className='flex justify-between items-center'>
      <div className='' > LANDING</div>
      <div className=''><Navbar/></div>
    </div>
    
    <div className='flex justify-between items-center'>
     <div>
      <div className='text-8xl p-3'>fly Makes you faster</div>
      <div className='text-2xl p-10'>New free template by uicookies.com.For more templates visit the site.Lorem ipsum dolor sit amet,consectetur adipising aliteNew free template by uicookies.com.For more templates visit the site.Lorem ipsum dolor sit amet</div>
      <div className='text-2xl p-10'>New free template by uicookies.com.For more templates visit the site.Lorem ipsum dolor sit amet,consectetur adipising aliteNew free template by uicookies.com.For more templates visit the site.Lorem ipsum dolor sit amet</div>
      <div className='py-3  px-2 w-48 bg-emerald-500 text-center'><input type="button" value="" />See Pricing</div>
      
      </div>
      <div className=''></div>
      <div><SignUp/></div>
      
    </div>
      </div>
    

  )
}

export default App