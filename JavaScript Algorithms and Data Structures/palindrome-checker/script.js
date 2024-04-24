const textField = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  result.textContent = checker(textField.value);
  console.log(checker(textField.value));
});

function validator(str) {
  if (!str) {
    return "Please input a value";
  }
  return str;
}

function symbolRemove(str) {
  return str.replace(/[\W_]/g, "").toLowerCase();
}

function checker(str) {
  const normal = symbolRemove(str);
  const flipped = normal.split("").reverse().join("");

  if (!str) {
    alert("Please input a value");
    return null;
  }
  return `${str} is${normal === flipped ? "" : " not"} a palindrome`;
}
