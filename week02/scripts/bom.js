const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

//add input value to the list
button.addEventListener('click', function(){
    //check if user entered something into input box
    if (input.value != '') {
        //create the list item
        const li = document.createElement('li');
        li.textContent = input.Value;
        // create a delete button and add click event
        const delButton = document.createElement('button');
        delButton.textContent = '❌';
        delButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });
        //add the delete button to the list
        li.append(delButton);
        // display the complete list item to the list
        list.appendChild(li);
        input.value = '';
    }
    input.focus();
})













