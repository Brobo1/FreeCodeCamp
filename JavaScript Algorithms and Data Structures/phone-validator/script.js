const numberInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const numberToCheck = [
  "1 555-555-5555",
  "1  555-555-5555",
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

const regex = /^1?(\d{3}|\(\d{3}\))-?(\d{3})-?(\d{4})$/;

const validate = (str) => {
  if (str === "") {
    alert("Please provide a phone number");
    return false;
  }
  return true;
};

const numberRegex = (nums) => {
  let copy = [];
  nums.map((num) => {
    copy.push({ nr: num, regex: regex.test(num.replace(/\s*/g, "")) });
  });
  return copy;
};
console.log(numberRegex(numberToCheck));

const numberRegexSingle = (num) => {
  return regex.test(num.replace(/\s*/g, ""));
};

const showRes = (num) => {
  if (!validate(num)) {
    return;
  }

  resultDiv.innerHTML = numberRegexSingle(num)
    ? `<p>Valid US number: ${num}</p>`
    : `<p>Invalid US number: ${num}</p>`;
};

checkBtn.addEventListener("click", () => {
  showRes(numberInput.value);
});
clearBtn.addEventListener("click", () => {
  resultDiv.innerHTML = "";
});
