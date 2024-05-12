let addBtn = document.getElementById('addBtn')

let data = JSON.parse(localStorage.getItem('allTodo')) || []

window.addEventListener('storage', () => {
    document.getElementById('allTodo').innerHTML = ''
    data = []
})

function displayTodo() {
    document.getElementById('allTodo').innerHTML = ''
    data.map((singleTodo,i) => {
        todoStructure(singleTodo,i)
    })
}

function todoStructure({title,isCompleted},i) {
    let div = document.createElement('div')
    div.setAttribute('class', 'singleTodo')
    div.innerHTML = `
        <h2>${title}</h2>
        <input type="checkbox" name="" ${isCompleted ? "checked" : ""} id="checkbox${i}" class="checkBox" onclick=markTodo(${i})>
        <button id="remBtn${i}" class="remBtn" onclick=removeTodo(${i})>Remove Todo</button>
    `
    if (isCompleted) {
        div.getElementsByTagName('h2')[0].classList.add('strike')
    }

    document.getElementById('allTodo').appendChild(div)
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let todoInput = document.getElementById('todoInput')
    if (todoInput.value == '') {
        alert("Enter any todo first !")
        return
    } 
    else {
        data.push({title : todoInput.value, isCompleted : false})
        localStorage.setItem('allTodo',JSON.stringify(data))    // Update in Local storage
        displayTodo()   // Re-render todos
        todoInput.value = ''

        // document.getElementById(`remBtn${i}`).addEventListener('click', (e) => {
        //     e.target.parentNode.remove()
        // })

        // let checkbox = document.getElementById(`checkbox${i}`)
        // checkbox.addEventListener('click', (e) => {
        //     e.target.previousElementSibling.classList.toggle("strike")
        // })
    }
})

function removeTodo(id) {
    let div = document.getElementById(`remBtn${id}`)
    div.parentNode.remove()   // To remove todo from UI
    data.splice(id,1)   // To remove it from local storage
    localStorage.setItem('allTodo', JSON.stringify(data))    // Update in Local storage
    displayTodo()   // Re-render todos
}

function markTodo(id) {
    let checkbox = document.getElementById(`checkbox${id}`)
    checkbox.previousElementSibling.classList.toggle("strike")  // To mark todo in UI
    data[id].isCompleted = !data[id].isCompleted     // To mark todo in Local storage
    localStorage.setItem('allTodo', JSON.stringify(data))    // Update in Local storage
    displayTodo()   // Re-render todos
}

displayTodo()