// select elements from the DOM
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// handle button clicks
button.addEventListener("click", function () {
	if (input.value != "") {
		// create list item 
		const li = document.createElement("li");
		li.textContent = input.value;
		// create a  delete button
		const delButton = document.createElement("button");
		delButton.textContent = "❌";
		delButton.addEventListener("click", function () {
			list.removeChild(li);
			input.focus();
		});
		// add the delete button to the list item
		li.appendChild(delButton);
		// display the completed list item
		list.appendChild(li);
		// clear the input box
		input.value = "";
	}
	input.focus();


});













