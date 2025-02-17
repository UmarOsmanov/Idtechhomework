

let clickBtn = document.getElementById("clickBtn");
let fullName = document.getElementById("name");
let age = document.getElementById("age");
let position = document.getElementById("position");
let experience = document.getElementById("experience");
let skills = document.getElementById("skills");
let date = document.getElementById("date");

let tableBody = document.getElementById("tableBody");


let employesData = [];

clickBtn.addEventListener("click", function(e){

  e.preventDefault();

const newName = fullName.value;
const newAge = age.value;
const newPosition = position.value;
const newExperience = experience.value;
const newSkills = skills.value;
const newDate = date.value;

if(newName.length<3){
  return alert("Ad 3 herfden asagi olmamalidir")
}

if(newAge > 65 || newAge < 18){
  return alert("Yas araligini yanlis daxil etmisiniz")
}

let employees = new Employee (newName,newAge,newPosition,newExperience,newSkills,newDate)
employesData.push(employees)
showTable();


})

function Employee(newName,newAge,newPosition,newExperience,newSkills,newDate) {
this.fullName = newName;
this.age = newAge;
this.position = newPosition;
this.experience = newExperience;
this.skills = newSkills;
this.date = newDate;

}


function showTable(){
tableBody.innerHTML = "";
employesData.forEach((e) => {
  tableBody.innerHTML += `      <tr>
        <th>${e.fullName}</th>
        <th>${e.age}</th>
        <th>${e.position}</th>
        <th>${e.experience}</th>
        <th>${e.skills}</th>
        <th>${e.date}</th>
      </tr>`
})

}










