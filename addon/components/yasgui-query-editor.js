/* global YASQE */
import Component from '@ember/component';
import layout from '../templates/components/yasgui-query-editor';
export default Component.extend({
  layout,
  init() {
    this._super(...arguments);
    this.endpoint = this.endpoint || 'http://dbpedia.org/sparql';
    this.headers = this.headers || {};
  },
  didUpdateAttrs() {
    this.yasqe.options.sparql.endpoint = this.endpoint;
    this.yasqe.options.sparql.headers = this.headers;
    this._initYasqe(this.yasqe.options);
  },
  didInsertElement() {
    const options = {
      sparql: {
        showQueryButton: true,
        endpoint: this.endpoint,
        headers: this.headers
      }
    };
    this._initYasqe(options);
    if (this.resultHandler) {
      this.yasqe.options.sparql.callbacks.complete = this.resultHandler;
    }
  },
  _initYasqe(options) {
    const yasqe = YASQE(this.element, options);
    this.set('yasqe', yasqe);
  }
});
