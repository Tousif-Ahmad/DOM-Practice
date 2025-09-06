// approach 
let h1 = document.querySelector("h1");
window.addEventListener("keydown", function(e){
    // console.log(e.key);
    if(e.key === " "){
        h1.textContent = "SPC";
    }
    else{
        h1.textContent = e.key;
    }
    

})