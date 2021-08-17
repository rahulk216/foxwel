document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('gallery-slider') != null) {
		new Splide('#gallery-slider', {
			width: '100%',
			arrows: false,
			autoplay: true,
			infinite: true,
		}).mount();
	}
	if (document.getElementById('team-slider') != null) {
		new Splide('#team-slider', {
			width: '100%',
			arrows: false,
			autoplay: true,
			infinite: true,
		}).mount();
	}
});
