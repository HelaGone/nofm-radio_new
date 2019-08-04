$(document).ready(function(){
	console.log('single episodios');

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
			console.log('PLAYING...');
			audioPlayed = true;
			let time = Math.round(audio.duration);
			$('#leading_player_icon').find('use').attr('href', '#ic_pause');
		},
		onpause:()=>{
			console.log('PAUSED...');
			$('#leading_player_icon').find('use').attr('href', '#ic_play');

		},
		onend:()=>{
			console.log('ENDED...');
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

});//End document ready