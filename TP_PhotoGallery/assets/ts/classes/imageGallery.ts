import ImageItem from "./imageItem.js";

export default class ImageGallery {
    private images: ImageItem[] = [];
    private currentIndex: number = 0;

    constructor(imagesData: ImageItem[]) {
        this.images = imagesData;
    }

    get currentImage(): ImageItem {
        return this.images[this.currentIndex];
    }

    setCurrentImage(index: number): void {
        this.currentIndex = index;
    }

    previousImage(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    nextImage(): void {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
        }
    }
}