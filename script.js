let todos = JSON.parse(localStorage.getItem('myTodos')) || []

function saver(todosArray){
    localStorage.setItem('myTodos', JSON.stringify(todosArray))
}

function addTodo(){
    let inp = document.getElementById('inp').value;
    if(!inp){
        return alert("Please enter todo")
    }
    todos.push({todo:inp, done:false})
    saver(todos)
    window.location.reload()
}
//let array = [{todo:'todo one',done:false},{todo:'todo two',done:false}]
//array[1].done === false
function markDone(id){
    todos[id].done === false ? todos[id].done = true : todos[id].done = false
    saver(todos)
    window.location.reload()
}

function deleteTodo(id){
    let confirm = window.confirm("Are you sure you want to delete this todo ?")
    if(!confirm) return
    //let arr = [1,2,3,4]
    //arr.splice(2,1)=>[1,2,4]
    todos.splice(id,1)
    saver(todos)
    window.location.reload()
}

document.getElementById('content').innerHTML = todos.map((item,i)=>(
    `<div class="todo">
    <div class="inp over ${item.done === true && 'line'}">${item.todo}</div>
    <button onclick="markDone(${i})" class="done-btn">${item.done === false ? '<i class="fas fa-check"></i>' : '<i class="fas fa-redo"></i>'}</button>
    <button onclick="deleteTodo(${i})" class="delete-btn"><i class="fas fa-trash"></i></button>
    </div>`
)).join("")