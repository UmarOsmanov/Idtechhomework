let allData = document.getElementById("allData")
let editData = document.getElementById("editData")
let addData = document.getElementById("addData")
let deleteData = document.getElementById("deleteData")



let editDataValue = editData.getAttribute("data-id");
let deleteDataValue = deleteData.getAttribute("data-id");


//GET
allData.addEventListener("click", function(){
    fetch("https://dummyjson.com/recipes").then(res => res.json()).then(data => console.log(data));
})



/////////////////////////////////////////////////////////////////////////////////



//PUT(UPDATE)
editData.addEventListener("click", function(){
    fetch(`https://dummyjson.com/recipes/${editDataValue}`, {
    method: "PUT",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        id: editDataValue,
        ingredients: [
            "Heloo",
            "World",
            "This is new resept",
        ]
    })
    }).then(res => res.json()).then(data => console.log(data));
})




/////////////////////////////////////////////////////////////////////////





//POST
addData.addEventListener("click", function(){
    fetch(`https://dummyjson.com/recipes/add`, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        name: "Kellepacha",
        ingredients: [
            "Heloo",
            "World",
            "This is new resept",
        ]
    })
    }).then(res => res.json()).then(data => console.log(data));
})





/////////////////////////////////////////////////////////////////////






//DELETE
deleteData.addEventListener("click", () => {
    fetch(`https:dummyjson.com/recipes/${deleteDataValue}`, {
        method: 'DELETE'
    })
    .then(res => res.json()).then(data => console.log(data));

});
