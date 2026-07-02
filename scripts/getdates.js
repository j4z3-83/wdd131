// elements for outputs
const full = document.querySelector("#lastModified");
const currentyear = document.querySelector("#currentyear");
const today = new Date();

// outputs
currentyear.innerHTML = `&copy; ${today.getFullYear()}`;

lastModified.innerHTML = `Last Modified:  
${new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(today)}`;





