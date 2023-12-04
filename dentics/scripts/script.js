const burgerIcons = document.getElementById('burgerIcons');
const iconBars = document.getElementById('iconBars');
const iconXmark = document.getElementById('iconXmark');
const menuList = document.getElementById('menuList');

burgerIcons.addEventListener('click', () => {
    menuList.classList.toggle('menu-close')
    iconXmark.classList.toggle('menu-close')
    iconBars.classList.toggle('menu-close')
})