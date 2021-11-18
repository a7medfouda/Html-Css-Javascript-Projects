let signUpBtn = document.querySelector('.signUpBtn');
let signInBtn = document.querySelector('.signIpBtn')
let signInForm = document.querySelector('.sign-in-form');
let overLayIn = document.querySelector('.overlay-in');
let welcomeBack = document.querySelector('.welcome-back');
signUpBtn.addEventListener('click', () => {
    signInForm.classList.toggle('sign-in-form-move');
    overLayIn.classList.toggle('overlay-in-move');
    welcomeBack.classList.toggle('welcome-back-move');
})
signInBtn.addEventListener('click', () => {
    signInForm.classList.toggle('sign-in-form-move');
    overLayIn.classList.toggle('overlay-in-move');
    welcomeBack.classList.toggle('welcome-back-move');
})
