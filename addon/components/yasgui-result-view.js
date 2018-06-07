/* global YASR */
import Component from '@ember/component';
import layout from '../templates/components/yasgui-result-view';

export default Component.extend({
  layout,
  didInsertElement() {
    this.set('yasr', YASR(this.element));
    this.yasrInit(this.yasr);
  }
});
