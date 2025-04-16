import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Tab from '../Tabs/Tab'
import { Outlet, useParams } from 'react-router-dom'
import "./layout.css";
import { useDispatch } from 'react-redux';
import { addTab } from '../Redux/tabSlice';
import { getPath } from './getPath';
const Layout = () => {
  const [sidebar, setSidbar] = useState(false);
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(()=>{
    const pathName = getPath(id);
    dispatch(addTab({path:{pathName,path:window.location.pathname}}))
  },[window.location.pathname]);
  return (
    <div className="container-fluid p-0">
      <button
        onClick={() => setSidbar(prev => !prev)}
        className="btn position-fixed top-0 start-0 m-2"
        style={{ zIndex: 1000 }}
      >
        <i
          className="bi bi-list"
          style={{ fontSize: '28px', color: sidebar ? 'white' : 'black' }}
        ></i>
      </button>
      {sidebar && (
        <div
          className="bg-dark text-white position-fixed top-0 start-0 h-100 p-3"
          style={{ width: '200px', zIndex: 999 }}
        >
          <Sidebar />
        </div>
      )}
      <div
        className=""
        style={{
          marginLeft: sidebar ? '200px' : '0px',
          transition: '0.3s ease',
        }}
      >
        <Tab sidebarOpen={sidebar} />
        <div className="flex-grow-1 overflow-auto p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
