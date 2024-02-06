import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router'


export default function Data() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [fetch,setFetch] = useState("")
    const [load,setLoad] = useState(false)

    useEffect(()=>{
        axios.get(`********************`)
        .then((res)=>{
          console.log(res)
          
         setTimeout(()=>{
            setLoad(true)
            setFetch(res)
         },3000)
        }).catch(err=>{
          console.log('ERR:',err)

          setTimeout(()=>{
            navigate("/")
         },300)

        
        })
    },[])

    //const response = res
    const typed = id.trim('').toUpperCase()

  return (
   <div>
    { !fetch ? <div style={{color:"red"}}> LOADING <span style={{color:"red"}}>.</span> <span style={{color:"yellow"}}>.</span> <span style={{color:"navy"}}>.</span> </div>:
      <div 
    className='data-output'
     style={{
        backgroundImage:`url("/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background.jpg")`,
        backgroundPosition:"center",
        backgroundSize:"cover"
     }}
    >
      <h1 style={{margin:".5em 0"}}>{ load ? <div style={{color:"#fff"}}> {typed} </div> :  <div style={{color:"#f00"}}> Loading.... </div>}</h1>
       <p>
         { load ? <div style={{color:"red",fontFamily:"cursive"}}> {fetch.data.location.tz_id} </div> : "Getting location..."}
       </p>

      <div>
         <p style={{color:"navy",fontSize:"1em",fontFamily:"fantasy",margin:"1em 0"}}>
          Time Range :
          <span style={{color:"red"}}> { fetch.data.current.is_day === 0 ? 
            
            <div style={{display:'flex',gap:"1em"}}> 
              <span>Night</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
              </svg>
           </div>

           : 
            <div style={{display:'flex',gap:"1em"}}> 
              <span>Day</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" class="bi bi-lightbulb" viewBox="0 0 16 16">
               <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
             </svg>
           </div>

          } 
         </span> </p>
      </div>

      <main>
            <h3 style={{color:"navy",display:"flex",alignItems:'center',justifyContent:'center',gap:'.7em',flexDirection:"column"}}>{fetch.data.current.temp_c} degree Celcius
             <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-thermometer-snow" viewBox="0 0 16 16">
                    <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585A1.5 1.5 0 0 1 5 12.5"/>
                    <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1.293l.646-.647a.5.5 0 0 1 .708.708L9 5.207v1.927l1.669-.963.495-1.85a.5.5 0 1 1 .966.26l-.237.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.884.237a.5.5 0 1 1-.26.966l-1.848-.495L9.5 8l1.669.963 1.849-.495a.5.5 0 1 1 .258.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.237.883a.5.5 0 1 1-.966.258L10.67 9.83 9 8.866v1.927l1.354 1.353a.5.5 0 0 1-.708.708L9 12.207V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5"/>
                    </svg>
              </div>
            </h3>
            <h3 style={{color:"navy",display:"flex",alignItems:'center',justifyContent:'center',gap:'.7em',flexDirection:"column"}}>{fetch.data.current.wind_kph} k/hr wind speed  <div style={{display:'block'}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-wind" viewBox="0 0 16 16">
                  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                      </svg>
                 </div>
                 </h3>
      </main>

    </div>
    }
   </div>
  )
}
