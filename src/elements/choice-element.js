import Element from './element';
import Choice from './choice';

export default class ChoiceElement extends Element {
  constructor(parent, attributes) {
    super(parent, attributes);

    this.multiple = !!attributes.multiple;
    this.allowOther = !!attributes.allow_other;

    this._choiceFilter = null;
    this._overrideChoices = null;

    this._choiceListID = attributes.choice_list_id;
    this._choices = [];

    // TODO(zhm) the loading needs to be re-worked to support choice lists
    if (attributes.choices) {
      for (const choice of attributes.choices) {
        this._choices.push(new Choice(choice));
      }
    }
  }

  load(dataSource, callback) {
    this._choicesByValue = null;

    if (this._choiceListID) {
      dataSource.getChoiceList(this._choiceListID, (err, choiceList) => {
        // TODO(zhm) Some forms have orphaned choice lists (life sucks)
        // Maybe we should add a parameter to the load() method to throw
        // errors.
        if (err) {
          return callback(err);
        }

        this.choiceList = choiceList;
        this._choices = this.choiceList.choices.slice();

        return callback();
      });
    } else {
      setImmediate(callback);
    }
  }

  get isLengthValidationSupported() {
    return this.multiple;
  }

  get choices() {
    return this._overrideChoices ? this._overrideChoices : this.filteredChoices;
  }

  get choiceFilter() {
    return this._choiceFilter;
  }

  set choiceFilter(choiceFilter) {
    this._choiceFilter = choiceFilter;
  }

  get filteredChoices() {
    const items = this._choices;

    if (!this.choiceFilter) {
      return items;
    }

    const filteredItems = [];

    for (const item of items) {
      for (const filter of this.choiceFilter) {
        if (item.value.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
          filteredItems.push(item);
        }
      }
    }

    return filteredItems;
  }

  get overrideChoices() {
    return this._overrideChoices;
  }

  set overrideChoices(overrideChoices) {
    this._choicesByValue = null;

    if (!overrideChoices || overrideChoices.length < 1) {
      this._overrideChoices = null;
      return;
    }

    const choices = [];

    for (const choiceAttributes of overrideChoices) {
      const choice = new Choice(choiceAttributes);

      choices.push(choice);
    }

    this._overrideChoices = choices;
  }

  get overrideValues() {
    return Object.assign(Object.getOwnPropertyDescriptor(Element.prototype, 'overrideValues'), {
      choiceFilter: this._choiceFilter,
      overrideChoices: this._overrideChoices
    });
  }

  resetOverrides() {
    super.resetOverrides();

    this._choiceFilter = null;
    this._overrideChoices = null;
  }

  choiceByValue(value) {
    if (!this._choicesByValue) {
      this._choicesByValue = {};

      for (const choice of this.choices) {
        this._choicesByValue[choice.value] = choice;
      }
    }

    return this._choicesByValue[value];
  }
}
