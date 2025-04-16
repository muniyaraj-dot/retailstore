import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const [typeofpayment,setPayment] = useState("Credit");
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
        <button className='btn btn-primary addbillbutton' >+ Add bill</button>
    </div>
    </div>
  )
}

export default Home