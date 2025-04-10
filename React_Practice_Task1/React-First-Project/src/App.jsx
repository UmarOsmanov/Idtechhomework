import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';


import { EmployeeForm } from './components/EmployeeForm'
import { EmployeeTable } from './components/EmployeeTable'

export const App = () => {
  const [employees, setEmployes] = useState([]);

  return (
    <div className='container'>
      <EmployeeForm setEmployes={setEmployes} />
      <EmployeeTable employees={employees}  setEmployes={setEmployes}/>
      <ToastContainer />
    </div>
  )
}
