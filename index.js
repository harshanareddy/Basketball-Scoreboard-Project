let homePointsEl = document.getElementById("home-points");
let guestPointsEl = document.getElementById("guest-points");
let homeCount = 0;
let guestCount = 0;

function plusHomeOne(){
    homeCount += 1;
    homePointsEl.textContent = homeCount;
    checkLead();
}

function plusHomeTwo(){
    homeCount += 2;
    homePointsEl.textContent = homeCount;
    checkLead();
}

function plusHomeThree(){
    homeCount += 3;
    homePointsEl.textContent = homeCount;
    checkLead();
}

function plusGuestOne(){
    guestCount += 1;
    guestPointsEl.textContent = guestCount;
    checkLead();
}

function plusGuestTwo(){
    guestCount += 2;
    guestPointsEl.textContent = guestCount;
    checkLead();
}

function plusGuestThree(){
    guestCount += 3;
    guestPointsEl.textContent = guestCount;
    checkLead();
}

function reset(){
    homePointsEl.textContent = 0;
    guestPointsEl.textContent = 0;
    homeCount = 0;
    guestCount = 0;
    homePointsEl.classList.remove("lead");
    guestPointsEl.classList.remove("lead");
}

function checkLead(){
    if(homeCount > guestCount){
        homePointsEl.classList.add("lead");
        guestPointsEl.classList.remove("lead");
    }else if(guestCount > homeCount){
        guestPointsEl.classList.add("lead");
        homePointsEl.classList.remove("lead");
    }else{
        guestPointsEl.classList.remove("lead");
        homePointsEl.classList.remove("lead");
    }
}
