$(document).ready(function () {

	// knockout viewmodel //

	function vm() {
		var self = this;
		self.pathway = ko.observable('');
		self.nutrient = ko.observable('carbs');
		self.celltype = ko.observable('brain');
	}
	
	ko.applyBindings(new vm());


	// lazy load carousel images //

	$('.carousel').on('slide.bs.carousel', function (e) {
		var $nextImage = $(e.relatedTarget).find('img');

		var src = $nextImage.data('lazy-load-src');

		if (typeof src !== "undefined" && src != "") {
			$nextImage.attr('src', src)
			$nextImage.data('lazy-load-src', '');
		}
	});
});