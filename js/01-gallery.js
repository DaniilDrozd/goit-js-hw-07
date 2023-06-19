import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryMarkUp = document.querySelector('.gallery');


const imagesMarkup = createItemsMarkup(galleryItems);
galleryMarkUp.insertAdjacentHTML("beforeend",imagesMarkup);

function createItemsMarkup(item){
return galleryItems .map(({preview, original, description}) => {
    return  ` 
    <a class="gallery__link" href="${preview}">
    <img src="${preview}" class="gallery__image" data-source="${original}" alt="${description}">
    </a>
  </li>`;
})
.join("");
}
// galleryItems.forEach(galleryItems => galleryItems.addEventListener('click',displayImage));
const onContainerClick = (e) => {
e.preventDefault();
if (e.target.classlist.contains("gallery")) return;
const source = e.target.dataset.source;
const modal = basicLightbox.create(
    ` <img scr = "${evt.target.dataset.source} " width = "800" height = "600">`,      
)
modal.show();
};
function onEsckeyPress(evt){
    if (evt.code === "Escape"){
        modal.close();
    }
};

galleryMarkUp.addEventListener("click", onContainerClick);
