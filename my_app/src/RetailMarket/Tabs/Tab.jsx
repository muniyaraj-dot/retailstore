import React from 'react'
import "./Tab.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeTab, setCurrentTab } from '../Redux/tabSlice';
const Tab = ({sidebarOpen}) => {
    const {tabs,currentTab} = useSelector(store => store.tab);
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
  console.log(currentTab);
  return (
    <div>
        <div className='button-container' style={{marginLeft: sidebarOpen ? "0px" : "60px"}}>
            {tabs.map(tabs => (
 <button 
 key={tabs.path}
 className={`button`}
 style={{backgroundColor: tabs.path === currentTab ? "#343a40" : 'blue'}} 
 onClick={() => tabHandling(tabs.path)}
>{tabs?.pathName}<span onClick={(e)=>deleteTab(e,tabs.path)}> x</span></button>
            ))}
       </div>
    </div>
  )
}

export default Tab;