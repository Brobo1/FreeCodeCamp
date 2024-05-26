let price = 1.87;
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
const denom = [
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

const noCash = () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
  }
};

const showCash = () => {
  till.innerHTML = "";
  for (const left of cid) {
    till.innerHTML += `<p>${left[0]}: ${left[1]}</p>`;
  }
};

showCash();

const updateChange = () => {
  showCash();
};

purchaseBtn.addEventListener("click", () => {
  noCash();
  updateChange();
});
