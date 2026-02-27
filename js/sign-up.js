const form = document.getElementById("sign-up-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const fullname = document.getElementById("fullname").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    fullname,
    password,
  };

  const users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    localStorage.setItem("users", JSON.stringify([user]));
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  localStorage.setItem("isLoggedIn", true);
  window.location.href = "/dashboard.html";

  alert("User registered successfully!");
});
