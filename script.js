// 🎯 Part 1: JavaScript Basics
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  const age = parseInt(document.getElementById("userInput").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.textContent = "Please enter a valid number.";
  } else if (age >= 18) {
    result.textContent = "You are eligible!";
  } else {
    result.textContent = "Sorry, you must be at least 18.";
  }
});

// ❤️ Part 2: Functions
function greetUser(name) {
  document.getElementById("functionOutput").textContent = `Hello, ${name}! Welcome to JavaScript.`;
}

function calculateTotal(amount, taxRate) {
  const total = amount + amount * taxRate;
  document.getElementById("functionOutput").textContent = `Total with tax: $${total.toFixed(2)}`;
}

// 🔁 Part 3: Loops
document.getElementById("countdownBtn").addEventListener("click", function () {
  const list = document.getElementById("countdownList");
  list.innerHTML = "";
  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }
});

document.getElementById("listNamesBtn").addEventListener("click", function () {
  const names = ["Alice", "Bob", "Charlie", "Diana"];
  const list = document.getElementById("namesList");
  list.innerHTML = "";
  names.forEach(function (name) {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
});

// 🌐 Part 4: DOM Manipulation
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.querySelector("header h1").textContent = "JavaScript Is Awesome!";
});

document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

document.getElementById("addItemBtn").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${document.querySelectorAll("#dynamicList li").length + 1}`;
  document.getElementById("dynamicList").appendChild(newItem);
});
