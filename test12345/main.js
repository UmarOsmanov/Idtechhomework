



let redLight = document.querySelector(".red");
let yellowLight = document.querySelector(".yellow");
let greenLight = document.querySelector(".green");




let redDuration = 3000;
let yellowDuration = 1000;
let greenDuration = 3000;






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
      }, greenDuration);
    }, yellowDuration);
  }, redDuration);
}

changeLights();
