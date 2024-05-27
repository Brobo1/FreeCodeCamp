let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const denoms = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

const cash = document.getElementById("cash");
const due = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const till = document.getElementById("till");

const cidCopy = [...cid].reverse();
denoms.reverse();
const payment = (cash) => {
  const totalCash = parseFloat(
    cidCopy.reduce((a, b) => a + b[1], 0).toFixed(2),
  );
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price.toString()) {
    due.textContent = "No change due - customer paid with exact cash";
  } else if (totalCash <= cash - price) {
    due.textContent = `Status: INSUFFICIENT_FUNDS`;
  } else {
    due.textContent = `Status: OPEN `;
    changeDue(cash);
  }
};

const changeDue = (cash) => {
  cash -= price;

  for (let i = 0; i < denoms.length; i++) {
    let counter = 0;
    if (cash / denoms[i][1] > 1) {
      while (cidCopy[i][1] > 0 && cash - denoms[i][1] >= 0) {
        counter++;
        cidCopy[i][1] -= denoms[i][1];
        cash -= denoms[i][1];
        cash = parseFloat(cash.toFixed(2));
      }
    }
    if (counter > 0)
      due.textContent += ` ${denoms[i][0]}: $${denoms[i][1] * counter}`;
  }
};

const showCash = () => {
  till.innerHTML = "";
  for (const left of cid) {
    till.innerHTML += `<p>${left[0]}: ${left[1]}</p>`;
  }
};

const updateChange = () => {
  showCash();
};

showCash();

purchaseBtn.addEventListener("click", () => {
  updateChange();
  payment(cash.value);
  showCash();
});
