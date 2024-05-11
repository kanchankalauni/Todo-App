let addBtn = document.getElementById('addBtn')

let data = JSON.parse(localStorage.getItem('allTodo')) || []

window.addEventListener('storage', () => {
    document.getElementById('allTodo').innerHTML = ''
    data = []
})

function displayTodo() {
    document.getElementById('allTodo').innerHTML = ''
    data.map((singleTodo,i) => {
        // console.log(singleTodo)
        todoStructure(singleTodo,i)
    })
}

displayTodo()

function todoStructure(singleTodo,i) {
    let div = document.createElement('div')
    div.setAttribute('class', 'singleTodo')
    // console.log("div 1",div)
    div.innerHTML = `
        <h2>${singleTodo}</h2>
        <input type="checkbox" name="" id="checkbox${i}" onclick=markTodo(${i})>
        <button id="remBtn${i}" onclick=removeTodo(${i})>Remove Todo</button>
    `
    document.getElementById('allTodo').appendChild(div)
    i++
    // console.log("div 2",div)
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let todoInput = document.getElementById('todoInput')
    // console.log(todoInput)
    if (todoInput.value == '') {
        alert("Enter any todo first !")
        return
    } 
    else {
        data.push(todoInput.value)
        localStorage.setItem('allTodo',JSON.stringify(data))
        displayTodo()
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
    localStorage.setItem('allTodo', JSON.stringify(data))
    displayTodo()
}

function markTodo(id) {
    let checkbox = document.getElementById(`checkbox${id}`)
    checkbox.previousElementSibling.classList.toggle("strike")
}