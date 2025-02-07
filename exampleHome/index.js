let camera = [{
        marka: "Canon",
        avtofokus: "Var",
        suret: 5,
        meqapiksel: 24
    },
    {
        marka: "Nikon",
        avtofokus: "Yoxdur",
        suret: 3,
        meqapiksel: 16
    },
    {
        marka: "Sony",
        avtofokus: "Yoxdur",
        suret: 3,
        meqapiksel: 30
    },
    {
        marka: "Wizen",
        avtofokus: "Yoxdur",
        suret: 1,
        meqapiksel: 8
    },
];

function Brand(marka, avtofokus, suret, meqapiksel) {
    this.marka = marka;
    this.avtofokus = avtofokus;
    this.suret = suret;
    this.meqapiksel = meqapiksel;
}

let formElement = document.querySelector("form");
let newArr = [];

function addCamera(e) {
    e.preventDefault();
    let addMarka = document.getElementById("marka").value;
    let addFocus = document.getElementById("focus").value;
    let addSpeed = document.getElementById("suret").value;
    let addPixel = document.getElementById("pixel").value;
    let newBrand = new Brand(addMarka, addFocus, addSpeed, addPixel);
    newArr.push(newBrand);
}

formElement.addEventListener("submit", addCamera);