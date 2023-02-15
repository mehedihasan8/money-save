document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeField = inputField("income-field");
  const mainBlance = incomeField - expenses();
  indexElementValus("total-expenses");
  indexElementValus("Balance");
  setElementById("total-expenses", expenses());
  setElementById("Balance", mainBlance);
});

function expenses() {
  const foodValue = inputField("foot-field");
  const rentValue = inputField("rent-field");
  const clothesValue = inputField("clothes-field");
  const totalExpenses = foodValue + rentValue + clothesValue;
  return totalExpenses;
}

function setElementById(id, value) {
  const setInnerText = document.getElementById(id);
  setInnerText.innerText = value;
}

function indexElementValus(id) {
  const indexElement = document.getElementById(id);
  const indexElementValusString = indexElement.innerText;
  const indexElementNumber = parseFloat(indexElementValusString);
  return indexElementNumber;
}

function inputField(id) {
  const inputFieldValue = document.getElementById(id);
  const inputFieldValueString = inputFieldValue.value;
  const inputNumber = parseFloat(inputFieldValueString);
  return inputNumber;
}
