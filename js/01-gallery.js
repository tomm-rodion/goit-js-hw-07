import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createGalleryItemsMarkup(galleryItems));
gallery.addEventListener("click", onOpenModalImg);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onOpenModalImg(evt) {
  evt.preventDefault();
  const isImg = evt.target.classList.contains(".gallery__link");
  if (isImg) {
    return;
  }
  const imgTargetGallery = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<div class="modal">
        <img src = "${imgTargetGallery}" width="800" height="600"/>
    </div>`
  );

  instance.show();

  if (instance.visible()) {
    gallery.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        instance.close();
      }
    });
  }
}
