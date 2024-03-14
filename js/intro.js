const featBtn = document.querySelector('.feat')
const featCls = document.querySelector('.feat-close')
const compBtn = document.querySelector('.comp')
const compCls = document.querySelector('.comp-close')
const featNav = document.querySelector('.drop-feat')
const compNav = document.querySelector('.drop-comp')
let isOpenFeat = false
let isOpenComp = false

featBtn.addEventListener('click', () => {
    if (!isOpenFeat) {
        featNav.style.display = 'flex'
        featBtn.style.display = 'none'
        featCls.style.display = 'inline'
        isOpenFeat = true
    }
})

featCls.addEventListener('click', () => {
    if (isOpenFeat) {
        featNav.style.display = 'none'
        featCls.style.display = 'none'
        featBtn.style.display = 'inline'
        isOpenFeat = false
    }
})

compBtn.addEventListener('click', () => {
    if (!isOpenComp) {
        compNav.style.display = 'flex'
        compBtn.style.display = 'none'
        compCls.style.display = 'inline'
        isOpenComp = true
    }
})

compCls.addEventListener('click', () => {
    if (isOpenComp) {
        compNav.style.display = 'none'
        compCls.style.display = 'none'
        compBtn.style.display = 'inline'
        isOpenComp = false
    }
})