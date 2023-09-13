/*function matchPassword (){
    var pwd1 = document.querySelector('input[name=pwd]')
    var pwd2 = document.querySelector('input[name=pwdConfirm]');
        if (pwd2.value !== pwd1.value) {
                       
        }
}*/


const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const passwordConfirm = document.getElementById('pwdConfirm');
const password = document.getElementById('pwd');
const form = document.getElementById('form');
const message = document.getElementById('pwdMessage');

form.addEventListener('submit', (e) => {
    message.textContent ="";

    if (firstName.value === '' || firstName.value == null){
        e.preventDefault();        
    }

    if (password.value.length <= 4){
        e.preventDefault();
    }

    if (password.value.length >= 20){
        e.preventDefault();
    }

    if (password.value !== passwordConfirm.value){
        e.preventDefault();
        message.textContent = 'Password must match!';
    }

    else{
        
    }
})

