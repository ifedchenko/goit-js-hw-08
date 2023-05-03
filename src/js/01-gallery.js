// Add imports above this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const galleryList = document.querySelector(".gallery");

const galleryItem = galleryItems.map(
  ({ preview, original, description }) => {
    return `<li class ="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class ="gallery__image" src="${preview}" alt="${description}" width="340"/>
    </a>
    </li>`;
  }
);

galleryList.insertAdjacentHTML("beforeend", galleryItem.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
