import React from "react";

export const EmployeeTable = ({ employees, setEmployes }) => {

    const handleDelete = (idx) => setEmployes((prev) =>  prev.filter((item, itemIdx) => itemIdx !== idx))


  return (
    <div className="employeTable">
      <table>
        <tr>
          <th>Ad</th>
          <th>Position</th>
          <th>Department</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
        </tr>

        {employees?.map(
          ({ fullname, position, salary, date, department, email }, idx) => (
            <tr key={idx}>
              <td>{fullname}</td>
              <td>{position}</td>
              <td>{department}</td>
              <td>{email}</td>
              <td>{salary}</td>
              <td>{date}</td>
              <td onClick={() => handleDelete(idx)}>x</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
};
