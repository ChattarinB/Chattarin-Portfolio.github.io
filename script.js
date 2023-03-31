const navBar = document.querySelector('nav');
function changeNavColor() {
    navBar.style.backgroundColor = 'green';
}
function returnNavColor() {
    navBar.style.backgroundColor = '#CC0000';
}
navBar.addEventListener('mousedown',changeNavColor);
navBar.addEventListener('mouseup',returnNavColor);