//  const data = {
//   "products": [
//     {
//       "id": 1,
//       "title": "Essence Mascara Lash Princess",
//       "description": "A popular mascara known for its volumizing and lengthening effects.",
//       "category": "beauty",
//       "price": 9.99,
//       "rating": 4.94,
//       "stock": 5,
//       "brand": "Essence",
//       "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
//     },
//     {
//       "id": 2,
//       "title": "Eyeshadow Palette with Mirror",
//       "description": "A versatile range of eyeshadow shades for stunning looks.",
//       "category": "beauty",
//       "price": 19.99,
//       "rating": 3.28,
//       "stock": 44,
//       "brand": "Glamour Beauty",
//       "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
//     },
//     {
//       "id": 3,
//       "title": "Calvin Klein CK One",
//       "description": "A classic unisex fragrance with a fresh and clean scent.",
//       "category": "fragrances",
//       "price": 49.99,
//       "rating": 4.85,
//       "stock": 17,
//       "brand": "Calvin Klein",
//       "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
//     }
//   ]
// }


// console.log(typeof data)

// //its an object 

// data.products.forEach(product => {
//   console.log(product.title)
// });


const res = await fetch('https://dummyjson.com/products')

const json = await res.json();

const data = json.products

data.forEach(product => {
  console.log(product.title, product.id,product.price)
});