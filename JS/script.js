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
        let title = element.target.parentNode.parentNode.parentNode.querySelector('.headerCard').querySelector('.componentHeader').querySelector('.title').textContent
        let membros = element.target.parentNode.parentNode.parentNode.querySelector('.headerCard').querySelector('.componentHeader').querySelector('.membros').textContent
        let imgCardUrl = element.target.parentNode.parentNode.parentNode.querySelector('.imgCard').querySelector('.imgCardUrl').src
        let textContent = element.target.parentNode.parentNode.parentNode.querySelector('.textCard').querySelector('.textAreaContent').textContent.trim()

        document.querySelector('#titulo').innerHTML = title
        document.querySelector('#membros').innerHTML = membros
        document.querySelector('#texto').innerHTML = textContent
        document.querySelector('#image').querySelector('#componentImg').src = imgCardUrl
    })

    fadeToggle(e)    
})

fadeToggle(btnBack)

btnBack.addEventListener('click', () => {
        document.querySelector('#titulo').innerHTML = ""
        document.querySelector('#membros').innerHTML = ""
        document.querySelector('#texto').innerHTML = ""
})

    