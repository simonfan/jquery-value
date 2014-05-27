/**
 * @module jquery.filler
 * @submodule element
 */

define(function (require, exports, module) {
	'use strict';

	var $ = require('jquery');

	/**
	 * Holds the html tag jqValueSetters.
	 *
	 * @class jqValueSetters
	 * @static
	 */
	var jqValueSetters = {
		default: function ($el, value) {
			return $el.html(value);
		},
		INPUT: function ($el, value) {
			/**
			 * intercept only filling for checkboxes and radios
			 * as the default jquery .val() method sets the checkboxes and radio input
			 * values instead of checking them (if the value is not passed in as an array)
			 */
			var type = $el.prop('type');

			if (type === 'checkbox' || type === 'radio') {
				value = $.isArray(value) ? value : [value];
			}

			return $el.val(value);
		},
		SELECT: function ($el, value) {
			return $el.val(value);
		},
		IMG: function ($el, value) {
			// trigger a change event when changing the image src
			return $el.prop('src', value).trigger('change', value);
		},

		TEXTAREA: function ($el, value) {
			return $el.val(value);
		},
	};


	/**
	 * Generates a filler function.
	 *
	 * @method jqValueSet
	 * @param $el {jQuery} The element on which perform task
	 */
	module.exports = function jqValueSet($el, value) {

		// [2] loop through the $el
		$el.each(function (index, el) {

			var $el = $(el);

			// [2.1] get $el tagName
			var tagName = $el.prop('tagName');


			var set = jqValueSetters[tagName] || jqValueSetters['default'];
			set($el, value);
		});

		return $el;
	};
});
