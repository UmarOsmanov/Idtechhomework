import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';

function App() {
  const [employees, setEmployees] = useState([]); // İşçiləri saxlayacağımız state

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]); // Yeni işçi əlavə edirik
  };

  return (
    <div style={{ display: 'flex' }}>
      <EmployeeForm addEmployee={addEmployee} /> {/* Formanı buraya əlavə edirik */}
      <EmployeeTable employees={employees} /> {/* İşçiləri göstərmək üçün cədvəli buraya əlavə edirik */}
    </div>
  );
}

export default App;