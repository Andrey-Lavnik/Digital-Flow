
const burger = document.querySelector(".side2")
const windowModal = document.querySelector(".window")
const cross  =document.querySelector('.cross')
burger.addEventListener("click",()=>{
burger.classList.add('none')
windowModal.classList.remove('none')

})
cross.addEventListener('click',()=>{
    burger.classList.remove('none')
    windowModal.classList.add('none')  
})