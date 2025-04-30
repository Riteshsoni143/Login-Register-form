function hideCard() {
    let card = document.getElementById("myElement");
    card.style.display = "none";
}


function showLoginCard() {
    let card = document.getElementById("myElement");
    card.style.display = "flex";
    card.style.height = "310px";

    let loginCard = document.getElementById("login_card");
    loginCard.style.transform = "translateX(0px)"

    let registerCard = document.getElementById("register_card");
    registerCard.style.transform = "translateX(400px)";
}


function showRegisterCard() {
    let card = document.getElementById("myElement");
    card.style.height = "340px";

    let registerCard = document.getElementById("register_card");
    registerCard.style.transform = "translateX(0px)";

    let loginCard = document.getElementById("login_card");
    loginCard.style.transform = "translateX(-400px)"
}


let home= document.getElementById("home");
let about= document.getElementById("about");
let contact= document.getElementById("contact");
let headerLoginBtn= document.getElementById("header-login-btn");

function showHome() {
    home.style.display= "flex";
    headerLoginBtn.style.display="flex";
    about.style.display="none";
    contact.style.display="none";
}

function showAbout() {
    about.style.display= "flex";
    home.style.display="none";
    contact.style.display="none";
    headerLoginBtn.style.display="none";
}

function showContactUs() {
    contact.style.display= "flex";
    home.style.display="none";
    about.style.display="none";
    headerLoginBtn.style.display="none";
}
