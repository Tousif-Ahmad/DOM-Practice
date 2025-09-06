let fileInp = document.querySelector("#fileInp")
let btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    fileInp.click();
})
fileInp.addEventListener("change", function(e){
    // console.log(e.target.value);
    // console.log(e.target.files[0].name);
    const files = e.target.files[0];
    if(files){
        btn.textContent = files.name;
    }
})