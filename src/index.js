import Form from './form';
import Record from './record';
import Element from './elements/element';
import FormValue from './values/form-value';
import Choice from './elements/choice';
import ChoiceList from './choice-list';
import Classification from './elements/classification';
import ClassificationSet from './classification-set';
import ElementFactory from './elements/element-factory';
import RepeatableItemValue from './values/repeatable-item-value';
import RepeatableValue from './values/repeatable-value';
import Feature from './feature';
import FormValues from './values/form-values';
import TextUtils from './utils/text-utils';
import DateUtils from './utils/date-utils';
import NumberUtils from './utils/number-utils';
import ChildElements from './elements/child-elements';
import Condition from './elements/condition';
import CalculatedElement from './elements/calculated-element';
import RepeatableElement from './elements/repeatable-element';
import AudioItemValue from './values/audio-item-value';
import AudioValue from './values/audio-value';
import PhotoItemValue from './values/photo-item-value';
import PhotoValue from './values/photo-value';
import VideoItemValue from './values/video-item-value';
import VideoValue from './values/video-value';

export {Form};
export {Record};
export {Element};
export {FormValue};
export {Choice};
export {ChoiceList};
export {Classification};
export {ClassificationSet};
export {ElementFactory};
export {RepeatableItemValue};
export {RepeatableValue};
export {Feature};
export {FormValues};
export {TextUtils};
export {DateUtils};
export {NumberUtils};
export {ChildElements};
export {Condition};
export {CalculatedElement};
export {RepeatableElement};
export {AudioItemValue};
export {AudioValue};
export {PhotoItemValue};
export {PhotoValue};
export {VideoItemValue};
export {VideoValue};

// const api = {
//   Form: Form,
//   Record: Record,
//   Element: Element,
//   FormValue: FormValue,
//   Choice: Choice,
//   ChoiceList: ChoiceList,
//   Classification: Classification,
//   ClassificationSet: ClassificationSet,
//   ElementFactory: ElementFactory
// };

// const elements = Element.classes();

// for (let prop of Object.keys(elements)) {
//   api[prop] = elements[prop];
// }

// const values = FormValue.classes();

// for (let prop of Object.keys(values)) {
//   api[prop] = values[prop];
// }

// export default api;
