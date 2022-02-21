const accordions = document.querySelectorAll('.accordion')
const questions = document.querySelectorAll('.question')
const ones = document.querySelectorAll('.one')

let currentActive = 0
console.log(accordions.length)

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        currentActive++
        update()
        accordion.classList.toggle('accordion-drop')
        console.log(accordion)
        if(currentActive > 1){
            currentActive = 0
            update()
        }
        console.log(currentActive)
    })
})
// accordions.forEach(accordion => {
//     accordion.addEventListener('click', () => {
//         update()
//         accordion.classList.add('accordion-drop')
 
//     })
// })

function update(){
    accordions.forEach(accordion => {
        accordion.classList.remove('accordion-drop')
    })
}