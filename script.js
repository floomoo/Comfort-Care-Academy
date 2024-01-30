let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').oneclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').oneclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove(acive);
}

window.onscroll = () =>{
    loginForm.classList.remove(acive);
    navbar.classList.remove('active');
}   