import React from 'react'
import "./Tab.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeTab, setCurrentTab } from '../Redux/tabSlice';
const Tab = ({sidebarOpen}) => {
    const {tabs,CurrentTab} = useSelector(store => store.tab);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tabHandling = (path) =>{
      dispatch(setCurrentTab({path}));
      navigate(path);
    }
    const deleteTab  = (e, path) => {
      e.stopPropagation();
      dispatch(removeTab({ path, navigate }));
  }
  return (
    <div>
        <div className='button-container' style={{marginLeft: sidebarOpen ? "0px" : "60px"}}>
            {tabs.map(tabs => (
 <button 
 key={tabs.path}
 className={`button ${tabs.path === CurrentTab ? 'btn btn-primary' : ''}`} 
 onClick={() => tabHandling(tabs.path)}
>{tabs?.pathName}<span onClick={(e)=>deleteTab(e,tabs.path)}> x</span></button>
            ))}
       </div>
    </div>
  )
}

export default Tab;