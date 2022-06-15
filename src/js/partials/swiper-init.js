$(window).on('load', function () {
	let productsSlider = document.querySelectorAll('.__js_slider-products');

	if (productsSlider.length > 0) {
		productsSlider.forEach(elem => {
			var slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 5,
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: true,
					pauseOnMouseEnter: true
				},
				pagination: {
					type: 'bullets',
					bulletClass: 'slider-nav__pagi-item',
					bulletActiveClass: 'slider-nav__pagi-item-active',
					clickable: true,
					el: '.pagi-mob',
				},
				breakpoints: {
					1080: {
						pagination: {
							el: '.pagi-desk',
						}
					}
				},
				on: {
					slideChange: function() {
						switch (this.realIndex) {
							case 0:
								$('.first-screen__title span').text('Lavazza LB 1100');
								break;
							case 1:
								$('.first-screen__title span').text('Lavazza Lep Matinee');
								break;
							case 2:
								$('.first-screen__title span').text('Lavazza LB 1100');
								break;
							case 3:
								$('.first-screen__title span').text('Lavazza Blue 951');
								break;
						}
					},
				}
			});
		});
	}
});