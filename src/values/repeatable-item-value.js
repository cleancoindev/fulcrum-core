import Feature from '../feature';
import FormValues from './form-values';
import DateUtils from '../utils/date-utils';
import TextUtils from '../utils/text-utils';

export default class RepeatableItemValue extends Feature {
  constructor(element, item, index) {
    super();

    this.index = index;

    this._element = element;
    this._id = item.id;
    this._createdAt = DateUtils.parseEpochTimestamp(item.created_at);
    this._updatedAt = DateUtils.parseEpochTimestamp(item.updated_at);
    this._formValuesJSON = item.form_values;
    this._version = item.version || 1;
    this._createdByID = item.created_by_id;
    this._updatedByID = item.updated_by_id;
    this._changesetID = item.changeset_id;

    const geometry = item.geometry;

    if (geometry != null && geometry.type === 'Point') {
      this._latitude = geometry.coordinates[1];
      this._longitude = geometry.coordinates[0];
    }
  }

  get element() {
    return this._element;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get version() {
    return this._version;
  }

  set createdAt(createdAt) {
    if (createdAt != null && !(createdAt instanceof Date)) {
      throw new TypeError('createdAt must be a Date');
    }

    this._createdAt = createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  set updatedAt(updatedAt) {
    if (updatedAt != null && !(updatedAt instanceof Date)) {
      throw new TypeError('updatedAt must be a Date');
    }

    this._updatedAt = updatedAt;
  }

  get formValues() {
    if (!this._formValues) {
      this._formValues = new FormValues(this._element, this._formValuesJSON);
    }

    return this._formValues;
  }

  get hasCoordinate() {
    return this._latitude != null && this._longitude != null;
  }

  toJSON() {
    const json = {};

    json.id = this.id;
    json.created_at = DateUtils.formatEpochTimestamp(this.createdAt);
    json.updated_at = DateUtils.formatEpochTimestamp(this.updatedAt);
    json.form_values = this.formValues.toJSON();
    json.geometry = this.geometryAsGeoJSON;

    return json;
  }

  updateTimestamps() {
    const now = new Date();

    if (!this._createdAt) {
      this._createdAt = now;
    }

    this._updatedAt = now;
  }

  get isGeometryEnabled() {
    return this._element.isGeometryEnabled;
  }

  get displayValue() {
    const titleFieldKeys = this._element.titleFieldKeys;
    const titles = [];

    for (const fieldKey of titleFieldKeys) {
      const formValue = this.formValues.get(fieldKey);

      if (formValue) {
        const displayValue = formValue.displayValue;

        if (TextUtils.isPresent(displayValue)) {
          titles.push(displayValue);
        }
      }
    }

    return titles.join(', ');
  }

  get searchableValue() {
    return this.formValues.searchableValue;
  }

  get geometryAsGeoJSON() {
    if (!this.hasCoordinate) {
      return null;
    }

    return {
      type: 'Point',
      coordinates: [ this._longitude, this._latitude ]
    };
  }

  get latitude() {
    return this._latitude;
  }

  set latitude(latitude) {
    this._latitude = latitude;
  }

  get longitude() {
    return this._longitude;
  }

  set longitude(longitude) {
    this._longitude = longitude;
  }

  get changesetID() {
    return this._changesetID;
  }

  get updatedByID() {
    return this._updatedByID;
  }

  get createdByID() {
    return this._createdByID;
  }
}
