

let addButton = document.getElementById("addButton");



addButton.addEventListener("click", () => {
    addButton.textContent = "Adding to Cart...";
    addButton.disabled = true;
    addButton.style.backgroundColor = "red";
    addButton.style.color = "white";



    setTimeout(() => {
        addButton.textContent = "Added to Cart !";
        addButton.style.backgroundColor = "green";
        addButton.style.color = "white";

    }, 3000);




    setTimeout(() => {
        addButton.textContent = "Add to Cart";
        addButton.disabled = false;
        addButton.style.backgroundColor = "rgb(224, 224, 224)";
        addButton.style.color = "black";
    }, 5000);
});