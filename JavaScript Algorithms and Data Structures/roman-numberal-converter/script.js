const numInput = document.getElementById("number");
const convBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const numerals = [
  {
    letter: "M",
    number: 1000,
  },
  {
    letter: "CM",
    number: 900,
  },
  {
    letter: "D",
    number: 500,
  },
  {
    letter: "CD",
    number: 400,
  },
  {
    letter: "C",
    number: 100,
  },
  {
    letter: "XC",
    number: 90,
  },
  {
    letter: "L",
    number: 50,
  },
  {
    letter: "XL",
    number: 40,
  },
  {
    letter: "X",
    number: 10,
  },
  {
    letter: "IX",
    number: 9,
  },
  {
    letter: "V",
    number: 5,
  },
  {
    letter: "IV",
    number: 4,
  },
  {
    letter: "I",
    number: 1,
  },
];

function converter(num, output = "") {
  if (num === 0) {
    return output;
  } else {
    for (const numeral of numerals) {
      if (numeral.number <= num) {
        return converter(num - numeral.number, output + numeral.letter);
      }
    }
  }
}

function inputVal() {
  if (numInput.value === "") {
    outputDiv.innerText = "Please enter a valid number";
  } else if (numInput.value < 0) {
    outputDiv.innerText = "Please enter a number greater than or equal to 1";
  } else if (numInput.value >= 4000) {
    outputDiv.innerText = "Please enter a number less than or equal to 3999";
  } else {
    outputDiv.textContent = converter(numInput.value);
  }
}

convBtn.addEventListener("click", () => {
  inputVal();
});
