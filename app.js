const body = document.querySelector('body');
const toggle = document.querySelector('.switch');
const check = document.querySelector('#switch');



toggle.addEventListener('click', () => {
    check.checked ?  body.classList.remove('dark') : body.classList.add('dark');
});