





let mainBox = document.querySelector(".mainBox")
let productMain = document.querySelector(".productMain")



fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.map(
      (item) =>
        (mainBox.innerHTML += `


        <div class="productMain">
         <div class="images" ><img src="${item.image}"></div>
            <div>${item.title}</div>
            <span>${item.category}</span>
            <p>${item.price}</p>
        </div>
    `)
    );
  });