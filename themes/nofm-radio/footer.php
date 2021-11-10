	</section>
	<footer class="site-footer" role="contentinfo">
		<div class="disclosure">
			<a href="<?php echo home_url(); ?>" title="NoFm Radio">
				<img src="<?php echo get_template_directory_uri().'/images/logo-blanco.png'; ?>" alt="NoFm Radio" width="45" height="45">
			</a>
			<p>
				<a href="<?php echo home_url(); ?>" title="nofm-radio.com">2019 nofm-radio.com®</a>
			</p>
		</div>
		<p>
			Este sitio no tiene fines de lucro con la reproducción o explotación de los fonogramas. No ofrece ningún
			tipo de descarga gratuita ni bajo ningún tipo de cobro.
		</p>
	</footer>
	<!-- <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> -->
	<script type="text/javascript">
		document.addEventListener("DOMContentLoaded", e => {
			if('IntersectionObserver' in window){
				// console.log('>>>IO<<<');
				const observer_options = {root:null,rootMargin:'275px 0px 0px 0px',threshold:1.0}
				const oberver_target = document.querySelector('#main_header_section');
				let check = false;
				let observer = new IntersectionObserver((entries, observer)=>{ 
					entries.forEach(entry=>{
						if(entry.isIntersecting){
							check = true;
							$('#central_header').removeClass('fix-header');
							$('#central_header').addClass('container');
							$("#barra_noticias").css('padding-top', '0px');
						}else{
							$('#central_header').addClass('fix-header');
							$('#central_header').removeClass('container');
							$("#barra_noticias").css('padding-top', '42px');
						}
					})
				 }, );
				observer.observe(oberver_target);
			}
		});
	</script>
	<?php wp_footer(); ?>
</body>
</html>
