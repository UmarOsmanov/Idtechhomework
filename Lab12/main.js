let api_key = "7a7df11b63544ffd809aea13f35f4dc9";

let newsContainer = document.getElementById("newsContainer");
let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");
let categorySelect = document.getElementById("categorySelect");

function createCard(data) {
  return `
  <div class="card">
     <div class="box">
               <img src="${data.urlToImage}" alt="">
               <h2 class="title">
                  <a href="${data.url}">${data.title}</a>
               </h2>
               <span>${data.description}</span>
            </div>
            </div>
  `;
}

searchButton.addEventListener("click", function () {
  const category = categorySelect.value;
  const searchTerm = searchInput.value;

  fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}&category=${category}&q=${searchTerm}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log({ data });
      newsContainer.innerHTML =
        data.articles?.map(createCard).join(" ") ??
        "<p>Heç bir xəbər tapılmadı.</p>";
    });
});
