import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Stacks = () => {

  const stack = useSelector(store => store.stack.stack);
  const [sectionInput, setSectionInput] = useState({ section: "", date: "" })
  const [section, setSection] = useState(false);
  const id = new Date().getTime();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => setSection(val => !val);
  return (
    <div>
      <div className='row' style={{ filter: section ? 'blur(5px)' : "" }}>
        <div className='col'><input type="text" name="" className='form-control form-control-lg rounded-2 shadow-sm' placeholder="Enter section wish..." /></div>
        <div className='col'><input type="text" name='' className='form-control form-control-lg rounded-2 shadow-sm' placeholder="Search by name or ID" /></div>
        <div className='col'><input type="date" name="" className='form-control form-control-lg rounded-2 shadow-sm' value={new Date().toISOString().split("T")[0]} /></div>
      </div>
      <div class="d-flex justify-content-center">
        <button className={`btn  ${section ?`btn-danger` : `btn-primary`} addbillbutton rounded-pill px-4`} onClick={() => handleClick()}>{section ? "X Close" : "+ Add stack"}</button>
      </div>
      {section &&
        <div class="d-flex justify-content-center">
          <div class="position-fixed  w-50 h-auto  bg-white text-white p-3 shadow rounded-4">
            <div className='my-3'><input type="text" name="section" value={sectionInput.section} className='form-control form-control-lg rounded-2 shadow-sm' placeholder='Section ID Or Name' onChange={(e) => setSectionInput(val => ({ ...val, [e.target.name]: e.target.value }))} /></div>
            <div className='my-5'><input type="date" name="date" value={sectionInput.date || new Date().toISOString().split("T")[0]} className='form-control form-control-lg rounded-2 shadow-sm' onChange={(e) => setSectionInput(val => ({ ...val, [e.target.name]: e.target.value }))} /></div>
            <div class="d-flex justify-content-center">
              <button className='btn my-4 w-50 btn-primary' onClick={() => navigate(`/stack/${sectionInput.section}`, { state: { ...sectionInput } })}>buttom</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Stacks

