let sel = document.querySelector("select");
let heading = document.querySelector("#heading");
sel.addEventListener("change", function(dets){
    // console.log(dets.target.value);
    heading.textContent = `You selected ${dets.target.value}`
})