const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn) {
  window.location.href = "/login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.getElementById("create-btn");
  const createCard = document.getElementById("create-card");
  const createModal = document.getElementById("create-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");

  const openModal = () => {
    if (createModal) createModal.style.display = "flex";
  };

  const closeModal = () => {
    if (createModal) createModal.style.display = "none";
  };

  if (createBtn) createBtn.addEventListener("click", openModal);
  if (createCard) {
    createCard.style.cursor = "pointer";
    createCard.addEventListener("click", openModal);
  }
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);

  // Character counts for text areas
  const textareas = document.querySelectorAll(".styled-textarea");
  textareas.forEach((textarea) => {
    const charCountSpan = textarea.nextElementSibling;
    if (charCountSpan && charCountSpan.classList.contains("char-count")) {
      textarea.addEventListener("input", () => {
        const count = textarea.value.length;
        charCountSpan.innerText = `${count}/500`;
        // Optional: enforce max length or style change if over 500
      });
    }
  });

  // --- Form Logic ---
  const poems = [];
  const reasons = [];

  const poemsList = document.getElementById("poems-list");
  const poemInput = document.getElementById("poem-input");
  const addPoemBtn = document.getElementById("add-poem-btn");

  const reasonsList = document.getElementById("reasons-list");
  const reasonInput = document.getElementById("reason-input");
  const addReasonBtn = document.getElementById("add-reason-btn");

  const createForm = document.getElementById("create-form");
  const successMsg = document.getElementById("success-msg");

  function renderList(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    list.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "list-item";

      const p = document.createElement("p");
      p.innerText = item;

      const btn = document.createElement("button");
      btn.className = "remove-btn";
      btn.type = "button";
      btn.innerHTML = "&times;";
      btn.onclick = () => {
        list.splice(index, 1);
        renderList(list, containerId);
      };

      div.appendChild(p);
      div.appendChild(btn);
      container.appendChild(div);
    });
  }

  if (addPoemBtn) {
    addPoemBtn.addEventListener("click", () => {
      const text = poemInput.value.trim();
      if (text) {
        poems.push(text);
        poemInput.value = "";
        renderList(poems, "poems-list");
      }
    });
  }

  if (addReasonBtn) {
    addReasonBtn.addEventListener("click", () => {
      const text = reasonInput.value.trim();
      if (text) {
        reasons.push(text);
        reasonInput.value = "";
        renderList(reasons, "reasons-list");
      }
    });
  }

  if (createForm) {
    createForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (poems.length === 0) {
        alert("Please add at least one poem.");
        return;
      }

      if (reasons.length === 0) {
        alert("Please add at least one reason for love.");
        return;
      }

      const formData = {
        greeting: document.getElementById("greeting").value,
        poems: poems,
        reasons: reasons,
        giftTitle: document.getElementById("gift-title").value,
        giftDesc: document.getElementById("gift-desc").value,
        giftImage: document.getElementById("gift-image").value,
        closingText: document.getElementById("closing-text").value,
      };

      localStorage.setItem("loveMessageData", JSON.stringify(formData));

      if (successMsg) successMsg.style.display = "block";
      const modalBody = document.querySelector(".modal-body");
      if (modalBody) modalBody.scrollTo(0, modalBody.scrollHeight);
    });
  }
});
