


// let btn = document.querySelector(".btn");


// btn.addEventListener("click", ()=>{
//     alert("YOU CLICK ME");


// let pElem = document.createElement("p");
// pElem.textContent = "this is paragraph";
// document.body.appendChild(pElem);


// })




function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

const nums = [2,11,2,3,7];
const target = 9;
console.log(twoSum(nums, target));  
