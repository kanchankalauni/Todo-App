let addBtn = document.getElementById('addBtn')
let i = 1

let data = JSON.parse(localStorage.getItem('allTodo')) || []

window.addEventListener('storage', () => {
    document.getElementById('allTodo').innerHTML = ''
    data = []
})

function displayTodo() {
    document.getElementById('allTodo').innerHTML = ''
    data.map((singleTodo) => {
        console.log(singleTodo)
        todoStructure(singleTodo)
    })
}

displayTodo()

function todoStructure(singleTodo) {
    let div = document.createElement('div')
    div.setAttribute('class', 'singleTodo')
    console.log("div 1",div)
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
    data.push(todoInput.value)
    // console.log(todoInput)
    if (todoInput.value == '') {
        alert("Enter any todo first !")
        return
    } 
    else {
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
    div.parentNode.remove()
}

function markTodo(id) {
    let checkbox = document.getElementById(`checkbox${id}`)
    checkbox.previousElementSibling.classList.toggle("strike")
}