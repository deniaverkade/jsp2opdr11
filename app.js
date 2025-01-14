let hunger = 100;
let energy = 100;
let happiness = 100;

loader = document.getElementById("loader");

const statusmessage = document.getElementById("statusMessage");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const sleep = document.getElementById("sleep");

const fcount = document.getElementById("hungercount");
const hcount = document.getElementById("happinesscount");
const ecount = document.getElementById("energycount");



feed.addEventListener("click", function feedtama() {
    hunger = hunger +20;
    if (hunger > 100) {
        hunger = 100
    }
})

play.addEventListener("click", function playtama() {
    happiness = happiness +20;
    if (happiness > 100) {
        happiness = 100
    }
})

sleep.addEventListener("click", function sleeptama() {
    energy = energy +20;
    if (energy > 100) {
        energy = 100
    }
})


const countdown = setInterval(function barCountdown(){
    energy = energy-1;
    happiness = happiness-1;
    hunger = hunger-1;
    fcount.innerHTML = hunger;
    hcount.innerHTML = happiness;
    ecount.innerHTML = energy;
},1000)



function statusCount (){
    if (hunger === 100 && energy === 100 && happiness === 100) {
        statusmessage.innerHTML = "Je tamagochi is gelukkig!";
    } else if (hunger <= 50 && energy > 50 && happiness > 50) {
        statusmessage.innerHTML = "Je tamagochi heeft honger!";
    } else if (hunger <= 50 && energy <= 50 && happiness > 50) {
        statusmessage.innerHTML = "Je tamagochi is uitgemergeld!";
    }  else if (hunger <= 50 && energy <= 50 && happiness <= 50) {
        statusmessage.innerHTML = "Je tamagochi is depressief!";
    }  else if (hunger > 50 && energy <= 50 && happiness > 50) {
        statusmessage.innerHTML = "Je tamagochi is moe!";
    } else if (hunger > 50 && energy > 50 && happiness <= 50) {
        statusmessage.innerHTML = "Je tamagochi is ongelukkig!";
    } else if (hunger > 50 && energy > 50 && happiness > 50){
        statusmessage.innerHTML = "Je tamagochi is gelukkig!";
    }
        
}

function stopCounting() {

    if (energy < 0) {
        energy = 0;}

    if (hunger < 0) {
        hunger = 0;}

    if (happiness < 0) {
        happiness = 0;}
        
    if (happiness === 0 && energy === 0 && hunger === 0) {
        clearInterval(countdown);
        statusmessage.innerHTML = "Je tamagochi is dood!";
    }
        
    
    
}


const statuscheck1 = setInterval(statusCount,1000);
const statuscheck2 = setInterval(stopCounting, 1000);
