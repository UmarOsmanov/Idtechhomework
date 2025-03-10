






let redLight = document.querySelector(".red");
let yellowLight = document.querySelector(".yellow");
let greenLight = document.querySelector(".green");

function changeLights() {
  redLight.style.backgroundColor = "red";
  yellowLight.style.backgroundColor = "#555";
  greenLight.style.backgroundColor = "#555";

  setTimeout(() => {
    redLight.style.backgroundColor = "#555";
    yellowLight.style.backgroundColor = "yellow";

    setTimeout(() => {
      yellowLight.style.backgroundColor = "#555";
      greenLight.style.backgroundColor = "green";

      setTimeout(() => {
        greenLight.style.backgroundColor = "#555";
        changeLights();
      }, 3000);
    }, 1000);
  }, 3000);
}

changeLights();