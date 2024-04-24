const textField = document.getElementById("text-input");
const button = document.getElementById("check-btn");

button.addEventListener("click", () => {
  console.log(checker(textField.value));
});

function validator(str) {
  if (!str) {
    return "Please input a value";
  }
  return str;
}

function symbolRemove(str) {
  return str.replace(/[\W_]/g, "");
}

function checker(str) {
  const normal = symbolRemove(str);
  const flipped = normal.split("").reverse().join("");

  if (!str) {
    return "Please input a value";
  }
  return `${str} is${normal === flipped ? "" : " not"} a palindrome`;
}
