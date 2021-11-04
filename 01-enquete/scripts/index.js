fetch("./dataset/dataset.json") // Fetch het bestand genaam dataset.json
.then(response => response.json())
.then(data => {
  data.forEach(object => { // Voor elk object uit de Dataset moet het volgende gebeuren:
      let result = changeToString(object['Kaas is ook een zoogdier?']); // Voer de functie changeToString uit en neem alleen de antwoorden mee van die vraag
      result = removeQuestionMarks(result) // Stuur vervolgens het resultaat door naar een andere functie
      result = removeDots(result) // Stuur vervolgens het resultaat weer door naar een andere functie
      result = removeCapitals(result) // Stuur vervolgens het resultaat door naar de andere functie
      console.log(result); // Laat het resultaat zien in de console log
      printResults(result); // Voer als laatste de functie printResults uit en stuur "result" mee als parameter
  });
});

function changeToString(data) {
  let stringify = String(data); // Maak een let aan en zet het meegestuurde om in een String 
  return stringify; // Stuur de string vervolgens weer terug
}

function removeQuestionMarks(str) {
  return str.replaceAll('?', ''); // Stuur een string terug waarin alle ? zijn vervangen door niks
}

function removeDots(str) {
  return str.replace(/\.+$/, ""); // Stuur een string terug waarin alle . aan het eind van de zin zijn vervangen door niks
  // https://stackoverflow.com/questions/20925157/remove-dot-sign-from-the-end-of-the-string
}

function removeCapitals(str) {
  return str.toLowerCase(); // Stuur een string terug waarin alles veranderd is naar kleine letters
}

function printResults(str) {
  const ul = document.getElementById("list"); // Maak een const aan genaamd ul van het element met id "list"
  let list = document.createElement('li'); // Maak een let aan genaamd list en creëer een <li> element
  list.innerHTML = str; // Het list item is de string (str) wat in HTML uiteindelijk wordt ingeladen 
  ul.appendChild(list); // Laat vervolgens in de ul het list item in
}

