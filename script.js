// CHECK LOGIN STATE
window.onload = function () {
  if (localStorage.getItem("loggedIn") === "true") {
    showDashboard();
  }
  generateTests();
};

// LOGIN FUNCTION
function login() {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (mobile === "9760013212" && password === "Tanvi@1212") {
    localStorage.setItem("loggedIn", "true");
    showDashboard();
  } else {
    error.innerText = "Invalid Mobile or Password";
  }
}

// SHOW DASHBOARD
function showDashboard() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

// SWITCH SECTIONS
function showSection(section) {
  document.getElementById("course").classList.add("hidden");
  document.getElementById("tests").classList.add("hidden");
  document.getElementById("profile").classList.add("hidden");

  document.getElementById(section).classList.remove("hidden");
}

// GENERATE TEST LIST
function generateTests() {
  const container = document.getElementById("testList");

  for (let i = 1; i <= 48; i++) {
    const div = document.createElement("div");
    div.className = "test-item";

    div.innerHTML = `
      <span>Test ${i}</span>
      <a href="pdf/test${i}.pdf" target="_blank">Download PDF</a>
    `;

    container.appendChild(div);
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  location.reload();
}