const btnSee = document.querySelectorAll('.btnSee')
const btnBack = document.querySelector('#backIN')
const containerDash = document.querySelector('#squareMain')
const containerDocument = document.querySelector('#document')

let contents = Array()




function fadeToggle(element){
    element.addEventListener('click',() => {
        $(containerDash).fadeToggle('fast')
        $(containerDocument).fadeToggle('fast')
    })
}

btnSee.forEach((e)=> {
    e.addEventListener('click', (element) => {
        console.log(element.target.parentNode.parentNode.parentNode)
    })

    fadeToggle(e)    
})

fadeToggle(btnBack)

    