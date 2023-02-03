"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageItem {
    constructor(imageUrl, imageTitle, imageDescription) {
        this.imageUrl = imageUrl;
        this.imageTitle = imageTitle;
        this.imageDescription = imageDescription;
        this._id = ++ImageItem._count;
    }
    get id() {
        return this._id;
    }
    get imageUrl() {
        return this.imageUrl;
    }
    get imageTitle() {
        return this.imageTitle;
    }
    get imageDescription() {
        return this.imageDescription;
    }
}
exports.default = ImageItem;
ImageItem._count = 0;
