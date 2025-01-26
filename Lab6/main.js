

let menubar = document.querySelector(".menubar")
let menu = document.querySelector(".menu")



menubar.addEventListener("click" , ()=>{
menu.classList.add("active")
})

let x = document.querySelector(".x")
x.addEventListener("click" , ()=>{
    menu.classList.remove("active")
    })

    let search = document.querySelector(".search")
    search.addEventListener("click" , ()=>{
        menu.classList.add("active")
        })

