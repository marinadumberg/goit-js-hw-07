const navAllLiItemsRef = document.querySelectorAll('ul#categories li.item');
console.log('В списке ', navAllLiItemsRef.length, 'категории ');
navAllLiItemsRef.forEach(element => {
         console.log(element.firstElementChild.textContent);
         console.log('Количество элементов:', element.lastChild.previousSibling.childElementCount);
      });
