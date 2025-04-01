let signupForm = document.querySelector("#signupForm");
const emailRegex = /^\S+@\S+\.\S+$/;

signupForm.addEventListener("submit", (event)=>{

    event.preventDefault();

    const formData = new FormData(event.target);
    let email = formData.get("email");
    let password = formData.get("password");

    const loginStr = localStorage.getItem("login");

    if(!loginStr) {
        alert("Sign up olun");

        return;
    }

    const login = JSON.parse(loginStr);

    if(email  !== login.email || password !== login.password){
        alert("email ve ya password uygun deyil");

        return;
    }



    location.href = "/trending.html";

})