const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.getElementById('gallery');
gallery.style.display = 'flex';
gallery.style.alignItems = 'center';
gallery.style.justifyContent = 'space-between';


const creatListItem = images.map(image => {
  const itemEl = document.createElement('li');
  itemEl.style.listStyle = "none";
  itemEl.insertAdjacentHTML('afterbegin', `<img src='${image.url}' alt='${image.alt}' width='400px'>`);
  return itemEl;
});

gallery.append(...creatListItem);
console.log(gallery);