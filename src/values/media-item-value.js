export default class MediaItemValue {
  constructor(attributes) {
    this.caption = attributes.caption;
    this.mediaID = attributes[this.mediaKey];
  }

  toJSON() {
    const json = {};

    json.caption = this.caption || null;
    json[this.mediaKey] = this.mediaID || null;

    return json;
  }
}
