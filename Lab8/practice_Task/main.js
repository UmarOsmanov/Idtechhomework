
const btn = document.querySelector("#btn");

btn.addEventListener("click" , () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Zəhmət olmasa, bütün xanalari doldurun!");
        return false;
    }
    return true; 
})
