import api from './api.js' // Importeer api const uit api.js
import showResults from './render.js'; // Importeer showResult functie uit render.js

function fetchData() {
    fetch(`${api.apiUrl}/${api.apiTopic}`) // Vult hier de API url in + het API topic
        .then(response => response.json())
        .then(data => {
            showResults(data) // Voer de showResults functie uit en stuur een parameter mee
        })
        .catch((err) => {
            console.log(err) // Console log de error als deze er is
        })
}

// Exporteer de functie fetchData zodat deze in de index.js geimporteerd kan worden
export default fetchData