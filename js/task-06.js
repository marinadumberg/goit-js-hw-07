
const checkInput = document.querySelector("#validation-input");
console.log(checkInput);
checkInput.addEventListener("blur", onInput);
function onInput(event) {
  checkInput.classList.add("valid", "invalid");
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length == checkInput.dataset.length) {
    checkInput.classList.toggle("invalid");
    };
}

console.log(checkInput.dataset.length);