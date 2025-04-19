import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addItem, setCustomer, setDate, addBillItem, setUpdateBillItems, deleteItem, setPaymentType, setSalesStatement, setUpdateBill } from '../Redux/appSlice';
import { removeTab } from '../Redux/tabSlice';

const Bill = () => {
  const [update, setUpdate] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const inde = id.split("update")[0];
  const billItem = useSelector(store => store.bill);
  const dispatch = useDispatch();
  const paymentType = billItem?.billDetails?.paymentType[inde]?.paymentType || "Credit";
  const customer = billItem?.billDetails?.cusName[inde] || "";
  const date = billItem?.billDetails?.date[inde] || "";
  const items = billItem.billDetails.billItems[inde] || [];
  const bill = billItem.billItem[inde] || {};
  const handleUpdate = (index) => {
    setUpdate(prev => ({ ...prev, [index]: !prev[index] }));
  }
  const updateValueHandleing = (e, index) => {
    const { name, value } = e.target;
    dispatch(setUpdateBillItems({ id: inde, index: index, key: name, value: value }));
  }

  const updateSale = () => {
    console.log("Hello")
    dispatch(setUpdateBill({ id: inde }));
    dispatch(removeTab({ path: window.location.pathname }));
    navigate("/");
  }

  const billhandleing = (e) => {
    const { name, value } = e.target;

    if (name === "customer") {
      dispatch(setCustomer({ id: inde, [name]: value }));
    } else if (name === 'date') {
      dispatch(setDate({ id: inde, [name]: value }));
    } else if (name === "paymentType") {
      dispatch(setPaymentType({ id: inde, [name]: value }));
    }
    else
      dispatch(addItem({ item: { id: inde, key: name, value: value } }));
  }
  const addItemInBill = () => {
    dispatch(addBillItem({ id: inde }));
  }
  const handleDelete = (index) => {
    dispatch(deleteItem({ id: inde, index }));
  }
  const addSales = () => {
    dispatch(setSalesStatement({ id: inde }));
    dispatch(removeTab({ path: window.location.pathname }));
    navigate("/");

  }
  return (
    <div>
      <div className="row g-2 align-items-center mb-2">
        <div className="col-md-4">
          <input
            type="text"
            name="customer"
            className="form-control"
            id="validationServer01"
            value={customer.customer || ""}
            placeholder="Customer Name"
            onChange={(e) => billhandleing(e)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            name='date'
            value={date.date ? date.date : new Date().toISOString().split("T")[0]}
            onChange={(e) => billhandleing(e)}
          />
        </div>
        <div className="col-md-4">
          <select className="form-select " name='paymentType' value={paymentType} onChange={billhandleing}>
            <option value="Depite">Depite</option>
            <option value="Credit">Credit</option>
          </select>
        </div>
      </div>
      <div className="row g-2 align-items-center mb-3">
        <div className="col-md-3">
          <input
            type="text"
            name="itemName"
            className="form-control"
            value={bill?.itemName || ""}
            placeholder="Item Name"
            onChange={(e) => billhandleing(e)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            name="itemPrice"
            className="form-control"
            value={bill?.itemPrice || ""}
            placeholder="Item Price"
            onChange={(e) => billhandleing(e)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            name="itemCount"
            className="form-control"
            value={bill?.itemCount || ""}
            placeholder="Quantity"
            onChange={(e) => billhandleing(e)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary rounded-pill px-4" onClick={addItemInBill}>
            Add
          </button>
        </div>
      </div>
      <table class="table table-success table-striped table-hover text-center">
        <thead >
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
              {!update[index] ?
                (
                  <><td>{index + 1}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemPrice}</td>
                    <td>{item.itemCount}</td>
                    <td>{item.itemCount * item.itemPrice}</td>
                  </>) :
                (<>
                  <td>{index + 1}</td>
                  <td><input type="text" class="form-control" name="itemName" value={item.itemName} onChange={(e) => updateValueHandleing(e, index)} /></td>
                  <td><input type="number" class="form-control" name="itemPrice" value={item.itemPrice} onChange={(e) => updateValueHandleing(e, index)} /></td>
                  <td><input type="number" class="form-control" name="itemCount" value={item.itemCount} onChange={(e) => updateValueHandleing(e, index)} /></td>
                  <td>{item.itemCount * item.itemPrice}</td>
                </>)}
              <td><button className='btn btn-primary rounded-pill px-4' onClick={() => handleUpdate(index)}>{!update[index] ? <i class="bi bi-pencil-square"></i> : <i class="bi bi-check-circle text-white" ></i>}
              </button></td>
              <td><button className='btn btn-danger rounded-pill px-4' onClick={() => handleDelete(index)}><i class="bi bi-trash"></i>
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {items.length !== 0 &&
        <div class="d-flex justify-content-evenly">
          <div class="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 w-50 text-center">
            Total Amount: {items.reduce((acc, item) => acc + (item.itemCount * item.itemPrice), 0)}
          </div>
          <button class="btn btn-success rounded-pill px-4" onClick={id.split("update").length === 1 ? addSales : updateSale}>FINISH <i class="bi bi-check-circle-fill text-white"></i>
          </button>
        </div>
      }
    </div>

  )
}

export default Bill