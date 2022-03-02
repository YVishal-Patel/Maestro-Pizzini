import React from 'react'
import Navbar from './Navbar'


export default function Header() {
  return (<>
 <div className="banner">
 <Navbar />
   <div className="banner_content">
   <div className="container">
   <div className="banner_text">
     <h3>Pizza Delivery</h3>
     <h1>Maestro Pizzini</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsa aliquid corporis.   Repellendus <br /> quas quae sapiente debitis.</p>
     <button className='btn btn_main'>Delivery Now</button>
     </div> 
     </div>
   </div>
 </div>
  </>
  )
}
