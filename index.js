let addBtn = document.getElementById('addBtn')
let i = 1

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let todoInput = document.getElementById('todoInput')
    // console.log(todoInput)
    if (todoInput.value == '') {
        alert("Enter any todo first !")
        return
    } 
    else {
        let div = document.createElement('div')
        div.setAttribute('class', 'singleTodo')
        console.log(div)
        div.innerHTML = `
            <h2>${todoInput.value}</h2>
            <input type="checkbox" name="" id="checkbox${i}" onclick=markTodo(${i})>
            <button id="remBtn${i}" onclick=removeTodo(${i})>Remove Todo</button>
        `
        document.getElementById('allTodo').appendChild(div)
        todoInput.value = ''

        // document.getElementById(`remBtn${i}`).addEventListener('click', (e) => {
        //     e.target.parentNode.remove()
        // })

        // let checkbox = document.getElementById(`checkbox${i}`)
        // checkbox.addEventListener('click', (e) => {
        //     e.target.previousElementSibling.classList.toggle("strike")
        // })

        i++
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