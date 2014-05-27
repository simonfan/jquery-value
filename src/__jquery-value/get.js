/**
 * @module bb-model-view
 * @submodule dom-to-model-read
 */
define(function (require, exports, module) {
	'use strict';

	var _ = require('lodash'),
		$ = require('jquery');

	/**
	 * Hash of functions that will return a value
	 * given an jquery $el.
	 * Keyed by tagName
	 *
	 * @property jqValueGetters
	 * @private
	 * @type Object
	 */
	var jqValueGetters = {
		'default': function readDefault($el) {
			return $el.val();
		},

		'DIV': function readDiv($el) {
			return $el.html();
		},

		'INPUT': function readInput($el) {
			if ($el.prop('type') === 'checkbox') {
				return _.map($el.filter(':checked'), function (el) {
					return $(el).val();
				});

			} else {
				return $el.val();
			}
		}
	};

	/**
	 * Takes a selector string and returns the value of it.
	 *
	 * @method jqValueGet
	 * @param selector {String}
	 */
	module.exports = function jqValueGet($el) {

		// [1] retrieve get function
		var tagName = $el.prop('tagName'),
			get = jqValueGetters[tagName] || jqValueGetters['default'];

		// [2] read and return.
		return get($el);
	};
});
