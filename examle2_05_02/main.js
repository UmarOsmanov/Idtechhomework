    // let addButton = document.getElementById("addToDo")
    // let addText = document.getElementById("toDoContainer")
    // let inputText = document.getElementById("inputText")
    // let clearButton = document.getElementById("clearToDo")

    // addButton.addEventListener("click", function(){
    //     let paragraph = document.createElement("p");
    //     addText.appendChild(paragraph)
    //     paragraph.innerHTML = inputText.value
    //     inputText.value = ""

    //     clearButton.addEventListener("click", function(){
    //         paragraph.style.display = "none";
    //     })
    // })


    let ButtonAdd = document.getElementById("addToDo")
    let Text = document.getElementById("inputText")
    let NewBox = document.getElementById("toDoContainer")
    let ClearButton = document.getElementById("clearToDo")


    ButtonAdd.addEventListener("click", function(){
      let paragraph = document.createElement("p")
      NewBox.appendChild(paragraph)
      paragraph.innerText = inputText.value
      inputText.value = ""

    
    ClearButton.addEventListener("click", function(){
        paragraph.style.display = "none";
    })


    })