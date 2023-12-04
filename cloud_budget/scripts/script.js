const burgerIcons = document.getElementById('burgerIcons');
const iconBars = document.getElementById('iconBars');
const iconXmark = document.getElementById('iconXmark');
const menuList = document.getElementById('menuList');

burgerIcons.addEventListener('click', () => {
    menuList.classList.toggle('menu-close')
    iconXmark.classList.toggle('menu-close')
    iconBars.classList.toggle('menu-close')
})

const langIcon = document.getElementById('langIcon');
const caretDown = document.getElementById('caretDown');
const langFlag = document.getElementById('langFlag');
const langTitle = document.getElementById('langTitle');

langIcon.addEventListener('click', () => {
    caretDown.classList.toggle('caret-up')
    listFlag.classList.toggle('list-close')
    listLang.classList.toggle('list-close')

})



