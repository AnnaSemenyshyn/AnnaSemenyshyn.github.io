const burgerIcons = document.getElementById('burgerIcons');
const iconBars = document.getElementById('iconBars');
const iconXmark = document.getElementById('iconXmark');
const menuList = document.getElementById('menuList');

burgerIcons.addEventListener('click', () => {
    menuList.classList.toggle('menu-close')
    iconXmark.classList.toggle('menu-close')
    iconBars.classList.toggle('menu-close')
})


let swiper = new Swiper('.mySwiper', {
    derection: 'horizontal',
    loop: false,

    pagination: {
        el: ".swiper-pagination",
    },

    mousewheel: true,
})


let swip = new Swiper('.itsSwiper', {
    derection: 'horizontal',
    loop: false,

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    mousewheel: true,


    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        // when window width is >= 540px
        540: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        // when window width is >= 820px
        820: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        },
    }

})

async function populate() {
    const requestURL = 'https://annasemenyshyn.github.io/cards.json'
    const request = new Request(requestURL)

    const response = await fetch(request)
    console.log(response)

    const cards = await response.json()
    console.log(cards)

    populateCards(cards)
}

function populateCards(obj) {
    const section = document.querySelector('.swiper-wrapper')

    for (const card of obj.cards) {
        const cardBlock = document.createElement('div')
        cardBlock.className = 'swiper-slide'

        const cardWrap = document.createElement('div')
        cardWrap.className = 'card'

        const image = document.createElement('img')
        image.src = card.image
        image.className = 'image'

        const cardName = document.createElement('div')
        cardName.textContent = card.title
        cardName.className = 'title'

        const position = document.createElement('div')
        position.textContent = card.description.position
        position.className = 'position'

        const institute = document.createElement('div')
        institute.textContent = card.description.institute
        institute.className = 'institute'

        const link = document.createElement('a')
        link.href = card.link
        link.textContent = card.link


        const button = document.createElement('div')
        button.textContent = card.button
        button.className = "button"

        cardBlock.append(cardWrap)
        cardWrap.append(image)
        cardWrap.append(cardName)
        cardWrap.append(position)
        cardWrap.append(institute)
        cardWrap.append(link)
        link.append(button)
        section.append(cardBlock)
    }
}

populate()


