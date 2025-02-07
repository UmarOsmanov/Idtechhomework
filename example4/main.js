   





let cart =[]

let brand = [
    {id: 1, name: "Apple"},
    {id: 2, name: "Samsung"},
    {id: 3, name: "Xiaomi"},
    {id: 4, name: "Huawei"},
];

function myId(id, arr=[]){
    let samsung = arr.find(a => a.id === id);
    cart.push(samsung)

}
myId(2, brand)
console.log(cart);





