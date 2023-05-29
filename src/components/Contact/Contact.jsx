import React from 'react'
import Navbar from '../Navbar'
import con from './Contact.module.css'

const Contact = () => {
  return (
    <div>
      <Navbar />  
      <div className={con.head}>
        <h1>Contact Page</h1>
      </div>
    </div>
  )
}

export default Contact