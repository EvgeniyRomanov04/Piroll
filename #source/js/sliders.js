if($('.slider__body').length>0){
	$('.slider__body').slick({
		//autoplay: true,
		//infinity: false,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow:'<button type="button" class="slick-next">Next Project</button>',
		prevArrow:'<button type="button" class="slick-prev">Previous Project</button>',
		responsive: [{
			breakpoint: 768,
			settings: {

			}
		}]
	})
} else if($('.projects__body').length>0){
	$('.projects__body').slick({
		//autoplay: true,
		//infinity: false,
		dots: true,
		arrows: true,
		accessibility: false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow:'<button type="button" class="slick-next"><strong>Next <span>Project</span></strong></button>',
		prevArrow:'<button type="button" class="slick-prev"><strong>Previous <span>Project</span></strong></button>',
		responsive: [{
			breakpoint: 768,
			settings: {

			}
		}]
	})
}