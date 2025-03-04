let api_key = "7a7df11b63544ffd809aea13f35f4dc9";

let newsContainer = document.getElementById("newsContainer");
let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");
let categorySelect = document.getElementById("categorySelect");

searchButton.addEventListener("click", function () {
  fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${api_key}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
});

















































// Xəbərləri API-dan alır və ekrana göstərir
// async function fetchNews(query = "", category = "general") {
//     try {
//         const response = await fetch(https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${query}&apiKey=${API_KEY});
//         const data = await response.json();

//         newsContainer.innerHTML = "";

//         if (data.articles.length === 0) {
//             newsContainer.innerHTML = "<p>Heç bir xəbər tapılmadı.</p>";
//             return;
//         }

//         data.articles.forEach(article => {
//             const newsItem = document.createElement("div");
//             newsItem.classList.add("news-item");

//             newsItem.innerHTML = `
//                 <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="Xəbər şəkli">
//                 <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
//                 <p>${article.description || "Təsvir mövcud deyil."}</p>
//             `;

//             newsContainer.appendChild(newsItem);
//         });

//     } catch (error) {
//         console.error("Xəbərləri gətirərkən xəta baş verdi:", error);
//     }
// }
