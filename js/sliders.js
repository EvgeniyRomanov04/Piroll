if($('.testimonials').length>0){
	$('.testimonials').slick({
		//autoplay: true,
		//infinity: false,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		adaptiveHeight: false,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {

			}
		}]
	})
}