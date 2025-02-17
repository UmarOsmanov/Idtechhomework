const form = document.querySelector(".employeeAddForm");
const table = document.querySelector(".employeeTable");

const employees = [];

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function Employee(fullName, age, position, experiance, skills, startDate) {
  this.id = uid()
  this.fullName = fullName,
  this.age = age;
  this.position = position;
  this.experiance = experiance;
  this.skills = skills;
  this.startDate = startDate;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const fullName = formData.get("fullname");
  const age = Number(formData.get("age"));
  const position = formData.get("position");
  const experiance = Number(formData.get("experiance"));
  const skills = formData.get("skills");
  const startDate = formData.get("startDate");

  if (fullName.length < 4 || fullName.length > 50 || /[^a-zA-Z\s]+/.test(fullName)) {
    return alert("ad duz deyil blet");
  }

  if (age < 18 || age > 65) {
    return alert("Pepes blet");
  }

  if(age < (experiance + 18)){
    return alert("Soxma pepes")
  }

  const employeeDate = new Date(startDate);
  const today =  Date.now();

  if(employeeDate >= today) {
    return alert("Soxma yobana pepes")
  }

  const employeeData = new Employee(
    fullName,
    age,
    position,
    experiance,
    skills,
    startDate
  );

  employees.push(employeeData);

  form.reset();

  console.log(employees)

  showTable()
});

function showTable() {
  table.innerHTML = ` <tr class="resultRow">
                        <th>№</th>
                        <th>Ad ve Soyad</th>
                        <th>Yas</th>
                        <th>Vezife</th>
                        <th>Emeliyyatlar</th>
                    </tr>`;

  employees.map((employee, index) => {
    const tableRow = `
            <tr class="resultRowTwo">
                        <td>${index + 1}</td>
                        <td>${employee.fullName}</td>
                        <td>${employee.age}</td>
                        <td>${employee.position}</td>
                        <td><button class="resultButtonAccept">Duzelis</button><button
                                class="resultButtonCancel">Sil</button></td>
                    </tr>
        `;

        table.innerHTML += tableRow;
  });
}
