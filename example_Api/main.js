const obj = {
    userName: "Umar",
    hobbies: ["football","online games"],
};


let val = JSON.stringify(obj);
let parseVal = JSON.parse(val);
console.log(parseVal);



