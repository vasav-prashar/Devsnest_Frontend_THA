let todos = document.getElementsByClassName("elements")

function getTodos(){
  let todoList = localStorage.getItem("todos");
  console.log(todoList);
  todos.innerHTML = todoList;
}

function addTodo(event){
  if(event.code === "Enter"){
    let todo = document.getElementsByClassName("input").value;
    if(todo){
    let listItem = `<li><span><i class="fa fa-trash"></i></span>${todo}</li>`
    console.log(listItem);
    document.getElementsByClassName("elements").innerHTML += listItem;
    document.getElementsByClassName("input").value = "";
  }else{
    alert("Eneter a valids todo");
  }
    localStorage.setItem('todos', todos.innerHTML);
  }
}

document.querySelector("ul").addEventListener('click', function(event){
  event.target.classList.toggle('completed');
  localStorage.setItem('todos', todos.innerHTML);
});

document.querySelector("ul").addEventListener('click', function(event){
  if(event.target.tagName === "I"){ event.target.parentElement.parentElement.remove();
  }
  if(event.target.tagName === "SPAN"){
    event.target.parentElement.remove();
  }
  localStorage.setItem('todos', todos.innerHTML);
});

document.getElementById("addNew").addEventListener("click", function(){
  document.getElementsByClassName("input").classList.toggle("showInput");
})
