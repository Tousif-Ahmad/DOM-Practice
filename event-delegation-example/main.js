let ul = document.querySelector("ul");
ul.addEventListener("click", function(e){
    // alert("clicked")
    // console.log(e.target);
    // e.target.style.textDecoration = "line-through";
    e.target.classList.toggle("lt")
})


// event delegation => a smart way of using bubbling (attach one listener to parent, handle all children).