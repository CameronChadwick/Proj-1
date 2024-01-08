const productList = document.querySelectorAll('.product')
const shopList = document.querySelectorAll('.shop-btn')
const priceList = document.querySelectorAll('.item-price')

productList.forEach(product => {
    product.addEventListener('mouseover', () => {
        let index = parseInt(product.id)
        shopList[index].style.display='block'
        priceList[index].style.display='none'
    })
});

productList.forEach(product => {
    product.addEventListener('mouseleave', () => {
        let index = parseInt(product.id)
        shopList[index].style.display='none'
        priceList[index].style.display='block'
    })
});