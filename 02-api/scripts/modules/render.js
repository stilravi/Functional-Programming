import removeDots from './cleaning.js' // Importeer removeDots functie van cleaning.js

function showResults(data) {
    const html = data.map(beers => { // 
        let beerTagline = removeDots(beers.tagline) // Maakt een let aan voor de beers.tagline. Voer vervolgens de functie removeDots uit.
        // Return een HTML <div> met daarin een img van het biertje, de naam van het biertje en de tagline (zonder punten).
        return `
        <li>
            <img src="${beers.image_url}" alt="${beers.name}">
            <h3>${beers.name}</h3>
            <p>${beerTagline}</p>
        </li>
        `
    }).join('') // Maakt er een string van
    // Pak het HTML element met de id #app en inset de "const html" direct na het begin van het element
    document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
}

export default showResults // Exporteer de functie showResults