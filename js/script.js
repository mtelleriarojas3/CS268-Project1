const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', e => {
menuButton.classList.toggle('active');
navigation.classList.toggle('open');
});