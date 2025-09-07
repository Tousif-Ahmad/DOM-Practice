// overall progress 3 second me 100% tak ponchana chahiye
let progressFill = document.querySelector("#progressFill");
let progressPercent = document.querySelector("#progressPercent");
let h2 = document.querySelector("h2");
let count = 0;
let intv = setInterval(() => {
    if (count <= 99){
        count++;
        progressFill.style.width = `${count}%`;
        progressPercent.textContent = `${count}%`
        
    }
    else{
        h2.textContent = "Downloaded";
        clearInterval(intv)
    }
}, 30);
