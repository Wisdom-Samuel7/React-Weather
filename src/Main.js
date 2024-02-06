import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

export default function Main() {

  const [input,setInput] = useState(false)
  const [data,setData] = useState('')

  const display = input ? '' : 'none'
  const navigate = useNavigate();

  function fetchDt(){
    

    axios.get(`***********************`)
    .then((res)=>{
      console.log(res)
      navigate(`/data/${data}`)
    }).catch(err=>{
      console.log('ERR:',err)
      navigate("/")
    })
    
  }



  return (
    
    <div 
     className='main'
     style={{
      backgroundImage:`url("/beautiful-tropical-beach-sea-ocean-with-coconut-palm-tree-sunrise-time.jpg")`,
      backgroundPosition:"center",
      backgroundSize: "cover",
      backgroundAttachment:"fixed"
     }}>
      
      <h1>Weather info <span>At</span> your Finger<span>TIP</span></h1>
       <div>
        <button className='click' onClick={()=>{setInput(input=>!input)}}>Search</button>
        <button>Learn more</button>
       </div>

       <input onChange={(e)=>{setData(e.target.value)}} className={display} type='text' placeholder='e.g london'/>
       <input onClick={fetchDt} className={display}  type='submit' value='Search'/>
    
    </div>
  )
}
