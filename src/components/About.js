import React from 'react'

function About(){
  return(<>
  <div className="about">
 <div className="container">
 <div className="row">
   <div className="col-6">
   <h3>About us</h3>
   <h1>Welcome to <br /> Maestro Pizzini</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Itaque temporibus magnam tempore architecto.  Labore itaque repellat corrupti aliquid expedita <br /> facere?</p>

   <div className="btn about_btn">
     <a href="/" className='btn '>READ MORE</a>
   </div>
   </div>
   <div className="col-6">
    <div className="about_img">
      <img src="/Images/pizza5.jpg" alt="No Image found" />
    </div>
   </div>
 </div>
   
 </div>
 </div>
  </>

  )
}
export default About;