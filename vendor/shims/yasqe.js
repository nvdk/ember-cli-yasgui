(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['YASQE'],
      __esModule: true,
    };
  }

  define('yasqe', [], vendorModule);
})();
