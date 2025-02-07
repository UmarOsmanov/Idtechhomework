


let student1 = {

f_name: "Ferid",
age: 22,
poition: "Frontend developer"

};

//Function constructor

function Student(name,age,position){

this.f_name = name;
this.age = age;
this.position = position;

}



const std1 = new Student("Ferid",22,"Front");
const std2 = new Student("Anar",22,"Front");
const std3 = new Student("Tural",22,"Front");


let formElement = document.querySelector("form");
let student = [];


function createNewStudent(e){ 

e.preventDefault();

let student_name = document.getElementById("studentName").value;
let student_age = document.getElementById("studentAge").value;
let student_position = document.getElementById("position").value;


let newStudent = new Student(student_name, student_age, student_position);
student.push(newStudent);
console.log({student});

}

formElement.addEventListener("submit", createNewStudent);

