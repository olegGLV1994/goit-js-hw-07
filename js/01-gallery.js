import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const addImage = addGalleryImg(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", addImage);
galleryEl.addEventListener("click", addClickImage);

function addGalleryImg(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<div class='gallery__item'><a class='gallery__link' href ='${original}'><img src ='${preview}' alt = '${description}' data-source ='${original}' class ='gallery__image'></a></div>`;
    })
    .join("");
}

function addClickImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
