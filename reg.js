window.addEventListener('DOMContentLoaded',()=>{

document.querySelector('#sendForm').addEventListener('click',()=>{
const inputName = document.querySelector('.name').value
const inputEmail = document.querySelector('.email').value
const inputLetter = document.querySelector('.letter').value
if(inputEmail!=''&&inputName!=''){
const obj = {
    mail:inputEmail,
    namef:inputName,
    message:inputLetter
}
localStorage.setItem('form',JSON.stringify(obj))
}
 
})
























})