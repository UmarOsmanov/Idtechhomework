let addData = document.querySelector(".addData");
let editData = document.querySelector(".editData");
let deleteData = document.querySelector(".deleteData");




addData.addEventListener("click", addEvent) {
    fetch("https://dummyjson.com/recipes")
        .then(res => res.json())
        .then(data => console.log(data))

};



editData.addEventListener("click", add Event) {
    fetch("https://dummyjson.com/recipes")
     


};