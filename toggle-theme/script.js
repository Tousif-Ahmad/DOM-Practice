function getDarkOrLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}
getDarkOrLight();

if (localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
}
else{
    getDarkOrLight();
}
let btn = document.querySelector("#toggleTheme");
btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")){
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    localStorage.setItem("theme", "light")
  }
  else{
    document.body.classList.remove("light");
    document.body.classList.add("dark")
    localStorage.setItem("theme", "dark");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    getDarkOrLight();
  });
