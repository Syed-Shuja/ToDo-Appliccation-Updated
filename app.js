var list = document.getElementById("list");

function addToDo(){
    var item = document.getElementById("toDoItem");

    var li = document.createElement('li');
    var liTxt = document.createTextNode(item.value);
    li.setAttribute("class", "li");
    li.appendChild(liTxt);
    
    var editBtn = document.createElement("button");
    var editTxt = document.createTextNode("EDIT");
    editBtn.appendChild(editTxt);
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.setAttribute("class", "btnED");
    li.appendChild(editBtn);

    var delBtn = document.createElement("button");
    var btnTxt = document.createTextNode("DELETE TASK");
    delBtn.appendChild(btnTxt);
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.setAttribute("class", "btnED");
    li.appendChild(delBtn);


    list.appendChild(li); 

    toDoItem.value = "";

}


function deleteItem(e){
    e.parentNode.remove(); 
}

function editItem(a){
    var val = a.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val);
    a.parentNode.firstChild.nodeValue = editValue;
}

function removeAll(){
    list.innerHTML = "";
}