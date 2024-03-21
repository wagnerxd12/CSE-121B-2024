const profile = {
  name: "Wagner Sanches",
  favoriteFoods: ["Pizza", "Pasta", "Ice cream"],
  hobbies: ["Studying English", "Playing tennis", "Working out"],
  placesLived: [
    { place: "Maceió", years: 6 },
    { place: "Alfenas", years: 10 }
  ],
  profilePicture: "My profile picture.jpg"
};

// Set profile picture
document.getElementById("profile-picture").src = profile.profilePicture;

// Set name
document.getElementById("name").innerText = profile.name;

// Set favorite foods
const favoriteFoodsList = document.getElementById("favorite-foods");
profile.favoriteFoods.forEach(food => {
  const li = document.createElement("li");
  li.innerText = food;
  favoriteFoodsList.appendChild(li);
});

// Set hobbies
const hobbiesList = document.getElementById("hobbies");
profile.hobbies.forEach(hobby => {
  const li = document.createElement("li");
  li.innerText = hobby;
  hobbiesList.appendChild(li);
});

// Set places lived
const placesLivedList = document.getElementById("places-lived");
profile.placesLived.forEach(place => {
  const dt = document.createElement("dt");
  dt.innerText = place.place;
  placesLivedList.appendChild(dt);
  const dd = document.createElement("dd");
  dd.innerText = `Years: ${place.years}`;
  placesLivedList.appendChild(dd);
});

// Set year in footer
document.getElementById("year").innerText = new Date().getFullYear();


  


