// Step 1: Variables
const fullName = "Wagner Sanches";
const currentYear = new Date().getFullYear();
const profilePicture = "My profile picture.jpg";

// Step 2: Element Variables
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profile-picture");

// Step 3: Adding Content to the Document
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

// Step 4: Arrays
const favoriteFoods = ["Pizza", "Sushi", "Ice Cream", "Burger", "Pasta", "Tacos"];
const newFavoriteFood = "Smoothies";

favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML = favoriteFoods.join("<br>");

favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

favoriteFoods.pop();
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");










