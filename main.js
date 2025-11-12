// navbar toggle functionality
let menubar = document.getElementById("menubar");
let navlist = document.getElementById("navlist");

menubar.addEventListener("click", ()=>{
    navlist.classList.toggle("show");
});


// form validation functionality
let form = document.getElementById("form");

function validateEmail(email){
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener("submit", (e)=>{
    
    let Name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();


    if(Name == ""){
        e.preventDefault();
        alert("Name field is required");
        return
    }
    if(email == ""){
        e.preventDefault();
        alert("Email field is required");
        return
    }
    if(!validateEmail(email)){
        e.preventDefault();
        alert("Please enter a valid email address");
        return
    }
    if(message == ""){
        e.preventDefault();
        alert("Message field is empty please write something");
        return
    }
});

