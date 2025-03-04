let products = document.querySelector(".products");

document
    .getElementById("allProduct")
    .addEventListener("click", () => getProducts());
document
    .getElementById("electronics")
    .addEventListener("click", () => getProducts("electronics"));
document
    .getElementById("jewelery")
    .addEventListener("click", () => getProducts("jewelery"));
document
    .getElementById("menClothing")
    .addEventListener("click", () => getProducts("men's clothing"));
document
    .getElementById("womenClothing")
    .addEventListener("click", () => getProducts("women's clothing"));






async function getProducts(category = "") {
    let url = "https://fakestoreapi.com/products";
    if (category) {
        url += `/category/${category}`;
    }

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            products.innerHTML = "";
            data.forEach((product) => {
                const productItem = document.createElement("div");
                productItem.classList.add("product");
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.title}"> 
                    <h3>${product.title}</h3>
                    <p class="price">${product.price} $ </p> 
                `;

                products.appendChild(productItem);
            });
        })
        .catch((error) => {
            console.error("Bir xeta bas verdi:", error);
        });
}

getProducts();







let searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    getProducts("", searchTerm);
});








