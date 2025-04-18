import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Sales from '../Presentation/Sales';
import { addItem, setCustomer, setDate, setPaymentType, updateSales } from '../Redux/appSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = "home";
  const billItem = useSelector(store => store.bill);
  const paymentType = billItem?.billDetails?.paymentType[id]?.paymentType || "Credit";
  const customer = billItem?.billDetails?.cusName[id]?.customer || "ALL";
  const date = billItem?.billDetails?.date[id]?.date || new Date().toISOString().split("T")[0];
  const time = new Date().getTime();
  console.log(date)
  const addToBillhandleing = () => {
    navigate(`/bill/${time}`);
  }
  const billhandleing = (e) => {
    const { name, value } = e.target;

    if (name === "customer") {
      dispatch(setCustomer({ id, [name]: value }));
    } else if (name === 'date') {
      dispatch(setDate({ id, [name]: value }));
    } else if (name === "paymentType") {
      dispatch(setPaymentType({ id, [name]: value }));
    }
  }
  const updateSale = (billItem) => {
    dispatch(updateSales({ id: billItem.id, bill: billItem.bill, customer: billItem.cusName, paymentType: billItem.paymentType, date: billItem.date }))
    navigate(`/bill/${billItem.id + "update"}`);
  }
  const sales = useSelector(store => store.bill.salesStatements);
  const salesItems = sales.filter(val => val.paymentType === paymentType && val.date === date && (customer !== "ALL" ? val.cusName === customer : true));
  console.log(salesItems);
  return (
    <div>
      <div className="row g-2 align-items-center mb-2">
        <div className="col-md-4">
          <input type="date" name='date' className="form-control" value={date} onChange={billhandleing} />
        </div>
        <div className="col-md-4">
          <input type="text" name='customer' className='form-control' defaultValue={customer} placeholder='CustomerName...' onChange={billhandleing} />
        </div>
        <div className="col-md-4">
          <select className="form-select" name='paymentType' value={paymentType} onChange={billhandleing}>
            <option value="Depite">Depite</option>
            <option value="Credit">Credit</option>
          </select>
        </div>
      </div>
      <Sales sales={salesItems} updateSales={updateSale} />
      <div class="d-flex justify-content-center">
        <button className='btn btn-primary addbillbutton rounded-pill px-4' onClick={addToBillhandleing}>+ Add bill</button>
      </div>
    </div>
  )
}

export default Home