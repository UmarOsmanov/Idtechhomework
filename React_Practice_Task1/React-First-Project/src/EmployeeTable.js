import React from 'react';

function EmployeeTable({ employees }) {
  return (
    <div>
      <h2>İşçilər</h2>
      <table>
        <thead>
          <tr>
            <th>Tam adı</th>
            <th>Vəzifəsi</th>
            <th>Şöbəsi</th>
            <th>Email</th>
            <th>Əmək haqqı</th>
            <th>İşə qəbul tarixi</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>{emp.email}</td>
              <td>{emp.salary}</td>
              <td>{emp.hireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
