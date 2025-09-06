let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    // img.setAttribute("src", "https://media.istockphoto.com/id/2203626708/photo/beautiful-young-hispanic-woman-portrait.jpg?s=1024x1024&w=is&k=20&c=WOMkd-jmx6rcuDdjop_js6besidZjzZl1hOl7x2DmWs=");
    img.src = inputs[3].value;

    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[1].value;
    let p = document.createElement("p");
    p.textContent = inputs[2].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);

    form.reset();
})
