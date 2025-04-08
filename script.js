function hideCard() {
    let card = document.getElementById("myElement");
    card.style.display = "none";
}


function showLoginCard() {
    let card = document.getElementById("myElement");
    card.style.display = "block";

    let loginCard = document.getElementById("login_card");
    loginCard.style.transform = "translateX(0px)"

    let registerCard = document.getElementById("register_card");
    registerCard.style.transform = "translateX(400px)";

    card.style.height = "270px";
}


function showRegisterCard() {
    let card = document.getElementById("myElement");
    card.style.display = "block";

    let registerCard = document.getElementById("register_card");
    registerCard.style.transform = "translateX(0px)";

    let loginCard = document.getElementById("login_card");
    loginCard.style.transform = "translateX(-400px)"

    card.style.height = "325px";
}
