async function populate() {

    const requestURL = 'https://annasemenyshyn.github.io/superheroes.json'
    const request = new Request(requestURL)

    const response = await fetch(request)
    //console.log(response)

    const superheroes = await response.json()
    //console.log(superheroes)


    populateHeader(superheroes)
    populateHeroes(superheroes)
}

function populateHeader(obj) {
    const header = document.querySelector('header')
    const title = document.createElement('h1')
    title.textContent = obj.squadName
    header.append(title)

    const subtitle = document.createElement('p')
    subtitle.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`
    header.append(subtitle)
}

function populateHeroes(obj) {
    const section = document.querySelector('section')
    const heroes = obj.members
    console.log(heroes)

    for (const hero of heroes) {
        console.log(heroes)

        const heroBlock = document.createElement('article')
        const heroName = document.createElement('h2')
        heroName.textContent = hero.name

        const secret = document.createElement('p')
        secret.textContent = `Secret identity: ${hero.secretIdentity}`

        const list = document.createElement('ul')

        for (const power of hero.powers) {
            const listItem = document.createElement('li')
            listItem.textContent = power
            list.append(listItem)
        }



        heroBlock.append(heroName)
        heroBlock.append(secret)
        heroBlock.append(list)
        section.append(heroBlock)
    }
}

populate()