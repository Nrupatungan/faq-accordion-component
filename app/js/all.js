const accordions = document.querySelectorAll('.accordion')
const questions = document.querySelectorAll('.question')
const ones = document.querySelectorAll('.one')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        currentActive++
        update()
        accordion.classList.toggle('accordion-drop')
        console.log(accordion)
    })
})

function update(){
    accordions.forEach(accordion => {
        accordion.classList.remove('accordion-drop')
    })
}