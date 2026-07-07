const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// handle button clicks
button.addEventListener("click", function () {
	// Check if the user entered something
	if (input.value != "") {
    	// create list item
		const li = document.createElement("li");
		li.textContent = input.value;
		// create a button 
		const deleteBtn = document.createElement("button");
		delButton.textContent = "❌";
		delButton.addEventListener("click", function () {
			list.removeChild(li);
			input.focus();
		});
		// add the button to the list item
		li.appendChild(delButton);
		// add the list item to the list
		list.appendChild(li);
		// clear the user input box
	}
	input.focus();
});












