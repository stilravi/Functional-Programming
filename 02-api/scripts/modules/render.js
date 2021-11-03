import removeDots from './cleaning.js'

function showResults(data) {
    const html = data.map(beers => {
        let beerTagline = removeDots(beers.tagline)
        return `
        <div>
            <img src="${beers.image_url}" alt="${beers.name}">
            <h3>${beers.name}</h3>
            <p>${beerTagline}</p>
        </div>
        `
    }).join('')
    document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
}

export default showResults