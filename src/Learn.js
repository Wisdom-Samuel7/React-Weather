import React from 'react'
import './App.css'

export default function Learn() {
  return (
    <div className='App'>
      <div className='learn'>
         <h1> What is weather ?</h1>
         
         <p>
         Weather is the state of the atmosphere, including temperature, atmospheric pressure, wind, humidity, precipitation, and cloud cover. It differs from climate, which is all weather conditions for a particular location averaged over about 30 years.
         Weather is the atmospheric condition of a given place and time. Types of weather include sunny, cloudy, rainy, windy, and snowy. One of the most significant factors that affects weather is air masses. Air masses cause warm, cold, stationary, and occluded fronts.
         </p>

         <h1>TYPES OF WEATHER</h1>
         <ol>
          <li>RAIN </li>
          <li>WINDY</li>
          <li>HURRICANE</li>
          <li>SNOW</li>
          <li>CLOUDY</li>
          <li>LIGHTING</li>
         </ol>

         <button><a style={{color:"red"}} href='https://www.google.com/search?q=weather+temperature&rlz=1C5CHFA_enNG1090NG1090&oq=weat&gs_lcrp=EgZjaHJvbWUqDAgFEAAYQxiABBiKBTIGCAAQRRg8Mg4IARBFGCcYOxiABBiKBTIOCAIQRRgnGDsYgAQYigUyBggDEEUYOTIVCAQQABhDGIMBGLEDGMkDGIAEGIoFMgwIBRAAGEMYgAQYigUyBggGEEUYPDIGCAcQRRg80gEINjA3OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'> Know more ...</a></button>

     </div>
    </div>
  )
}
