let poems = [];
let reasonsForLove = [];
let currentPoemIndex = 0;
let currentReasonIndex = 0;

const stackingHeartsContainer = document.getElementById("stacking-hearts");
const reasonForLoveBtn = document.getElementById("reason-for-love-btn");
const previousPoemBtn = document.getElementById("previous-poem-btn");
const poemContainer = document.getElementById("poem-container");
const nextPoemBtn = document.getElementById("next-poem-btn");
const reasonForLoveContainer = document.getElementById(
  "reason-for-love-container",
);

previousPoemBtn.addEventListener("click", () => {
  if (currentPoemIndex == 0) return;

  currentPoemIndex--;
  poemContainer.innerText = poems[currentPoemIndex];
});

nextPoemBtn.addEventListener("click", () => {
  if (currentPoemIndex == poems.length - 1) return;

  currentPoemIndex++;
  poemContainer.innerText = poems[currentPoemIndex];
});

reasonForLoveBtn.addEventListener("click", newReasonForLove);

const savedData = localStorage.getItem("loveMessageData");

if (savedData) {
  const data = JSON.parse(savedData);
  const greetingText = document.getElementById("greeting-text");
  const giftTitleText = document.getElementById("gift-title-text");
  const giftDescText = document.getElementById("gift-desc-text");
  const giftImg = document.getElementById("gift-img");
  const closingTextEl = document.getElementById("closing-text-el");

  if (greetingText) greetingText.innerText = data.greeting;
  if (giftTitleText) giftTitleText.innerText = data.giftTitle;
  if (giftDescText) giftDescText.innerText = data.giftDesc;
  if (giftImg) giftImg.src = data.giftImage;
  if (closingTextEl) closingTextEl.innerText = data.closingText;

  poems = data.poems;
  reasonsForLove = data.reasons;

  poemContainer.innerText = poems[currentPoemIndex];
  reasonForLoveContainer.innerText = reasonsForLove[currentReasonIndex];
} else {
  fetchPoems();
  fetchReasonsForLove();
}

function fetchPoems() {
  fetch("/data/poems.json")
    .then((res) => res.json())
    .then((data) => {
      poems = data.lovePoems;

      poemContainer.innerText = poems[currentPoemIndex];
    })
    .catch((error) => console.log(error));
}

function fetchReasonsForLove() {
  fetch("/data/reasons-why.json")
    .then((res) => res.json())
    .then((data) => {
      reasonsForLove = data;

      console.log(data);
      reasonForLoveContainer.innerText = reasonsForLove[currentReasonIndex];
    })
    .catch((error) => console.log(error));
}

function newReasonForLove() {
  if (reasonsForLove.length <= 1) return;

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * reasonsForLove.length);
  } while (randomNumber === currentReasonIndex);

  currentReasonIndex = randomNumber;
  reasonForLoveContainer.innerText = reasonsForLove[currentReasonIndex];
}
