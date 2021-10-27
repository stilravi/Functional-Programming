
fetch("./json/dataset.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(object => {
        let result = removeQuestionMarks(object['Kaas is ook een zoogdier?']);
        console.log(result);
    })
    // testFunction(data);
  });


function removeQuestionMarks(data) {
    let stringify = String(data);
    return stringify.replaceAll('.', '').replaceAll('?', '').replaceAll(' ', '-').toLowerCase();;
}

// function testFunction(data) {
//     // const text = document.getElementById('demo');
//     console.log()
//     // text.innerHTML = data[0];
// }

