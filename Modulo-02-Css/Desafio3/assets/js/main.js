
const ham = document.querySelector('.ham');
const links = document.querySelector('.links-menu');
const bars = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    links.classList.toggle('active');
    bars.forEach(child => {child.classList.toggle('animated')});
});
