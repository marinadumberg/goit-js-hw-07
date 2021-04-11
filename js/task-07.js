const input = document.querySelector('input#font-size-control');
input.addEventListener('input', (event) => {
    document.querySelector('span#text').style.fontSize = `${event.target.value}px`
});
