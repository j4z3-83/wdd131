// select elements from the DOM
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChaptersList() || [];

let listLength = 0;

chaptersArray.forEach(chapter => {
    displayList(chapter)    
});

function displayList(book){
    let li = document.createElement('button');
    let deletebutton = document.createElement('button');
    li.textContent = book;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChaptersList(){
    localStorage.setItem('favoriteBookList', JSON.stringify(chaptersArray));
}

function getChaptersList(){
    return JSON.parse(localStorage.getItem('favoriteBookList'));
}

function deleteChapter(){
    chapter = chapter.slice(0, chaptersArray.length - 1);
    chaptersArray = chaptersArray.filter((book) => book !== chapter);
    setChaptersList();
}





// handle button clicks
button.addEventListener("click", function () {
    //ensure the input is not empty
    if (input.value != "") { 
        //call the function to display the entered chapter
        displayList(input.value);
        // add chapter to the array
        chaptersArray.push(input.value);
        setChaptersList(); // update local storage with the array
        input.value = ''; //clear the input
        input.focus();
    }
});















