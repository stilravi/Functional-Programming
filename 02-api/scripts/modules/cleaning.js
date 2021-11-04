function removeDots(str) {
    return str.replace(/\.+$/, "") // Vervang alle punten (aan het eind van een string) en stuur de string (str) terug.
  // https://stackoverflow.com/questions/20925157/remove-dot-sign-from-the-end-of-the-string
}

export default removeDots // Exporteer deze functie zodat deze gebruikt kan worden in render.js