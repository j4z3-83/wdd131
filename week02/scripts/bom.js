const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// handle button clicks
button.addEventListener("click", function () {
	// Check if the user entered something in input box
	if (input.value != "") {
		// take value from input box and make a list item
		const li = document.createElement("li");
		li.textContent = input.value;
		// create a delete button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteButton.textContent = "❌";
		deleteButton.addEventListener("click", function () {
			list.removeChild(li);
			input.focus();
		});
		// add the delete button to the list item
		li.appendChild(deleteButton);
		// add and display the completed list item in the list
		list.appendChild(li);
		// clear the input box
		input.value = "";
	}
	input.focus();
});













