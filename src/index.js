//     jquery-value
//     (c) simonfan
//     jquery-value is licensed under the MIT terms.

/**
 * AMD module.
 *
 * @module jquery-value
 */

define(function (require, exports, module) {
	'use strict';

	var $ = require('jquery');


	var get = require('./__jquery-value/get'),
		set  = require('./__jquery-value/set');


	var _jqValue = module.exports = function _jqValue($el, value) {

		if (arguments.length === 1) {
			return get($el);
		} else if (arguments.length === 2) {
			return set($el, value);
		}
	};

	$.prototype.value = function jqValue(value) {
		if (arguments.length === 0) {
			return _jqValue(this);
		} else {
			return _jqValue(this, value);
		}
	};
});
