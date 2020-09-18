import itemsTemplate from '../templates/gallery-items.hbs';
import menu from '../menu';

console.log(menu);

const markup = itemsTemplate(menu);
console.log(markup);

const galleryRef = document.querySelector('.js-menu');
console.log(galleryRef);
galleryRef.insertAdjacentHTML('beforeend', markup);
