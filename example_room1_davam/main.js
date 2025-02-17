let formInput = document.querySelector(".formInput");
let resultTab = document.querySelector(".resultTab");

formInput.addEventListener("submit", (e)=>{
    e.preventDefault();
  const formData = new FormData(e.target);
  let day = formData.get("day");
  let month = formData.get("month");
  let year = formData.get("year");
  console.log(day,month,year);
  

  const birthDate = new Date(year,month,day);

  let today = new Date();
  let thisYear = today.getFullYear();
  
  let thisMonth = today.getMonth() + 1;
  let thisDay = today.getDate();

  console.log(thisYear,thisMonth,thisDay);
  
  

})

