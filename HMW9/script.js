// const myList = document.querySelector(`#List`);
// let deleteBtn;
// let editBtn;
// let listElem;
// let newTodo;
// let doneBtn;


function createTodo(param){
const myList = document.querySelector(`#List`);
let deleteBtn;
let editBtn;
let listElem;
let newTodo;
let doneBtn;
  listElem = document.createElement(`li`);
  listElem.textContent = `${param.title} `;
  listElem.setAttribute("id", param.id);
  deleteBtn = document.createElement(`button`);
  editBtn = document.createElement(`button`);
  deleteBtn.classList.add(`fa-solid`, `fa-trash`, `deleteBtn`);
  editBtn.classList.add(`fa-solid`, `fa-pen`, `editBtn`);
  listElem.appendChild(deleteBtn);
  listElem.appendChild(editBtn);
  myList.appendChild(listElem);
  deleteBtn.onclick = function() {deleteElement(param.id, listElem)}
  editBtn.onclick = function() {editElement(param.id)}
}

fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then(response => response.json())
  .then(function (data) {
    data.forEach(function (element) {
      createTodo(element);
    });
  });


function deleteElement(id,elem) {
    fetch(
        'https://jsonplaceholder.typicode.com/todos/' + id, {
        method: 'DELETE'
      }).then(function(response){
         return response.json();
      }).then(function(){
        console.log(elem);
        elem.parentNode.removeChild(elem);
      });
}



function editElement(id) {
    fetch(
        'https://jsonplaceholder.typicode.com/todos/' + id, {
        method: 'PUT'
      }).then(function(response){
         return response.json();
      }).then(function(data) {
         test(data);
      });
  
}


