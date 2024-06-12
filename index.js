let homePointsEl = document.getElementById("home-points");
let guestPointsEl = document.getElementById("guest-points");
let homeCount = 0;
let guestCount = 0;

function plusHomeOne(){
    homeCount += 1;
    homePointsEl.textContent = homeCount;
}

function plusHomeTwo(){
    homeCount += 2;
    homePointsEl.textContent = homeCount;
}

function plusHomeThree(){
    homeCount += 3;
    homePointsEl.textContent = homeCount;
}

function plusGuestOne(){
    guestCount += 1;
    guestPointsEl.textContent = guestCount;
}

function plusGuestTwo(){
    guestCount += 2;
    guestPointsEl.textContent = guestCount;
}

function plusGuestThree(){
    guestCount += 3;
    guestPointsEl.textContent = guestCount;
}