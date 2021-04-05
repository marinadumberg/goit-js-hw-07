const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const IngredientsLiEl = document.querySelector('ingredients-list');
const elements = [];
for (let i = 0; i < ingredients.length; i += 1){
  
  const liEl = document.createElement('li');
  liEl.textContent = [ingredients];
  elements.push(liEl);
}
console.log(elements);
