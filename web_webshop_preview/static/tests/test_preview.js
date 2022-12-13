odoo.define('web.webshop.preview.utils_tests', function (require) {
"use strict";

  var utils = require('web.webshop.preview');
  QUnit.module('web.webshop.preview');
  QUnit.test("Testname", function (assert) {
    assert.expect(1);

    var result = utils.myFunction(someArgument);
    assert.strictEqual(result, expectedResult);

  });
});
