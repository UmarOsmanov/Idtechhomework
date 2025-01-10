
// SUAL 2

// Bir funksiya yazirsiz sizde array qebul edir ve hemin arraydaki ilk 3 elementi silib geri qaytarirsiz.
// Example: myFunction([1,2,3,4,5,6]) ------------------ cavab qayidacaq [4,5,6]


function removeFirstThreeElements(arr) {
    return arr.splice(0, 3);
}


let myArray = [1, 2, 3, 4, 5, 6];
let removedElements = removeFirstThreeElements(myArray);

console.log(myArray); 

////////////////////////////////////////////////////////////////////////////////////////////















