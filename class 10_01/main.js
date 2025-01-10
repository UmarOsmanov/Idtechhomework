




let header_main=document.querySelector(".header")

let my_header = document.createElement("h2")
header_main.appendChild(my_header)
my_header.innerText="LOGO"
my_header.style.color="red"


let menu_bar = document.createElement("ul")
header_main.appendChild(my_header)
let menu_list1 = document.createElement("li")
let menu_list2 = document.createElement("li")
let menu_list3 = document.createElement("li")
menu_bar.appendChild(menu_list1)
menu_bar.appendChild(menu_list2)
menu_bar.appendChild(menu_list3)
menu_list1.innerText = "Home"
menu_list2.innerText = "About"
menu_list3.innerText = "Services"
header_main.appendChild(menu_bar)

header_main.style.display="flex"
header_main.style.justifyContent="space-between"

menu_bar.style.display="flex"
menu_bar.style.justifyContent="space-between"
menu_bar.style.gap="50px"
menu_bar.style.listStyle="none"

