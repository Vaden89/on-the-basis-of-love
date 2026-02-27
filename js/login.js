const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    alert("Invalid Credentials");
    return;
  }

  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    alert("Invalid Credentials");
    return;
  }

  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("user", JSON.stringify(user));

  window.location.href = "/dashboard.html";
});
