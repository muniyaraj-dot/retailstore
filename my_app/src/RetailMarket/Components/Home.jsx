import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const [typeofpayment,setPayment] = useState("Credit");
    const time = new Date().getTime();
    const billhandleing = () =>{
         navigate(`/bill/${time}`);
    }
  return (
    <div>
    <div className='flex-grow-1 p-2'>
            <div className='row g-1'>
            <input type="date" className="form-control col" value={new Date().toISOString().split("T")[0]} />
            <input type="text" className='form-control col' defaultValue={"All"} placeholder='CustomerName...'/>
            <select className="form-select col" value={typeofpayment} onChange={(e)=>setPayment(e.target.value)}>
             <option value="Depite">Depite</option>
             <option value="Credit">Credit</option>
      </select>
            </div>
            <div class="d-flex justify-content-center">
        <button className='btn btn-primary addbillbutton rounded-pill px-4' onClick={billhandleing}>+ Add bill</button>
    </div>
    </div>
    </div>
  )
}

export default Home