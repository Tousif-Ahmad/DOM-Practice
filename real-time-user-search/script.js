let users = [
    {
        name : "Bilal",
        pic : "https://i.pinimg.com/736x/67/d4/73/67d473ac5acd3069d909813c79d55942.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga",
    },
    {
        name : "Asad",
        pic : "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!"
    },
    {
        name : "Sami",
        pic : "https://i.pinimg.com/736x/ca/99/d7/ca99d7d02d5a892c0388e26ddbc1659c.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!",
    },
    {
        name : "Faizan",
        pic : "https://i.pinimg.com/736x/52/43/2b/52432bd24fcb9087ce0c392320f067a5.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!",
    },
    {
        name : "Hamad",
        pic : "https://i.pinimg.com/1200x/36/24/85/362485cff39036464d0e54b4bdd3a5b8.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!",
    },
   
]


function showUsers(arr){
    arr.forEach(function(user){
        // create a card 
        let card = document.createElement("div");
        card.classList.add("card");

        // create an image 
        let img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // create a content div 
        let content = document.createElement("div");
        content.classList.add("content");

        // create an h3
        let h3 = document.createElement("h3");
        h3.textContent = user.name;

        // create a paragraph
        let p = document.createElement("p");
        p.textContent = user.bio;

        // append element 
        content.appendChild(h3);
        content.appendChild(p);
        card.append(img);
        card.append(content);
        document.querySelector(".cards").append(card);

    })
}
showUsers(users)

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
    let newUsers = users.filter(function(user){
        return user.name.toLowerCase().includes(inp.value.toLowerCase());
    })
    document.querySelector(".cards").innerHTML = "";
    if (newUsers.length === 0){
        let msg = document.createElement("p");
        msg.textContent = "No users found";
        msg.style.color = "white";
        msg.style.fontSize = "20px";

        document.querySelector(".cards").append(msg);
    }
    else{
        showUsers(newUsers)
    }
})