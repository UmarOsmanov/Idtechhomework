// const obj = {
//     userName: "Umar",
//     hobbies: ["football","online games"],
// };

// let val = JSON.stringify(obj);
// let parseVal = JSON.parse(val);
// console.log(parseVal);

// let users = document.querySelector(".users");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     users.innerHTML = data.map(
//       (item) => `
//         <div class="userCard">
//         <p>${item.name}</p>
//         <p>${item.username}</p>
//         <p>${item.phone}</p>
//         <a>${item.website}</a>
//     </div>`
//     );
//   });

let users = document.querySelector(".users");
let oneAbout = document.querySelector(".oneAbout");










  
//Main
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     data.map(
//       (item) =>
//         (users.innerHTML += `

//         <div class="userCard">
//         <p>${item.name}</p>
//         <p>${item.username}</p>
//         <p>${item.phone}</p>
//         <a>${item.website}</a>
//     </div>`)
//     );
//   });

// let users = document.querySelector(".users");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     // Map ve join ile kartları düzgün şekilde birleştirin
//     users.innerHTML = data
//       .map(
//         (item) => `
//         <div class="userCard">
//           <p>${item.name}</p>
//           <p>${item.username}</p>
//           <p>${item.phone}</p>
//           <a href="http://${item.website}" target="_blank">${item.website}</a>
//         </div>`
//       )
//       .join(''); // Burada herhangi bir virgül eklenmez
//   });
