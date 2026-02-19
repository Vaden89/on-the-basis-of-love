let poems = [];
let currentPoemIndex = 0;

const stackingHeartsContainer = document.getElementById("stacking-hearts");
const poemContainer = document.getElementById("poem-container");
const previousPoemBtn = document.getElementById("previous-poem-btn");
const nextPoemBtn = document.getElementById("next-poem-btn");

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

const fetchPoems = () => {
  fetch("/data/poems.json")
    .then((res) => res.json())
    .then((data) => {
      poems = data.lovePoems;

      console.log(poems);
      poemContainer.innerText = poems[currentPoemIndex];
    })
    .catch((error) => console.log(error));
};

fetchPoems();
