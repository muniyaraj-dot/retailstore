import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const Bill = () => {
  const billItems = useSelector(store => store.bill);
  const {id} = useParams();
  const customer = billItems.billDetails.customerName;
  const date = billItems.billDetails.date; 
  const bill = billItems.billItem[id];
  const billhandleing = (e) =>{
     const {name,value} = e.target;

  }
  return (
    <div>
        <div className='row'>
          <input type="text" name="customer" className="form-control col col-6" value={customer}/>
          <input type="date" className="form-control col col-6" value={date ? date : new Date().toISOString().split("T")[0]} onChange={(e)=>billhandleing(e)}/>
          <input type="text" name="itemName" className="form-control col" value={bill?.itemName}/>
          <input type="number" name="itemPrice" className="form-control col" value={bill?.itemPrice}/>
          <input type="number" name="itemCount" className="form-control col" value={bill?.itemCount}/>
          </div>
    </div>
  )
}

export default Bill