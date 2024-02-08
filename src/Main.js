import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

export default function Main() {

  const [input,setInput] = useState(false)
  const [data,setData] = useState('')
  const [show,setShow] = useState(true)

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

setTimeout(()=>{
  setShow(false)
},3000)

  return (
    <div>
    {
      show ? 
      
      <div className='flex flex-col justify-center items-center w-screen h-screen bg-slate-900 '>
       

            
            <div className='w-full h-full flex flex-col justify-center items-center bg-slate-900 gap-5 px-5 py-5'> 
              
               <p className='w-80 h-10 px-12 bg-slate-700 animate-pulse rounded-lg'></p>
               <p className='w-80 h-10 px-12 bg-slate-700 animate-pulse rounded-lg'></p>
               
                    
              <div className='w-30 h-fit bg-none gap-5 flex flex-row px-5 py-5'> 
                <p className='w-20 h-10 px-12 bg-slate-700 animate-pulse rounded-lg'></p>
                <p className='w-20 h-10 px-12 bg-slate-700 animate-pulse rounded-lg'></p>
              </div>

           </div>

      </div>
      
      :  <div 
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

    }
   </div>
  )
}
