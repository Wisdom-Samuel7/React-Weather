import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
import { useState } from 'react'

export default function Nav() {
 const [slide ,setSlide] = useState(false)
   
  function Menu(){
    setSlide(slide => !slide)
  }

  const toggle1 = slide ? "a" : ''
  const toggle2 = slide ? "b" : ''
  const toggle3 = slide ? "c" : ''
  const slideIn = slide ? "" : "out"

  return (
    <>
     <nav>
      <div><h3><span>W</span>eth<span>er</span></h3></div>

      <ul>
        <li>Home</li>
        <li>Pick up</li>
        <li>Prices</li>
        <li>Catalogue</li>
      </ul>

      <div className='menu' onClick={Menu}>
        <div className={toggle1}></div>
        <div className={toggle2}></div>
        <div className={toggle3}></div>
      </div>

    </nav>

    <article className={slideIn}>
          <a href='/'>Home</a>
          <a href='/learn'>Ideas</a>
          <a href='/'>Search</a>
          
        </article>
    </>
   
  )
}
