'use strict';

module.exports = {
  name: require('./package').name,
  included: function included(app) {
    this._super.included.apply(this, app);

    app.import('node_modules/yasgui-yasqe/dist/yasqe.bundled.min.js');
    app.import('node_modules/yasgui-yasqe/dist/yasqe.css');
    app.import('node_modules/yasgui-yasr/dist/yasr.bundled.min.js');
    app.import('node_modules/yasgui-yasr/dist/yasr.css');
  }
};
