const users = [
  {
    name: "Lelah Nichols",
    location: "Troy, MI",
    tags: ["clothes", "stem"],
    imageUrl: "photo/Ellipse 1.png",
  },
  {
    name: "Jesus Weiss",
    location: "Fort Worth, TX",
    tags: ["headset", "gadget", "speed", "winter"],
    imageUrl: "photo/Ellipse 2.png",
  },
  {
    name: "Annie Rice",
    location: "Austin, TX",
    tags: ["road", "mountain", "trip", "earth", "nature"],
    imageUrl: "photo/Ellipse 3.png",
  },
  {
    name: "Robert Brower",
    location: "Cincinnati, OH",
    tags: ["Maintenance", "gears", "frames", "repair"],
    imageUrl: "photo/Ellipse 4.png",
  },
  {
    name: "Amy Campbell",
    location: "Warrior, AL",
    tags: ["music", "disks"],
    imageUrl: "photo/Ellipse 5.png",
  },
  {
    name: "Anthony S.Morin",
    location: "Lyndhurst, NJ",
    tags: ["vintage", "electric"],
    imageUrl: "photo/Ellipse 6.png",
  },
];

let user = document.querySelector(".users");
let input = document.querySelector(".user_info_search_input");

function showUsers(usersList) {
  user.innerHTML = "";
  usersList.forEach((u) => {
    user.innerHTML += `
         <div class="user_card">
              <div class="user_card_image">
                <img class="image_profile"
                  src="${u.imageUrl}">
              </div>
              <div class="user_card_details">
                <h2>${u.name}</h2>
                <p>${u.location}</p>
                <div class="user_card_tags">
                 ${u.tags.map((tag) => `<span>${tag}</span>`).join(" ")}
                </div>
              </div>
            </div>
    `;
  });
}

showUsers(users);

input.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filteredUserList = users.filter(
    (userP) =>
      userP.name.toLowerCase().includes(value) ||
      userP.location.toLowerCase().includes(value) ||
      userP.tags.some((tag) => tag.toLowerCase().includes(value))
  );

  showUsers(filteredUserList);
});
