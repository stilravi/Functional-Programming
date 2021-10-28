
fetch("./dataset/dataset.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(object => {
        const result = removeQuestionMarks(object['Kaas is ook een zoogdier?']);
        console.log(result);
    })
  });

function removeQuestionMarks(data) {
    const stringify = String(data);
    return stringify.replaceAll('.', '').replaceAll('?', '').toLowerCase();;
}

// function testFunction(data) {
//     // const text = document.getElementById('demo');
//     console.log()
//     // text.innerHTML = data[0];
// }

