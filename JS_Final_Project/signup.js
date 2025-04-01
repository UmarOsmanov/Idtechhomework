let signupForm = document.querySelector("#signupForm");
const emailRegex = /^\S+@\S+\.\S+$/;



signupForm.addEventListener("submit", (event)=>{

    event.preventDefault();

    const formData = new FormData(event.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let repeatPassword = formData.get("repeatPassword");

    if (!email || !emailRegex.test(email)){
        alert("Email yoxdur!")
    }

    if (password.length < 8 || password.length>36){
        alert("Sifre sayi yanlisdir")
    }

    if(repeatPassword !== password){
        alert("Tekrar olunan sifre yanlisdir")
    }


    localStorage.setItem("login", JSON.stringify({
        email,password
    }));

    location.href = "/main.html";

})




