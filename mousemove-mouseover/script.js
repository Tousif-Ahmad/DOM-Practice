// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover", function(){
//     abcd.style.backgroundColor = "yellow";
// })
// abcd.addEventListener("mouseout", function(){
//     abcd.style.backgroundColor = "red";
// })

//<-------------------------------  mousemove --------------------------->
let abcd = document.querySelector("#abcd");
window.addEventListener("mousemove", function(dets){
    // console.dir(dets.clientX, dets.clientY);
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px"
})