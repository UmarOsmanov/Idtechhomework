



let wishlist = [];

const wishlistContainerElement = document.getElementById(
  "wishlist-added-cards"
);

const cardsContainerElement = document.getElementById(
  "products-side-cards-container"
);

const favorites = [
  {
    id: 1,
    productName: "Women Portrait",
    price: "1.000$",
    image: "photo/1.jpg",
  },
  {
    id: 2,
    productName: "Panter",
    price: "500$",
    image: "photo/2.jpg",
  },
  {
    id: 3,
    productName: "Sea & Women",
    price: "3000$",
    image: "photo/3.jpg",
  },
  {
    id: 4,
    productName: "Forest Sunshine",
    price: "8.000$",
    image: "photo/4.jpg",
  },
  {
    id: 5,
    productName: "BirdArt",
    price: "80$",
    image: "photo/6.jpg",
  },
  {
    id: 6,
    productName: "Together",
    price: "9.000$",
    image: "photo/7.jpg",
  },
];

favorites.forEach((products) => {
  cardsContainerElement.innerHTML += `
        <div class="products-card" >
            <div class="products-image">
                <img src="${products.image}" alt="bitcoin">
            </div>
            <h3 class="products-title"> ${products.productName} <br>
              <span> Price: <span  style="color: rgb(255, 255, 255);">${products.price}</span></span>
            </h3>
            <button data-id="${products.id}" class="products-card-btn">
              Add
            </button>
        </div>
    `;
});

const productCardEvent = document.querySelectorAll(".products-card-btn");

productCardEvent.forEach((elements) => {
  elements.addEventListener("click", productCheck);
});

function productCheck(event) {
  const id = Number(event.target.dataset.id);

  const hasWishlistElement = wishlist.some(
    (wishlistElement) => wishlistElement.id === id
  );

  if (hasWishlistElement) {
    wishlist = wishlist.filter((wishlistElement) => wishlistElement.id !== id);
  } else {
    const product = favorites.find((favoriteItem) => favoriteItem.id === id);

    wishlist.push(product);
  }
  showWishlist();
}

function showWishlist() {
  wishlistContainerElement.innerHTML = "";

  wishlist.forEach((products) => {
    wishlistContainerElement.innerHTML += `
              <div class="products-card-second" >
                  <div class="products-image">
                      <img src="${products.image}" alt="bitcoin">
                  </div>
                  <h3 class="products-title"> ${products.productName} <br>
                    <span> Price: <span  style="color: rgb(3, 148, 34);">${products.price}</span></span>
                  </h3>
              </div>
          `;
  });
}
