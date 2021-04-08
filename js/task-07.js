const input = document.querySelector('input#font-size-control');
input.addEventListener('change', (event) => {
    document.querySelector('span#text').style.fontSize = `${event.target.value}px`
});
