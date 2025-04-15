//Adding elements
const button = document.querySelector('#addBtn');
const taskWindow = document.querySelector("#taskWindow");
const listText = document.querySelector("#list");
const countTask = document.querySelector("#count");
const infoText = document.querySelector('#infoText');
const listArray = [];

//Changing status function
function changeStatus(text, status){
    let changeIndex = listArray.map(t => t.name).indexOf(text);
    listArray[changeIndex].completed = status;
}
//Remove element from array function
function removeElement(text){
    let changeIndex = listArray.map(t => t.name).indexOf(text);
    listArray.splice(changeIndex, 1);

}

function addElementToList(){

    inputText = taskWindow.value;
    //Check if window its not ""
    if(inputText !== ""){
        const inputText = taskWindow.value;
        infoText.innerText = "";
        infoText.classList.remove('warningText');
        

        // Adding new html elements throght JS
        const item = document.createElement('li');
        listText.appendChild(item);

        const itemLabel = document.createElement('span');
        itemLabel.innerText = inputText;
        item.appendChild(itemLabel);

        const trashcan = document.createElement('span');
        trashcan.innerHTML = "&#128465"
        trashcan.setAttribute("class", "trashcan")
        item.appendChild(trashcan);

        //Function then clicking on label
        function itemLabelClick(){
            if(toDoObject.completed){
                item.setAttribute("class", "");
                let todoText = item.firstChild.textContent;
                changeStatus(todoText, false);
                } else{
                    item.setAttribute("class", "completed");
                    let todoText = item.firstChild.textContent;
                    changeStatus(todoText, true);
                }
                //Get all the completed classes and write to count
                listCompleted = document.querySelectorAll(".completed");     
                let count = listCompleted.length;
                countTask.innerText = `${count} completed`;
        }
    
    function trashcanClick(){
        item.remove();
        listCompleted = document.querySelectorAll(".completed");
        let count = listCompleted.length;
        countTask.innerText = `${count} completed`;
        let todoText = item.firstChild.textContent;
        removeElement(todoText);
    }
        //Trashcan and item label listeners
        trashcan.addEventListener("click", trashcanClick, false);
        itemLabel.addEventListener("click", itemLabelClick, false);

        // Input cleaned
        taskWindow.value = "";

        //Add to Array
        const toDoObject = {};
        toDoObject.name = inputText;
        toDoObject.completed = false;
        listArray.push(toDoObject);
    }else{
                infoText.textContent = "Text is empty!"
                infoText.classList.add('warningText');
    }
}

//Button listener
button.addEventListener("click", addElementToList, false);
// Array.indexOf
//number.map(Math.sqrt)