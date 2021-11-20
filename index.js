const nameEl = document.getElementById("name-el");
const dateEl = document.getElementById("date-el");
const amountEl = document.getElementById("amount-el");
const submitEl = document.getElementById("submit-el");
const tableEl = document.getElementById("table-el");
let expense = [];

submitEl.addEventListener("click", function () {
  if (!nameEl.value) return;
  if (!dateEl.value) return;
  //expense = JSON.parse(localStorage.getItem("myList"));
  let name = nameEl.value;
  let date = dateEl.value;
  let amount = amountEl.value;
  let event = [name, date, amount];
  expense.push(event);
  display();
  // console.log(expense[0][0]);
  // console.log(expense[0][1]);
  // console.log(expense[0][2]);
});

function display() {
  if (expense.length == 0) return;
  let tableContent = ``;
  for (let i = 0; i < expense.length; i++) {
    tableContent += `<tr id="${i}">`;
    for (let j = 0; j < expense[i].length; j++) {
      tableContent += `<td>${expense[i][j]}</td>`;
    }
    tableContent += `<td><button type="del" onclick="remove(${i})"class="innerBtn">X</button></td></tr>`;
  }
  let textToHtml = `<table><tr class="bold">
        <td>NAME</td>
        <td>DATE</td>
        <td>AMOUNT</td>
        <td></td></tr>
      ${tableContent}
    </table>`;
  localStorage.setItem("myList", JSON.stringify(expense));
  tableEl.innerHTML = textToHtml;
  nameEl.value = "";
  amountEl.value = `00.0`;
  dateEl.value = `yyyy-MM-dd`;
}

function remove(i) {
  expense.splice(i, 1);
  tableEl.innerHTML = "";
  display();
}
