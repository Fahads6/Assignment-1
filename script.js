const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const ulist = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const RemoveTodo = document.getElementById("removebtn");


function newTodo() {
  var itemAdded = document.querySelectorAll('.item');
  var crtLi = document.createElement('li');
  crtLi.className = 'item';

  var divTodo = document.createElement('div');
  divTodo.className = "div-addTodo";

  ulist.parentNode.appendChild(divTodo);
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");

  divTodo.appendChild(x);
  var btn = document.createElement("button");
  btn.innerHTML = "Adding Value";
  divTodo.appendChild(btn);

  
  btn.onclick = () => {
    console.log(x.value);
    crtLi.appendChild(document.createTextNode(x.value));
    divTodo.parentNode.removeChild(divTodo);
  }
  
  ulist.appendChild(crtLi);

  let arr = Array.from(itemAdded);
  itemCountSpan.innerHTML = arr.length + 1;
}


function removeTodo(itemAdded) {
  {
    
    var del= document.getElementsByClassName(itemAdded);
  for( var i=0;i<del.length;i++){
    del[i].addEventListener("removeTodo", deleteListElement);
  }
  
  

  

  ulist.innerHTML = " ";
  itemCountSpan.innerHTML = "";
  uncheckedCountSpan.innerHTML = "";
}}
