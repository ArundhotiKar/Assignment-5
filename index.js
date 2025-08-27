
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
    console.log("Copy button clicked in card:", index + 1);
    const number = card.querySelector("h1.text-2xl").innerText;
    navigator.clipboard.writeText(number);
    alert(`Copied: ${number}`);
  });
});




