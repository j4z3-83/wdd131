//MENU HAMBURGER BUTTON
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

// elements for outputs
const full = document.querySelector("#lastModified");
const currentYear = document.querySelector("#currentYear");
const today = new Date();

// outputs
currentYear.innerHTML = `&copy; ${today.getFullYear()}`;

lastModified.innerHTML = `Last Modified:  
${new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(today)}`;