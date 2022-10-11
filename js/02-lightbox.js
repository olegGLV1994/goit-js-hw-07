import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const addImage = addGalleryImg(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", addImage);

function addGalleryImg(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<div class='gallery__item'><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionType: "alt",
  captionDelay: 250,
});
