import axios from "axios"
//import { useEffect } from "react";
import './App.css';
import Nav from "./Nav";
import Main from "./Main";
import Data from "./Data";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Learn from "./Learn";

function App() {
  
  return (
   
    <div className="App">
    
       <Nav></Nav>
      
   <section>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} exact/>
            <Route path="/data/:id" element={<Data/>} exact/>
            <Route path="/learn" element={<Learn/>} exact/>
         
         </Routes>
       </BrowserRouter>

   </section>
      
    </div>
  
    
  );
}

export default App;
