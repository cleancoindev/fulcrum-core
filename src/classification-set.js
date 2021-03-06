import Classification from './elements/classification';
import DateUtils from './utils/date-utils';

export default class ClassificationSet {
  constructor(attributes) {
    this.updateFromAPIAttributes(attributes);
  }

  updateFromAPIAttributes(attrs) {
    const attributes = attrs || {};

    this._id = attributes.id;
    this._name = attributes.name;
    this._description = attributes.description;
    this._itemsJSON = attributes.items || [];
    this._version = attributes.version;
    this._createdAt = DateUtils.parseISOTimestamp(attributes.created_at);
    this._updatedAt = DateUtils.parseISOTimestamp(attributes.updated_at);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get version() {
    return this._version;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get items() {
    if (!this._items) {
      this._items = [];

      for (const item of this._itemsJSON) {
        this._items.push(new Classification(null, item));
      }
    }

    return this._items;
  }

  toJSON() {
    const json = {};

    json.id = this.id || null;
    json.name = this.name || null;
    json.description = this.description || null;
    json.items = this._itemsJSON || null;
    json.version = this.version;
    json.created_at = DateUtils.formatISOTimestamp(this.createdAt);
    json.updated_at = DateUtils.formatISOTimestamp(this.updatedAt);

    return json;
  }
}
