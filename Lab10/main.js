


// let products = document.querySelector(".products")


// document.getElementById("allProduct").addEventListener("click", ()=> getProducts());
// document.getElementById("electronics").addEventListener("click", ()=> getProducts("electronics"));
// document.getElementById("jewelery").addEventListener("click", ()=> getProducts("jewelery"));
// document.getElementById("menClothing").addEventListener("click", ()=> getProducts("men's clothing"));
// document.getElementById("womenClothing").addEventListener("click", ()=> getProducts("women's clothing"));




// async function getProducts(category = ""){
//    let url = "https://fakestoreapi.com/products";
//    if(category){
//     url += `/category/${category}`;
//    }
// }


// const response = await fetch(url).then((res)=> res).then((data)=>data.json());

// products.innerHTML = "";

// response.forEach(product => {
//     const productItem = document.createElement("div");
//     productItem.classList.add("product");
//     productItem.innerHTML = `
//                 <img src="${product.img}" alt="${product.title}">
//                 <h3>${product.title}</h3>
//                 <p class="price">${product.price}</p>
//     `;
//     products.appendChild(productItem);
// });
// getProducts();




// HTML'deki ürünleri göstereceğimiz alanı seçiyoruz
let products = document.querySelector(".products");

// Tüm ürünleri getirecek butona tıklama olayı ekliyoruz
document.getElementById("allProduct").addEventListener("click", () => getProducts());

// Elektronik kategorisi için tıklama olayı
document.getElementById("electronics").addEventListener("click", () => getProducts("electronics"));

// Takı kategorisi için tıklama olayı (Kategori ismi düzeltildi)
document.getElementById("jewelery").addEventListener("click", () => getProducts("jewelery"));

// Erkek giyim kategorisi için tıklama olayı
document.getElementById("menClothing").addEventListener("click", () => getProducts("men's clothing"));

// Kadın giyim kategorisi için tıklama olayı
document.getElementById("womenClothing").addEventListener("click", () => getProducts("women's clothing"));

// Ürünleri çekecek olan asenkron fonksiyon
async function getProducts(category = "") {
    // Başlangıçta ürünlerin alınacağı URL'yi belirliyoruz
    let url = "https://fakestoreapi.com/products";
    
    // Eğer bir kategori varsa, URL'yi o kategoriye göre güncelliyoruz
    if (category) {
        url += `/category/${category}`;
    }

    // Fetch fonksiyonu ile ürünleri alıyoruz
    fetch(url)  // URL'yi fetch ile çağırıyoruz
        .then((res) => res.json())  // Gelen cevabı JSON formatına dönüştürüyoruz
        .then((data) => {
            // Ürünler geldikten sonra, sayfadaki ürünler kısmını temizliyoruz
            products.innerHTML = "";

            // Her bir ürün için döngü başlatıyoruz
            data.forEach(product => {
                // Yeni bir div elementi oluşturuyoruz
                const productItem = document.createElement("div");
                productItem.classList.add("product");  // Bu div'e 'product' sınıfını ekliyoruz

                // Ürünün içeriğini HTML formatında ekliyoruz
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">  <!-- Ürünün resmini ekliyoruz -->
                    <h3>${product.title}</h3>  <!-- Ürünün başlığını ekliyoruz -->
                    <p class="price">${product.price} $ </p>  <!-- Ürünün fiyatını ekliyoruz -->
                `;
                
                // Bu ürünü sayfada uygun alana ekliyoruz
                products.appendChild(productItem);
            });
        })
        .catch((error) => {
            // Eğer fetch sırasında bir hata oluşursa, bu hata konsola yazdırılır
            console.error("Ürünler çekilirken bir hata oluştu:", error);


            
        });
}

// Sayfa yüklendiğinde, default olarak tüm ürünler getirilsin
getProducts();  // Bu fonksiyon sayfa açıldığında tüm ürünleri gösterir





// let products = document.querySelector(".products");

// document.getElementById("allProduct").addEventListener("click", () => getProducts());
// document.getElementById("electronics").addEventListener("click", () => getProducts("electronics"));
// document.getElementById("jewelry").addEventListener("click", () => getProducts("jewelry")); // Yazım düzeltildi
// document.getElementById("menClothing").addEventListener("click", () => getProducts("men's clothing"));
// document.getElementById("womenClothing").addEventListener("click", () => getProducts("women's clothing"));

// async function getProducts(category = "") {
//     let url = "https://fakestoreapi.com/products";
//     if (category) {
//         url += `/category/${category}`;
//     }

//     fetch(url)  // fetch çağrısı
//         .then((res) => res.json())  // JSON'a çevirme
//         .then((data) => {
//             products.innerHTML = "";  // Önceden yüklenmiş ürünleri sıfırlıyoruz

//             data.forEach(product => {
//                 const productItem = document.createElement("div");
//                 productItem.classList.add("product");
//                 productItem.innerHTML = `
//                     <img src="${product.image}" alt="${product.title}"> <!-- Resim bilgisi düzeltildi -->
//                     <h3>${product.title}</h3>
//                     <p class="price">${product.price} $</p>
//                 `;
//                 products.appendChild(productItem);  // Yeni ürünü sayfaya ekliyoruz
//             });
//         })
//         .catch((error) => {
//             console.error("Ürünler çekilirken bir hata oluştu:", error);  // Hata mesajı
//         });
// }

// getProducts();  // Sayfa yüklendiğinde tüm ürünleri getiriyoruz






// let products = document.querySelector(".products");

// document.getElementById("allProduct").addEventListener("click", () => getProducts());
// document.getElementById("electronics").addEventListener("click", () => getProducts("electronics"));
// document.getElementById("jewelry").addEventListener("click", () => getProducts("jewelry")); // Buradaki yazımı düzelttim
// document.getElementById("menClothing").addEventListener("click", () => getProducts("men's clothing"));
// document.getElementById("womenClothing").addEventListener("click", () => getProducts("women's clothing"));

// async function getProducts(category = "") {
//     let url = "https://fakestoreapi.com/products";
//     if (category) {
//         url += `/category/${category}`;
//     }

//     try {
//         const response = await fetch(url); // Async fonksiyon içinde await kullanıldı
//         const data = await response.json(); // Veriyi JSON'a çeviriyoruz

//         products.innerHTML = ""; // Ürünleri sıfırlıyoruz

//         data.forEach(product => {
//             const productItem = document.createElement("div");
//             productItem.classList.add("product");
//             productItem.innerHTML = `
//                 <img src="${product.image}" alt="${product.title}"> <!-- image key düzeltildi -->
//                 <h3>${product.title}</h3>
//                 <p class="price">${product.price} $</p>
//             `;
//             products.appendChild(productItem); // Ürünleri sayfaya ekliyoruz
//         });
//     } catch (error) {
//         console.error("Ürünler çekilirken bir hata oluştu:", error); // Hata mesajı konsola yazdırılıyor
//     }
// }

// getProducts(); // Sayfa yüklendiğinde tüm ürünleri getiriyoruz
