$(document).ready(function(){
	console.log('single podcasts');

	Howler.autoUnlock = false;

	const utils = {
		formatTime: function (secs) {
			var minutes = Math.floor(secs / 60) || 0;
			var seconds = (secs - minutes * 60) || 0;
			return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
		},
		updateTimeTracker: function () {
			var self = this;
			var seek = sound.seek() || 0;
			var currentTime = utils.formatTime(Math.round(seek));

			$('#timer').text(currentTime);
			progress.style.width = (((seek / self.duration()) * 100) || 0) + '%';

			if (self.playing()) {
				requestAnimationFrame(utils.updateTimeTracker.bind(self));
			}
		}
	};

	let audio_url = $('#btn_ep_play').attr('data-source');
	let audioPlayed = false;

	let audio = new Howl({
		src: [audio_url],
		html5:false,
		onplay: ()=>{
			audioPlayed = true;
			$('#leading_player_icon').find('use').attr('href', '#ic_pause');
		},
		onpause:()=>{
			$('#leading_player_icon').find('use').attr('href', '#ic_play');

		},
		onend:()=>{
			$('#leading_player_icon').find('use').attr('href', '#ic_play');
		}
	});

	$('#btn_ep_play').on('click', function(){
		console.log('click play');
		$(this).toggleClass('playing');
		if($(this).hasClass('playing')){
			audio.play();
		}else{
			audio.pause();
		}
	});

	$('#btn_ep_rwd').on('click', function(){
		let current_position = audio.seek();
		audio.seek(current_position - 10);
		if(audio.seek() <= 0){
			audio.seek(0);
		}
	});

	$('#btn_ep_fwd').on('click', function(){
		let current_position = audio.seek();
		audio.seek(current_position + 30);
		if(audio.seek() >= audio.duration()){
			audio.seek(0);
		}
	});

});//End document ready
