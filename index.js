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
            <input type="checkbox" name="" id="checkbox${i}">
            <button id="remBtn${i}">Remove Todo</button>
        `
        document.getElementById('allTodo').appendChild(div)
        todoInput.value = ''
        document.getElementById(`remBtn${i}`).addEventListener('click', (e) => {
            // console.log(e.target)
            // console.log(e.target.parentNode)
            e.target.parentNode.remove()
            
        })
        let checkbox = document.getElementById(`checkbox${i}`)
        checkbox.addEventListener('click', (e) => {
            console.log(checkbox)
            // console.log(e.target.previousElementSibling.innerHTML);
            // e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.innerHTML.strike()
            e.target.previousElementSibling.classList.toggle("strike")
        })
        i++
    }
})

