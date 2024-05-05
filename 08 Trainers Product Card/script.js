const container = document.querySelector('.container')
const colour1 = document.querySelector('.colour-1')
const colour2 = document.querySelector('.colour-2')

colour2.addEventListener('click', () => {
    container.classList.add('change')
})

colour1.addEventListener('click', () => {
    container.classList.remove('change')
})