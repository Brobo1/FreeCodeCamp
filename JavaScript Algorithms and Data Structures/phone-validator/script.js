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
];

const validate = (str) => {
  if (str === "") {
    alert("Please provide a phone number");
  }
};

const numberRegex = (nums) => {
  const regex = /\d?\s?(\d{3}|\(\d{3}\))\s?-?(\d{3})\s?-?(\d{4})/;
  let copy = [];
  nums.map((num) => {
    copy.push({ nr: num, regex: regex.test(num) });
  });
  return copy;
};

console.log(numberRegex(numberToCheck));

checkBtn.addEventListener("click", () => {
  validate(numberInput.value);
});
