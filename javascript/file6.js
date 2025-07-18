// arrow function
/*
greet();  //hoisting
function greet()
{
    console.log("hello");
}



//hoisting
x=10
console.log(x)
var x

x=10
console.log(x)
let x

const greet=10
console.log(greet)

*/
// hoisting does not work with arrow fucntion
//const greet=()=>{
  //  console.log("Hello")};
   // greet()

   const add=()=>{
    console.log(a+b)
   }
   add(4,5)

   const add=(a,b)=>{
    return a+b;
   }
   const result=add(4,5)
   console.log(result)