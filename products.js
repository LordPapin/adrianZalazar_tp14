
let products = [
    "Lavadora",
    "Refrigerador",
    "Microondas",
    "Lavarropas",
    "Secadora",
    "Horno"
];
  

console.log("Accediendo a diferentes elementos del array:");
console.log(products[0]); // Lavadora
console.log(products[2]); // Microondas
console.log(products[5]); // Horno
  

let firstElement = products.shift();
products.push(firstElement);
console.log("Array después de extraer y agregar el primer elemento:");
console.log(products);
  

products.push("Aire acondicionado", "Cafetera");
console.log("Array después de agregar dos nuevos productos:");
console.log(products);
  

console.log("Cantidad de elementos en el array:");
console.log(products.length);
  

let searchedProduct = "Refrigerador";
if (products.includes(searchedProduct)) {
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
}
  

let productsString = products.join(" ");
console.log("Cadena de texto con todos los elementos del array:");
console.log(productsString);
  

console.log("Cantidad de elementos en la cadena de texto:");
console.log(productsString.split(" ").length);
  

productsString = productsString.replace("Lavadora", "Lavarropas automático");
console.log("Cadena de texto después de cambiar el nombre de un producto:");
console.log(productsString);
  

let newProductsArray = productsString.split(" ");
console.log("Nuevo array generado a partir de la cadena de texto:");
console.log(newProductsArray);
  