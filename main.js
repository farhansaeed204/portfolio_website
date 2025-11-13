
// navbar toggle functionality
let menubar = document.getElementById("menubar");
let navlist = document.getElementById("navlist");

menubar.addEventListener("click", ()=>{
    navlist.classList.toggle("show");
});

// add auto type functioanlity
let word = document.getElementById("auto-type")
let typed = new Typed("#auto-type",{
    strings: ["M.FARHAN", "A PASSIONATE DEVELOPER"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


