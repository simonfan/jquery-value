(function (name, factory) {

	var mod = typeof define !== 'function' ?
		// node
		'.././src' :
		// browser
		'jquery-value',
		// dependencies for the test
		deps = [mod, 'should', 'jquery'];

	if (typeof define !== 'function') {
		// node
		factory.apply(null, deps.map(require));
	} else {
		// browser
		define(deps, factory);
	}

})('test', function(jqValue, should, $) {
	'use strict';

	describe('jqValue basics', function () {

		beforeEach(function () {
			this.$fixture = $('#fixture');
		})

		it('div', function () {

			this.$fixture.find('div')
				.value().should.eql('div-value');

			this.$fixture.find('div')
				.value('some-other-div-value')
				.value().should.eql('some-other-div-value');

		});

		it('input[type="text"]', function () {

			var $input = this.$fixture.find('input[type="text"]');

			$input.value().should.eql('input-value')


			$input
				.value('some-other-input-value')
				.value().should.eql('some-other-input-value');


			$input.val().should.eql($input.value());
		});

		it('input[type="checkbox"]', function () {

			var $checkboxes = this.$fixture.find('input[type="checkbox"]');

			$checkboxes
				.value()
				.should.eql(['B', 'D']);

			$checkboxes
				.value('A')
				.value()
				.should.eql(['A']);

			// demo for how common .val works
			// in setting:
			$checkboxes.val('D'); // -> modifies the checkboxes' value attribute
			$checkboxes.map(function () {
				return $(this).val();
			}).get().should.eql(['D', 'D', 'D', 'D', 'D']);

			// in reading:
			$checkboxes.val().should.eql('D') // -> gets only the first checkbox's value
		});

		it('input[type="radio"]', function () {

			var $radio = this.$fixture.find('input[type="radio"]');

			$radio
				.value()
				.should.eql('C');

			$radio
				.value('D')
				.value().should.eql('D');

			// demo for default .val() method
			// reading
			$radio
				.val()
				.should.eql('A');

			// setting
			$radio
				.val('D');

			$radio.map(function () {
				return $(this).val();
			}).get().should.eql(['D', 'D', 'D', 'D', 'D']);
		});

	});
});
