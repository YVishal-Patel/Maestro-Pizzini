import React, {useState} from 'react'

export default function Testimonial() {
    const [name, setName] = useState("Raghav Sharma")
  return (<>
      <h3>This is Testimonial {name} </h3>
      <button onClick={()=> setName("Vishal Patel")}>CLICK HERE </button>
      
  </>
  )
}
