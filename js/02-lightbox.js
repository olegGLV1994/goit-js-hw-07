import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const addImage = addGalleryImg(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", addImage);
galleryEl.addEventListener("click", addClickImage);

function addGalleryImg(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<div class='gallery__item'><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`;
    })
    .join("");
}

function addClickImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionType: "alt",
    captionDelay: 250,
  });
}
