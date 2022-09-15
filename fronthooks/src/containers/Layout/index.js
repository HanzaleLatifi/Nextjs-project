import React from 'react'
import Footer from './Footer'
import Header from './Header'

function index({children}) {
  return (
    <div className='min-h-screen bg-gray-50'>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default index