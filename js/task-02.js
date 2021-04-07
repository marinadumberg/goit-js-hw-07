const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsLiEl = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i += 1){
  const liEl = document.createElement('li');
  liEl.textContent = ingredients[i];
  ingredientsLiEl.appendChild(liEl);
  console.log(liEl);
}



/*ingredients.forEach(ing => {
    const liEl = document.createElement('li');
    ingredientsLiEl.textContent = ingredients;
    ingredientsLiEl.appendChild(liEl); 
    console.log(liEl)
});*/


