let menubar = document.getElementById("menubar");
let navlist = document.getElementById("navlist");

menubar.addEventListener("click", ()=>{
    navlist.classList.toggle("show");
});