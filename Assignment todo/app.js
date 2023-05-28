
let list = document.getElementById("list");
function addTodo() {
    event.preventDefault();
    let todo = document.getElementById("todo");
    let date = new Date();
    let todoValue = todo.value.trim();

    let listItem = document.createElement("li");
    listItem.className = "list";

    listItem.innerHTML = `
      <input class="todo-input" type="text" id="${new Date().getTime()}" value="${todoValue}" disabled /><br/>
      <span class="date">${moment(date).startOf().fromNow()}</span>
      <button class="btn-del" onclick="delTodo(event)">Delete</button> 
      <button class="btn-add" onclick="editTodo(this)">Edit</button>
    `;

    if (list.firstChild) {
        list.insertBefore(listItem, list.firstChild);
    } else {
        list.appendChild(listItem);
    }

    todo.value = "";
}
function deleteAll(e) {
    list.innerHTML = null
    e.preventDefault()
}
function delTodo(event) {
    event.target.parentNode.remove()
}


let edit = false
function editTodo(e) {
    if (edit) {
        e.parentNode.childNodes[1].disabled = true;
        e.parentNode.childNodes[1].blur()
        e.parentNode.childNodes[5].innerHTML = "Edit"
        edit = false;
    } else {
        e.parentNode.childNodes[1].disabled = false;
        e.parentNode.childNodes[1].focus()
        e.parentNode.childNodes[5].innerHTML = "Update"
        edit = true;
    }
}
