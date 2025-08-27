
// Love count
let loveCount = 0;
const availableHeart = document.getElementById("heart-available");
const loveIcons = document.getElementsByClassName("love");
for (const icon of loveIcons) {
    icon.addEventListener("click", function () {
        loveCount++;
        availableHeart.innerText = loveCount;
    });
}

// Copy count
let copyCount = 2;
const availableCopyCount = document.getElementById('copy-count');
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  const copyBtn = card.querySelector(".copy-btn");
  copyBtn.addEventListener("click", function() {
    copyCount++;
    availableCopyCount.innerText=copyCount;
    //console.log("Copy button clicked in card:", index + 1);
    const number = card.querySelector("h1.text-2xl").innerText;
    navigator.clipboard.writeText(number);
    alert(`Copied: ${number}`);
  });
});


// Functionality of call button
const coinCount = document.getElementById('coin-count');
cards.forEach((card, index) => {
  const callBtn = card.querySelector(".call-btn");
  callBtn.addEventListener("click", function() {
    let currentCoin = parseInt(coinCount.innerText);

    if (currentCoin < 20) {
      alert("You don't have enough coins. You need at least 20 coins to make a call");
      return;
    }
    currentCoin -= 20;
    coinCount.innerText = currentCoin;
    const serviceType = card.querySelector("h1.calling").innerText;
    const number = card.querySelector("h1.text-2xl").innerText;
    alert(`Calling ${serviceType} ${number}...`);
  });
});





