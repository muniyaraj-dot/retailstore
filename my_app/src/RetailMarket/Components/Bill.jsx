import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem , setCustomer, setDate } from '../Redux/appSlice';

const Bill = () => {

  const { id } = useParams();
  const billItem = useSelector(store => store.bill);
  const dispatch = useDispatch();
  const customer = billItem?.billDetails?.cusName[id] || "";
  const date = billItem?.billDetails?.date[id] || "";
  const items = billItem.billDetails.billItems || [];
  const bill = billItem.billItem[id] || {};
  
  const billhandleing = (e) =>{
    const {name,value} = e.target;
    if(name === "customer"){
      dispatch(setCustomer({id,[name]:value}));
    }else if(name === 'date'){
      dispatch(setDate({id,[name]:value}));
    }else
       dispatch(addItem({item:{id,key:name ,value:value}}));
  }
  return (
    <div>
<div className="row g-2 align-items-center mb-2">
  <div className="col-md-6">
    <input 
      type="text" 
      name="customer" 
      className="form-control" 
      value={customer.customer} 
      placeholder="Customer Name" 
      onChange={(e) => billhandleing(e)}
    />
  </div>
  <div className="col-md-6">
    <input 
      type="date" 
      className="form-control" 
      value={date.date ? date.date : new Date().toISOString().split("T")[0]} 
      onChange={(e) => billhandleing(e)} 
    />
  </div>
</div>
<div className="row g-2 align-items-center mb-3">
  <div className="col-md-3">
    <input 
      type="text" 
      name="itemName" 
      className="form-control" 
      value={bill?.itemName} 
      placeholder="Item Name" 
      onChange={(e) => billhandleing(e)}
    />
  </div>
  <div className="col-md-3">
    <input 
      type="number" 
      name="itemPrice" 
      className="form-control" 
      value={bill?.itemPrice} 
      placeholder="Item Price" 
      onChange={(e) => billhandleing(e)}
    />
  </div>
  <div className="col-md-3">
    <input 
      type="number" 
      name="itemCount" 
      className="form-control" 
      value={bill?.itemCount} 
      placeholder="Quantity" 
      onChange={(e) => billhandleing(e)}
    />
  </div>
  <div className="col-md-3">
    <button className="btn btn-primary" onClick={billhandleing}>
      Add
    </button>
  </div>
</div>
<table className='table table-bordered table-striped table-hover'>
  <thead className="table-dark">
    <tr>
      <th>NO</th>
      <th>ITEMNAME</th>
      <th>ITEMPRICE</th>
      <th>ITEMCOUNT</th>
      <th>TOTAL</th>
      <th>UPDATE</th>
      <th>DELETE</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.itemName}</td>
        <td>{item.itemPrice}</td>
        <td>{item.itemCount}</td>
        <td><button>UPDATE</button></td>
        <td><button>DELETE</button></td>
      </tr>
    ))}
  </tbody>
</table>
</div>

  )
}

export default Bill