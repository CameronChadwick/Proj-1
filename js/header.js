const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('nav')
let isOpen = false
closeBtn.style.display = 'none'

function openMenu () {
    if (!isOpen) {
        nav.style.display = 'flex'
        isOpen = true
        closeBtn.style.display = 'flex'
        openBtn.style.display = 'none'
    }
}

openBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', () => {
    if (isOpen) {
        nav.style.display = 'none'
        isOpen = false
        closeBtn.style.display = 'none'
        openBtn.style.display = 'flex'
    }
})