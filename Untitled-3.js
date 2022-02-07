let btnAddTaskEl = document.querySelector('button')
let taskNameEl = document.querySelector('#content')

let tasks = getTask()

console.log(tasks)
btnAddTaskEl.addEventListener('click', function() {
    if(!taskNameEl.value) {
        alert('Please write your task')
        return false
    }

    let tasks =  localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    tasks.push ({ name: taskNameEl.value })
    taskNameEl.value=''
   
    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTasks(tasks)
})

function deleTasks(id){
     let tasks = getTask()
     tasks.splice(id, 1)
     localStorage.setItem('tasks', JSON.stringify(tasks))
     renderTasks(getTask())
 
}
function renderTasks(tasks = []) {
    let content = '<ul>'

    tasks.forEach((task, index) => {
       content += `<li>
       <div class="task-name">${task.name}</div>
       <a href="#" onclick="deleTasks(${index})">X</a>
       </li>`
    })
    content += '</ul>'

    document.querySelector('#result').innerHTML = content
}
function getTask(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}