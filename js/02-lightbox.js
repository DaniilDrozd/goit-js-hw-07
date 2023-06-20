import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkUp = document.querySelector('.gallery');
const imagesMarkup = createItemsMarkup(galleryItems);
galleryMarkUp.insertAdjacentHTML("beforeend",imagesMarkup);
function createItemsMarkup(items){
    return items.map(
        ({description,original,preview}) =>{
            `li class = "gallery__item">
            <a class= "gallery__link" href=${original}>
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
 })
 .join("");
 
//  galleryMarkUp.insertAdjacentHTML("beforeend", imagesMarkup);


let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  }); 

}