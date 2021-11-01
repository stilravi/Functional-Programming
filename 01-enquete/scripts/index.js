fetch("./dataset/dataset.json")
.then(response => response.json())
.then(data => {
  data.forEach(object => {
      let result = changeToString(object['Kaas is ook een zoogdier?']);
      result = removeQuestionMarks(result)
      result = removeDots(result)
      result = removeCapitals(result)
      console.log(result);
      printResults(result);
  });
  
});

const changeToString = (data) => {
  let stringify = String(data);
  return stringify;
}

const removeQuestionMarks = (str) => {
  return str.replaceAll('?', '');
}

const removeDots = (str) => {
  return str.replace(/\.+$/, "");
  // https://stackoverflow.com/questions/20925157/remove-dot-sign-from-the-end-of-the-string
}

const removeCapitals = (str) => {
  return str.toLowerCase();
}

const printResults = (str) => {
  const list = document.getElementById("list");
  list.innerHTML += `<li>${str}</li>`;
}













// fetch("./dataset/dataset.json")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(object => {
//         let result = removeQuestionMarks(object['Kaas is ook een zoogdier?']);
//         console.log(result);
//     })
//   });

// function removeQuestionMarks(data) {
//   let stringify = String(data);
//   return stringify.replaceAll('.', '').replaceAll('?', '').toLowerCase();;
// }

// function testFunction(data) {
//     // const text = document.getElementById('demo');
//     console.log()
//     // text.innerHTML = data[0];
// }



// fetch("./dataset/dataset.json")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(object => {
//         let result1 = removeQuestionMarks(object['Kaas is ook een zoogdier?']);
//         let result2 = removeDots(object['Kaas is ook een zoogdier?']);
//         console.log(result1, result2);
//     })
//   });

// function removeQuestionMarks(string) {
//   return string.replaceAll('?', '')
// }

// function removeDots(string) {
//   return string.replaceAll('.', '')
// }



// function removeCapitals(data) {

// }

// function removeQuestionMarks(data) {

// }

