// https://www.mobafire.com/league-of-legends/champion

async function getImagesFromTag(div) {
    const tags = div.querySelectorAll('.sidebar-module__table__item__pic img')
    const info = []
    for (let i of tags) {
        const img = i.src
        info.push(img)
    }
    return info
}

async function getImagesFromPage() {
    const tags = document.querySelectorAll('.sidebar-module__table__item__pic img')
    const info = []
    for (let i of tags) {
        const img = i.src
        info.push(img)
    }
    return info
}

async function getImagesAvatarFromTag(div) {
    const list = Array.from(div.querySelectorAll('[data-original]')).filter(e => e.getAttribute('data-original').includes('/avatar'))
    const links = list.map(e => e.getAttribute('data-original')).map(e => 'https://www.mobafire.com' + e)
    return Array.from(new Set(links))
}


const championsPages = Array.from(document.querySelectorAll('.footer-links a')).map(e => e.href)

async function getImagesFromUrl(url) {
    console.log(url)
    return fetch(url)
        .then(e => e.text())
        .then(async e => {
            const div = document.createElement('div')
            div.innerHTML = e
            return getImagesAvatarFromTag(div)
        })
}

// function go(){
const images = []
const imagesUrl = []

// championsPages.slice(0, 3).map(e => images.push(getImagesFromUrl(e)))
championsPages.map(e => images.push(getImagesFromUrl(e)))
// championsPages.slice(0, 5).map(async e => images.push(await getImagesFromUrl(e)))
// console.log(images)

Promise.all(images).then((values) => {
    // console.log(values);
    // imagesUrl = values.flat()
    // console.log(imagesUrl)
    imagesUrl.push(values)
})
    .then(e => {
        // console.log(imagesUrl.flat().flat())
        console.log('ok')
        document.body.innerHTML = ''
        for (i of imagesUrl.flat().flat()) {
            const img = new Image()
            img.src = i
            document.body.append(img)

        }
    })


// }

// go()

