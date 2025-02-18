const form = document.querySelector(".employeeAddForm");
const table = document.querySelector(".employeeTable");

const fullNameInput = document.querySelector(".fullname")
const fullAgeInput = document.querySelector(".age")
const fullPositiionInput = document.querySelector(".position")
const fullExperianceInput = document.querySelector(".experiance")
const formSelectInput = document.querySelector(".formSelect")
const dateInput = document.querySelector(".datee")


let employees = [];
let editId;

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function Employee(fullName, age, position, experiance, skills, startDate) {
  this.id = uid();
  (this.fullName = fullName), (this.age = age);
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

  if (
    fullName.length < 4 ||
    fullName.length > 50 ||
    /[^a-zA-Z\s]+/.test(fullName)
  ) {
    return alert("Ad duzgun daxil edilmeyib");
  }

  if (age < 18 || age > 65) {
    return alert("Yas duzgun daxil edilmeyib");
  }

  if (age < experiance + 18) {
    return alert("Tecrube duzgun daxil edilmeyib");
  }

  if (editId) {
    employees = employees.map(employee => {

      if (employee.id === editId) {
        return {
          id: employee.id,
          fullName,
          age,
          position,
          experiance,
          skills,
          startDate
        }
      }

      return employee;
    });

    editId = undefined;
    form.reset();

    showTable()

    return;
  }

  const employeeDate = new Date(startDate);
  const today = Date.now();

  if (employeeDate >= today) {
    return alert("Soxma yobana pepes");
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

  console.log(employees);

  showTable();
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
                        <td><button data-id = "${employee.id}" class="resultButtonAccept">Duzelis</button>
                        <button data-id = "${employee.id}"     class="resultButtonCancel">Sil</button></td>
                    </tr>
        `;

    table.innerHTML += tableRow;
  });
  resultButtonCancel();
  resultButtonAccept();
}


function resultButtonCancel() {

  let cancelResult = document.querySelectorAll(".resultButtonCancel")
  cancelResult.forEach((element) => {
    element.addEventListener("click", function (e) {

      let id = e.target.dataset.id;
      employees = employees.filter((employee) => employee.id !== id);


      showTable();
    })
  })
}

function resultButtonAccept() {
  let acceptButton = document.querySelectorAll(".resultButtonAccept")
  acceptButton.forEach((element) => {
    element.addEventListener("click", function (e) {
      let id = e.target.dataset.id;
      let employeeData = employees.find((employee) => employee.id == id);

      fullNameInput.value = employeeData.fullName
      fullAgeInput.value = employeeData.age
      fullPositiionInput.value = employeeData.position
      fullExperianceInput.value = employeeData.experiance
      formSelectInput.value = employeeData.skills
      dateInput.value = employeeData.startDate

      editId = id;

    })

  })
}