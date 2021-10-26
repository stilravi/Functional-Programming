// fetch('../json/dataset.json')
//     .then(response => response.json())
//     .then(data => console.table(data.))
//     .catch((err) => {
//         console.log(err)
//     });

fetch("../json/dataset.json")
  .then(response => response.json())
  .then(data => {

    data.forEach(obj => {
        console.log(obj['Kaas is ook een zoogdier?'])

        let resultaat = removeQuestionMarks(obj['Kaas is ook een zoogdier?']);

        console.log(resultaat);
    })
    
    // console.log(typeof json)

  });


function removeQuestionMarks(string) {
    let stringify = String(string);
    return stringify.replaceAll('?', '');
}

