import ImageGallery from "./classes/imageGallery.js";
import ImageItem from "./classes/imageItem.js";
const imageGallery = new ImageGallery([
    new ImageItem('C:/Users/afere/OneDrive/Bureau/M2I/TypeScript/TP_PhotoGallery/assets/img/test1.jpg', 'Image 1', 'Description of Image 1'),
    new ImageItem('C:/Users/afere/OneDrive/Bureau/M2I/TypeScript/TP_PhotoGallery/assets/img/test2.avif', 'Image 2', 'Description of Image 2'),
]);
const previousButton = document.getElementById('previous-button');
previousButton.addEventListener('click', () => {
    imageGallery.previousImage();
    updateCurrentImage();
});
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', () => {
    imageGallery.nextImage();
    updateCurrentImage();
});
const imageList = document.getElementById('image-list');
for (let i = 0; i < imageList.children[0].children.length; i++) {
    const listItem = imageList.children[0].children[i];
    listItem.addEventListener('click', () => {
        imageGallery.setCurrentImage(i);
        updateCurrentImage();
    });
}
const currentImageElement = document.getElementById('current-image');
const imageTitleElement = document.getElementById('image-title');
const imageDescriptionElement = document.getElementById('image-description');
function updateCurrentImage() {
    const currentImage = imageGallery.currentImage;
    currentImageElement.src = currentImage.imageUrl;
    imageTitleElement.textContent = currentImage.imageTitle;
    imageDescriptionElement.textContent = currentImage.imageDescription;
}
