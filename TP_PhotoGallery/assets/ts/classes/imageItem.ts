export default class ImageItem {
  private static _count: number = 0;
  readonly _id: number;
  readonly _imageUrl: string
  readonly _imageTitle: string
  readonly _imageDescription: string

  constructor(imageUrl: string, imageTitle: string, imageDescription: string) {
    this._id = ++ImageItem._count;
    this._imageUrl = imageUrl;
    this._imageTitle = imageTitle;
    this._imageDescription = imageDescription;
  }

  get id(): number {
    return this._id;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get imageTitle(): string {
    return this._imageTitle;
  }

  get imageDescription(): string {
    return this._imageDescription;
  }
}

