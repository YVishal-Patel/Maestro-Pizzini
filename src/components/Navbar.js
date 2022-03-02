import React from 'react'

export default function Navbar() {
  return ( <>
    <nav className='navbar'>
      <div className="navbar_text">
        <div className="logo"> <img src="/Images/logo1.jpg" alt="Logo not found" /> </div>
        <ul className='navbar_ul'>
          <li><a href="/">Home</a></li>
          <li><a href="/prices">Menu</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Shop">Shop</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </nav>
  </>
  )
}
