import React from 'react'
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Dashboard from '../Components/Dashboard'
import Home from '../Components/Home'
import Stacks from '../Components/Stacks'
import Setting from '../Components/Setting'
import Bill from '../Components/Bill'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/stacks' element={<Stacks />} />
            <Route path='/settings' element={<Setting />} />
            <Route path='/bill/:id' element={<Bill />} />
          </Route>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default Routes