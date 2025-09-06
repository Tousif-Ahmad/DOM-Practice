// EVENT BUBBLING 
// let a = document.querySelector(".a")
// let b = document.querySelector(".b")
// let c = document.querySelector(".c")
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log("Button Clicked");
// })
// c.addEventListener("click", function(){
//     console.log("c Clicked");
// })
// a.addEventListener("click", function(){
//     console.log("a Clicked");
// })
// b.addEventListener("click", function(){
//     console.log("b Clicked");
// })

// EVENT CAPTURING 
let a = document.querySelector(".a")
let b = document.querySelector(".b")
let c = document.querySelector(".c")
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("Button Clicked");
})
c.addEventListener("click", function(){
    console.log("c Clicked");
})
b.addEventListener("click", function(){
    console.log("b Clicked");
})
a.addEventListener("click", function(){
    console.log("a Clicked");
}, true)