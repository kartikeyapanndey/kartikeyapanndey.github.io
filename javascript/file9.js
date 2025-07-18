//arrays
/*
const score=[2,1,7,5,3];
console.log(score)
console.log(score[0])
score.push(9)
console.log(score)
console.log(score.length)
const newscore=[...score,9]
console.log(newscore)
const cart={
    1:5,
    5:3,
};
const newcart=({...cart,2:9})
console.log(newcart)//spread operator

*/
let cart={};
const products=[
    {id: 1,name:"product1",price: 25},
    {id: 2,name:"prodcut2",price:50},
    {id: 3,name:"product3",price : 75},
];

//const newProducts=[...products,{id:4,name:"product 4",price:56}]
function addtocart(id)
{
cart={...cart,[id]:1};
}
addtocart(1)
addtocart(3)
console.log(cart)//how to increase /decrease quantity
