const body = document.querySelector('body');
const toggle = document.querySelector('.switch');


toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
});