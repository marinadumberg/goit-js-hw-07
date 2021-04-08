const inputForm = document.getElementById('validation-input');
const lengthForm = inputForm.getAttributeNumber();
console.log(lengthForm)
inputForm.addEventListener('blur', () => {
    if (inputForm.nodeValue.length === lengthForm) {
        inputForm.classList.add('valid');
        inputForm.classList.remove('invalid');
    }
    else {
        inputForm.classList.add('invalid');
    }
}
);