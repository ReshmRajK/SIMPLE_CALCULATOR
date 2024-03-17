import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {

  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [principleValid,setPrincipleValid]=useState(true)
  const [rateValid,setRateValid]=useState(true)
  const [yearValid,setYearValid]=useState(true)


  const handleReset=()=>{

    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
   setPrincipleValid(true)
   setRateValid(true)
   setYearValid(true)
  }

  const handleValidation=(e)=>{
    // console.log(e.value);
    const {value,name}=e
    console.log(value,name);
    // console.log(typeof value);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*\.?\d+$/)){
      if(name=='principle'){
        setPrinciple(value) 
        setPrincipleValid(true)     
      }
      else if(name=='rate'){
        setRate(value)
        setRateValid(true)
      }
      else{
        setYear(value) 
        setYearValid(true)     
      }
    }
    
    else{
      if(name=='principle'){
        setPrinciple(value)
        setPrincipleValid(false)      
      }
      else if(name=='rate'){
        setRate(value)
        setRateValid(false)
      }
      else{
        setYear(value)  
        setYearValid(false)    
      }
    }

  }

  const handleCalculate=()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)

    }
    else{
      alert("Please Fill The Form Completely")
    }

  }


  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>

      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate Your Simple Interest Easily</p>
        <div className='bg-warning rounded p-3 shadow d-flex justify-content-center align-items-center flex-column text-light'>
          <h1> ₹ {interest}</h1>
          <p>Total Simple Interest</p>
        </div>

        <form className='mt-3'>

          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined"
           value={principle || ""} name="principle" onChange={(e)=>handleValidation(e.target)}  />
          </div>

          { !principleValid &&
          <div className="text-danger mb-3">*Invalid User Inputs</div>
          }

          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-interest" label="Rate Of Interest (p.a) %" variant="outlined" 
          value={rate || ""} name="rate" onChange={(e)=>handleValidation(e.target)} />
          </div>

          { !rateValid &&
            <div className="text-danger mb-3">*Invalid User Inputs</div>
            }

          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-interest" label="Time Period (Yr)" variant="outlined" 
          value={year || ""} name="year" onChange={(e)=>handleValidation(e.target)} />
          </div>

          { !yearValid &&
            <div className="text-danger mb-3">*Invalid User Inputs</div>
            }

          <Stack spacing={2} direction={'row'} >
            <Button onClick={handleCalculate} disabled={ !principleValid || !rateValid || !yearValid } style={{width:'50%',height:'60px'}} className='bg-black' variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{width:'50%',height:'60px'}} variant="outlined">RESET</Button>
  
          </Stack>

        </form>
      </div>

    </div>
  );
}

export default App;
