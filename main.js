let toggle = document.querySelector('.toggle');
let showcase = document.querySelector('.showcase');
let menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    showcase.classList.toggle('active');
    menu.classList.toggle('active')
})