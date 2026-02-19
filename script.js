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

fetchPoems();
fetchReasonsForLove();

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
  const randomNumber = Math.floor(Math.random() * 5);

  if (randomNumber === currentReasonIndex) newReasonForLove();

  currentReasonIndex = randomNumber;
  reasonForLoveContainer.innerText = reasonsForLove[currentReasonIndex];
}
