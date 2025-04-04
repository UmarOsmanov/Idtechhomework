import React, { useState } from 'react';

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState(''); // İşçinin adı
  const [position, setPosition] = useState(''); // Vəzifə
  const [department, setDepartment] = useState(''); // Şöbə
  const [email, setEmail] = useState(''); // Email
  const [salary, setSalary] = useState(''); // Əmək haqqı
  const [hireDate, setHireDate] = useState(''); // İşə qəbul tarixi
  const [error, setError] = useState(''); // Validasiya xətası

  const handleSubmit = (e) => {
    e.preventDefault(); // Forma təqdim edildikdə səhifənin yenilənməsinin qarşısını alır

    // Validasiya yoxlamaları
    if (!name || !position || !department || !email || !salary || !hireDate) {
      setError('Bütün sahələri doldurun!');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email düzgün formatda deyil!');
      return;
    }
    if (isNaN(salary)) {
      setError('Əmək haqqı yalnız rəqəmlərdən ibarət olmalıdır!');
      return;
    }

    // Yeni işçi əlavə et
    addEmployee({ name, position, department, email, salary, hireDate });

    // Formu təmizləyirik
    setName('');
    setPosition('');
    setDepartment('');
    setEmail('');
    setSalary('');
    setHireDate('');
    setError('');
  };

  return (
    <div>
      <h2>Yeni İşçi Əlavə Et</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tam adı"
          value={name}
          onChange={(e) => setName(e.target.value)} // Dəyəri dəyişdiririk
        />
        <input
          type="text"
          placeholder="Vəzifəsi"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          placeholder="Şöbəsi"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Əmək haqqı"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          type="date"
          value={hireDate}
          onChange={(e) => setHireDate(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Xəta varsa, göstəririk */}
        <button type="submit">Əlavə et</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
