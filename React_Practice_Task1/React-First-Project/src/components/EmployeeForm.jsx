import React from "react";
import { toast } from "react-toastify";

export const EmployeeForm = ({ setEmployes }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const employeFormData = new FormData(e.target);

    const fullname = employeFormData.get("fullname");
    const position = employeFormData.get("position");
    const department = employeFormData.get("department");
    const email = employeFormData.get("email");
    const salary = employeFormData.get("salary");
    const date = employeFormData.get("date");

    if (isNaN(salary)) {
      return alert("Maaas reqem deyill");
    }

    const employee = {
      fullname,
      position,
      department,
      email,
      salary,
      date,
    };

    setEmployes((prev) => [...prev, employee]);

    e.target.reset();

    toast("İşçi əlavə olundu", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="employeeFromWrapper">
      <form className="employeeForm" onSubmit={handleOnSubmit}>
        <input name="fullname" type="text" placeholder="ad" required />
        <input name="position" type="text" placeholder="positon" required />
        <input name="department" type="text" placeholder="dep" required />
        <input name="email" type="email" placeholder="email" required />
        <input name="salary" type="text" placeholder="salary" required />
        <input name="date" type="date" placeholder="date" required />

        <button className="btn" type="submit">Əlavə et</button>
      </form>
    </div>
  );
};
