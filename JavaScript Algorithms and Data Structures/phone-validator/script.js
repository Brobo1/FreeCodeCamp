const numberInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const numberToCheck = [
  "1 555-555-5555",
  "1 (555) 555-5555",
  "1(555)555-5555",
  "1 555 555 5555",
  "5555555555",
  "555-555-5555",
  "(555)555-5555",
  "as12312dasd",
  "12as12312dasd",
  "55555555",
];

const validate = (str) => {
  if (str === "") {
    alert("Please provide a phone number");
    return false;
  }
  return true;
};

const numberRegex = (nums) => {
  const regex = /^1?\s?(\d{3}|\(\d{3}\))\s?-?(\d{3})\s?-?(\d{4})$/;
  let copy = [];
  nums.map((num) => {
    copy.push({ nr: num, regex: regex.test(num) });
  });
  return copy;
};

const numberRegexSingle = (num) => {
  const regex = /^1?\s?(\d{3}|\(\d{3}\))\s?-?(\d{3})\s?-?(\d{4})$/;
  return regex.test(num);
};

const showRes = (num) => {
  if (!validate(num)) {
    return;
  }
  
  if (numberRegexSingle(num)) {
    resultDiv.innerHTML = `<p>Valid US number: ${num}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Invalid US number: ${num}</p>`;
  }
};

console.log(numberRegex(numberToCheck));

checkBtn.addEventListener("click", () => {
  showRes(numberInput.value);
});
clearBtn.addEventListener("click", () => {
  resultDiv.innerHTML = "";
});
