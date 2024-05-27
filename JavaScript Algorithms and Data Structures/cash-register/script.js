let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
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
].reverse();

const cash = document.getElementById("cash");
const due = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const till = document.getElementById("till");

const payment = (cash) => {
  const totalCash = cid.reduce((a, b) => a + b[1], 0);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price.toString()) {
    due.textContent = "No change due - customer paid with exact cash";
  } else {
    changeDue(cash);
  }
};

const changeDue = (cash) => {
  const cidCopy = [...cid].reverse();
  let changeDue = cash - price;
  let changeArray = [];

  for (let i = 0; i < denoms.length; i++) {
    let counter = 0;
    while (cidCopy[i][1] > 0 && changeDue - denoms[i][1] >= 0) {
      counter++;
      cidCopy[i][1] -= denoms[i][1];
      changeDue -= denoms[i][1];
      changeDue = parseFloat(changeDue.toFixed(2));
    }
    if (counter > 0) {
      changeArray.push([denoms[i][0], denoms[i][1] * counter]);
    }
  }

  if (changeDue > 0) {
    due.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
  } else {
    const totalCashAfterChange = parseInt(
      cidCopy.reduce((a, b) => a + b[1], 0).toFixed(2),
    );
    console.log(totalCashAfterChange);
    if (totalCashAfterChange === 0) {
      due.innerHTML = `<p>Status: CLOSED</p>`;
    } else {
      due.innerHTML = `<p>Status: OPEN</p>`;
    }
    for (const change of changeArray) {
      due.innerHTML += `<p>${change[0]}: $${change[1]}</p>`;
    }
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
