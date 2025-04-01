const filmBoxMain = document.querySelector(".filmbox_main");
const searchBar = document.querySelector(".searchbar");

let filter = "";

function save(id) {
    const favorites = localStorage.getItem("favorites");
    const favoritesArr = !favorites ? [] : JSON.parse(favorites);

    if (favoritesArr.includes(id)) {
        const filteredFavortes = favoritesArr.filter((favoriteId) => favoriteId !== id);

        localStorage.setItem("favorites", JSON.stringify(filteredFavortes));

        renderAllFilmsWithFilter()


        return;
    }

    favoritesArr.push(id);

    localStorage.setItem("favorites", JSON.stringify(favoritesArr));

    renderAllFilmsWithFilter()
}

function checkIsFavorite(id) {
    const favorites = localStorage.getItem("favorites");
    const favoritesArr = !favorites ? [] : JSON.parse(favorites);

    return favoritesArr.some((favoriteId) => favoriteId === id)
}

function getFavorites(){
    const favorites = localStorage.getItem("favorites");
    const favoritesArr = !favorites ? [] : JSON.parse(favorites);

    return mockData.filter((film) => favoritesArr.includes(film.id) )
}

function createFilmCard(data) {
    const isFavorite = checkIsFavorite(data.id)

    return `
        <div class="filmbox">
            <div class="save_icon" style="cursor: pointer;" onClick="save(${data.id})">
                <img src="${isFavorite ? "photo/Group 27 (1).png" : "photo/Group 27.png"}" />
            </div>
            <img
              class="filmbox_img"
              src="${data.image}"
              alt=""
            />
            <div class="film_about">
              <div class="film_about_title">
                <span>${data.year}</span><img src="photo/Oval (1).png" alt="" /><img
                  src="photo/Shape 2.png"
                  alt=""
                />
                <span>${data.type}</span><img src="photo/Oval (1).png" alt="" />
                <span>${data.rating}</span>
              </div>
              <h3>${data.title}</h3>
            </div>
          </div>
    `;
}

function renderAllFilmsWithFilter() {
    const favorites = getFavorites();

    const filteredFilms = favorites.filter((film) =>
        film.title.toLowerCase().includes(filter.toLowerCase())
    );

    filmBoxMain.innerHTML = filteredFilms.map(createFilmCard).join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
    const favorites = getFavorites();

    filmBoxMain.innerHTML = favorites.map(createFilmCard).join(" ");
});

searchBar.addEventListener("input", (e) => {
    e.preventDefault();
    filter = e.target.value;

    renderAllFilmsWithFilter()
});