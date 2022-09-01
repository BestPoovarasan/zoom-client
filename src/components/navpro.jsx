import React from 'react'
import "../style/navpro.css";


export default function Navpro() {
  return (
    <>
    <section className='navbarpro'>
    <div className='icons'>
    <i class="fa-solid fa-house-chimney-user "></i>
    <h6>Home</h6>
    </div>
    <div className='icons'>
    <i class="fa-solid fa-user"></i>
    <h6>Profile</h6>
    </div>
    <div className='icons'>
    <i class="fa-solid fa-right-from-bracket"></i>
    <h6>Logout</h6>
    </div>
    </section>
    
    
    </>
    
  )
}

