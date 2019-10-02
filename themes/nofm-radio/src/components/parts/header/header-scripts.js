$(document).ready(function(){
	if('IntersectionObserver' in window){
		// console.log('>>>IO<<<');
		const observer_options = {root:null,rootMargin:'275px 0px 0px 0px',threshold:1.0}
		const oberver_target = document.querySelector('#main_header_section');
		let check = false;
		let observer = new IntersectionObserver((entries, observer)=>{ 
			entries.forEach(entry=>{
				//console.log(entry.isIntersecting);
				if(entry.isIntersecting){
					// console.log('unfix');
					check = true;
					$('#central_header').removeClass('fix-header');
					$('#central_header').addClass('container');
					$('.wide_wrapper').removeClass('paddingTop');
				}else{
					$('#central_header').addClass('fix-header');
					$('#central_header').removeClass('container');
					$('.wide_wrapper').addClass('paddingTop');
				}
			})
		 }, );
		observer.observe(oberver_target);
	}
});