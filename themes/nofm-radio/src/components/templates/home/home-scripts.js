$(document).ready(function(){
	console.log("load home js");

	const dom_figure = document.getElementById('envivo_figure');
	const dom_logo_day = document.querySelector('.logo_day');
	const dom_day_btn = document.querySelector('.btn_play_live');
	//console.log(dom_day_btn);

	const setLiveImages = ()=>{
		const weekdays = [
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/domingo.jpg",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/lunes.jpg",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/martes.jpg",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/miercoles.jpg",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/jueves.jpg",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/viernes.jpg",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/sabado.jpg"
		];

		const weekday_logo = [
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/logodomingo.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/logolunes.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/logomartes.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/logomiercoles.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/logojueves.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/logoviernes.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/logosabado.png"
		];

		const weekday_play = [
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/playdomingo.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/playlunes.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/playmartes.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/playmiercoles.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/playjueves.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/playviernes.png",
			"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/playsabado.png"
		]

		const the_date = new Date();
		const day_set = new Array();
		const day_num = the_date.getDay();
		day_set.push(weekdays[day_num], weekday_logo[day_num], weekday_play[day_num]);
		return day_set;
	}

	console.log(setLiveImages()[0]);

	$(dom_figure).find('.day_main_background').attr("src", setLiveImages()[0]);
	$(dom_logo_day).attr("src", setLiveImages()[1]);
	$(dom_day_btn).css("background-image", `url(${setLiveImages()[2]})`);

	$(".episodios_list_carousel").bxSlider({
		pager: false,
		auto: true,
		minSlides: 1,
		maxSlides: 12,
		moveSlides: 1,
		slideWidth: 150,
		touchEnabled: false,
		keyboardEnabled:true
	});
});
