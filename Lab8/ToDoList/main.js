

// let color = document.querySelector(".color")
// color.addEventListener("click", function() {

// document.body.classList.toggle("dark")


// })












// let count = 0;

// const counterElement = document.getElementById('counter');

// document.getElementById('artma').addEventListener('click', () => {
//     count++;
//     counterElement.textContent = count;
// });

// document.getElementById('azalma').addEventListener('click', () => {
//     count--;
//     counterElement.textContent = count;
// });











// let btn= document.querySelector(".btn");
// let input = document.querySelector("input")
// btn.addEventListener("click", (e) => {
//     e.preventDefault()
//          if(input.getAttribute("type") == "password"){
//             input.setAttribute("type","text")
//             btn.innerHTML = "Bagla"
//          } else {
//             input.setAttribute("type", "password");
//             btn.innerHTML = "Goster"
//          }
// })













let buttonPlus = document.querySelector(".plusBtn");
let inputValue = document.querySelector(".inputText");
let newTab = document.querySelector(".newTab");
let circleBox = document.querySelector(".circleBox");
let date = document.querySelector(".date");
let time = document.querySelector(".time");


let myToDo = [];

date.innerHTML = new Date().toLocaleDateString("az");



buttonPlus.addEventListener("click", ()=>{
    newTab.innerHTML = "";
    myToDo.push(inputValue.value);
    inputValue.value = "";
    toDoText();

   
    circleBox.innerHTML = `${myToDo.length}`;

})

function toDoText(){
    newTab.innerHTML = ""
    myToDo.map((item) => {
    newTab.innerHTML +=  ` <li class="textList">${item}<button data-value="${item}" class="cancelBtn">x</button></li> `
})
deleteBtnListenres()
}

function deleteBtnListenres(){
    const deleteBtns = document.querySelectorAll(".cancelBtn");

    deleteBtns.forEach((el) => {
        el.addEventListener("click", (e) => {
            let val = e.target.dataset.value;

            console.log(val)
            
            myToDo = myToDo.filter((value ) =>  value !== val );

            console.log(myToDo)


            toDoText();

            circleBox.innerHTML = `${myToDo.length}`;
        })
    })

}