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
  const ul = document.getElementById("list");
  let list = document.createElement('li');
  list.innerHTML = str;
  ul.appendChild(list);
}

