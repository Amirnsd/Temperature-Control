import { useState } from 'react';
import './App.css';

function App() {

   const [inputs,setInputs] =useState(10);


   const handleAdd = () =>{
    setInputs(inputs => inputs+1);
   }

   const handleSub = () =>{
    setInputs(inputs => inputs-1);

   }

  return (
    <div className="App">
       <div className='cotroller'>
           
           <div className='number'>
              <h1>{inputs}°C</h1>
           </div>
    
         <div className='buttons'>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
         </div>

         </div>

    
    </div>
  );
}

export default App;
