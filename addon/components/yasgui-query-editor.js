/* global YASQE */
import Component from '@ember/component';
import layout from '../templates/components/yasgui-query-editor';
export default Component.extend({
  layout,
  init() {
    this._super(...arguments);
    this.endpoint = 'http://dbpedia.org/sparql';
  },
  didUpdateAttrs() {
    this.yasqe.options.sparql.endpoint = this.endpoint;
  },
  didInsertElement() {
    const yasqe =  YASQE(this.element, {
	    sparql: {
		    showQueryButton: true,
        endpoint: this.endpoint
      }
    });
    this.set('yasqe', yasqe);
    if (this.resultHandler) {
      this.yasqe.options.sparql.callbacks.complete = this.resultHandler;
    }
  }
});
