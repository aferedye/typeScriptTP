export default class ImageGallery {
    constructor(imagesData) {
        this.images = [];
        this.currentIndex = 0;
        this.images = imagesData;
    }
    get currentImage() {
        return this.images[this.currentIndex];
    }
    setCurrentImage(index) {
        this.currentIndex = index;
    }
    previousImage() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }
    nextImage() {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
        }
    }
}
