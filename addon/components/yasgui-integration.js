import Component from '@ember/component';
import layout from '../templates/components/yasgui-integration';

export default Component.extend({
  layout,
  actions:  {
    setResult() {
      if(this.yasr)
        this.yasr.setResponse(...arguments);
    },
    yasrCallback(yasr) {
      this.set('yasr', yasr);
    }
  }
});
