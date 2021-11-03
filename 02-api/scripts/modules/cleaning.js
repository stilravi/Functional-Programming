function removeDots(str) {
    return str.replaceAll('.', '') // Vervang alle punten voor niks in de meegegeven parameter (beers.tagline) en stuur deze terug
}

export default removeDots // Exporteer deze functie zodat deze gebruikt kan worden in render.js