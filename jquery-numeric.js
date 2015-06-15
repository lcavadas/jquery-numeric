/*!
 * Numeric.js Jquery extension v0.1.0
 * https://github.com/lcavadas/jquery-numeric
 *
 * Copyright 2012, Luís Serralheiro
 */
(function ($) {
	$.fn.numeric = function (opt) {
	
		var that=this;
		var opts = {max: Number(this.attr('max')), min: Number(this.attr('min')), decimal: true};
		$.extend(opts, opt);
	
		var currentNumber;
	
		this.bind('keypress paste drop', function (e) {
			currentNumber = that.val();
	
			var validate = function (numberToValidate, defaultNumber) {
				if (!isNaN(numberToValidate) && numberToValidate <= opts.max && numberToValidate >= opts.min) {
					that.val(opts.decimal ? numberToValidate : Number(numberToValidate).toFixed(0));
				} else {
					that.val(defaultNumber);
				}
			};
	
			window.setTimeout(function () {
				validate(that.val(), currentNumber)
			}, 1);
		});
	};
}(jQuery));
