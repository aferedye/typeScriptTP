export default class ImageItem {
    constructor(imageUrl, imageTitle, imageDescription) {
        this._id = ++ImageItem._count;
        this._imageUrl = imageUrl;
        this._imageTitle = imageTitle;
        this._imageDescription = imageDescription;
    }
    get id() {
        return this._id;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    get imageTitle() {
        return this._imageTitle;
    }
    get imageDescription() {
        return this._imageDescription;
    }
}
ImageItem._count = 0;
