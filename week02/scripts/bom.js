const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// handle button clicks
button.addEventListener("click", function () {
	// Check if the user entered something
	if (input.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = input.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		delButton.textContent = "❌";
		delButton.addEventListener("click", function () {
			list.removeChild(li);
			input.focus();
		});
		// add the button to the list item
		li.appendChild(delButton);
		// display the list item in the list
		// clear the user input box
		input.value = "";
	}
	input.focus();
});











