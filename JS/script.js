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
        console.log(element.target.parentNode.parentNode.parentNode.querySelector('.headerCard').querySelector('.componentHeader').querySelector('.title').textContent)
        console.log(element.target.parentNode.parentNode.parentNode.querySelector('.headerCard').querySelector('.componentHeader').querySelector('.membros').textContent)
        console.log(element.target.parentNode.parentNode.parentNode.querySelector('.imgCard').querySelector('.imgCardUrl').src)
        console.log(element.target.parentNode.parentNode.parentNode.querySelector('.textCard').querySelector('.textAreaContent').textContent.trim())
    })

    fadeToggle(e)    
})

fadeToggle(btnBack)

    