let bi_list = document.querySelector('.bi-list')
let bi_x = document.querySelector('.bi-x')
let header = document.getElementById('header')
bi_list.addEventListener('click' , ()=>{
    // header.classList.remove('d-none')
    // header.classList.add('d-block')

    // bi_list.classList.remove('d-block')
    // bi_list.classList.add('d-none')

    // bi_x.classList.add('d-block')
    // bi_x.classList.remove('d-none')

    bi_x.classList.add('d-none')
    bi_x.classList.remove('d-none')
    header.style.marginLeft = '0px'
})
bi_x.addEventListener('click' , ()=>{
    // header.classList.remove('d-block')
    // header.classList.add('d-none')

    // bi_list.classList.remove('d-none')
    // bi_list.classList.add('d-block')

    // bi_x.classList.add('d-none')
    // bi_x.classList.remove('d-block')

    bi_x.classList.add('d-none')
    bi_x.classList.remove('d-none')
    header.style.marginLeft = '-300px'
})