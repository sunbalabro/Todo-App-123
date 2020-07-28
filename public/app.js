var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);

    var delBtn = document.createElement('button');
    var delText = document.createTextNode('Delete');
    delBtn.setAttribute("class","btn");
    delBtn.style.backgroundColor = "rgb(255, 138, 101)";
    delBtn.style.margin = "3px";
    delBtn.style.margin = "3px";
    delBtn.style.color = "white"
    delBtn.style.border = "1px solid white"
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(delText);
    
    var editBtn = document.createElement('button');
    var editText = document.createTextNode('Edit');
    editBtn.style.backgroundColor = "rgb(255, 138, 101)";
    editBtn.style.margin = "3px";
    editBtn.style.color = "white"
    editBtn.style.border = "1px solid white"
    editBtn.setAttribute("class","btn");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.appendChild(editText);
    
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
    todo_item.value= "";


}
function deleteItem(e){
            e.parentNode.remove()
}
function editItem(e){
  var val = prompt("Enter your value you want to be edited",e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = val
}
function deleteAll(){
    list.innerHTML = ""
}

























