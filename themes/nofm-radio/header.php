<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<title><?php wp_title(); ?></title>
		<link rel="shortcut icon" href="<?php echo THEMEPATH; ?>images/favicon.ico">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, maximum-scale=5, minimum-scale=1, height=device-height">
		<meta name="HandheldFriendly" content="true"/>
		<meta http-equiv="cleartype" content="on"/>
		<meta name="theme-color" content="#000a12"/>
		<!-- Preconnect -->
		<link rel="preconnect" href="https://www.google.com/" crossorigin>
		<!-- <link rel="preconnect" href="https://stats.g.doubleclick.net">
		<link rel="preconnect" href="https://pagead2.googlesyndication.com">
		<link rel="preconnect" href="https://adservice.google.com"> -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link rel="preload" href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto+Mono:ital,wght@0,300;0,700;1,300;1,700&display=swap" as="style" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto+Mono:ital,wght@0,300;0,700;1,300;1,700&display=swap" rel="stylesheet">
		<?php 
			if(is_singular()&&is_single()): ?>
				<link rel="preconnect" href="https://i.ytimg.com">
				<link rel="preconnect" href="https://www.youtube.com/">
		<?php 
			endif; ?>
		<link rel="manifest" href="<?php echo site_url().'/manifest.json'; ?>">
		<!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8411953701698334" crossorigin="anonymous"></script> -->
		<link type="application/rss+xml" rel="alternate" title="No FM Radio - Podcast" href="https://nofm-radio.com/feed/podcast/">
		<!-- START wp_head -->
		<?php wp_head(); ?>
		<!-- END wp_head -->

		<!-- CRITICAL CSS -->
		<style type="text/css">
			#main_site_header{
				position: relative;
				margin:0 auto;background-color: #000a12;color:#fff;
			}
			.social_flex_container{display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-between;}
			.social_network_header{position: absolute;z-index: 2;top: 0;left: 0;right: 0;}
			.social_network_header ul{display: flex;flex-wrap: wrap;flex-direction: row;}
			.social_network_header ul li:nth-of-type(2){margin:0 8px;}
			.social_network_header ul li:nth-last-child(2){margin-right:8px;}
			.social_flex_container ul li svg{width: 24px;height: 24px;}
			.social_network_header ul li .social_logos{width: 14px;height: 14px;}
			.social_network_header h2{text-align: center;margin-top:66px;letter-spacing: 8px;}

			#central_header{display: flex;justify-content: space-between;padding:0 8px;align-items: center;background-color:rgba(0,10,18,0.75);border-bottom:2px solid red;}
			#central_header .header_item{vertical-align: middle;}

			.header_fig{position: relative;}
			.header_fig_caption{position: absolute;left: 20px;bottom: 33px;right:20px;}
			.header_fig_caption a{position: absolute;left:0;top: 0;right: 0;bottom: 0;}
			.header_fig_caption .player_container{display: flex;justify-content: flex-start;align-items: center;}
			.header_fig_title{font-size: 34px;line-height:40px;text-shadow: 2px 4px 12px rgba(0,0,0,0.666);}
			.header_fig_caption svg{width:66px;height: auto;background-color: transparent;border:none;flex-shrink: 0;transition: width .25s, height .25s;}
			.header_fig_caption svg:hover{cursor: pointer;}

			.day_main_background{width:100%;min-height:300px;object-fit: cover;object-position: 71%;}

			#type_menu{padding:8px 0 8px 12px;width:90%;}

			#menu-type-menu{display: flex;justify-content: space-between;flex-wrap: wrap;align-items: center;}
			#close_main_menu{position: absolute;right:16px;top:16px;font-size:32px;}
			.main_navigation{position:fixed;left:0;top:0;right:0;bottom:0;z-index:9;overflow:hidden;width:0;background-color:rgba(255,255,255,0.95);}
			.main_navigation img.logo_redondo{width:40%;max-width: 128px;height: auto;position:relative;top:0;left:50%;margin-left: calc(-128px / 2);}
			.main_navigation .main_menu{width:60%;text-align: center;margin:16px auto;}
			.main_navigation .main_menu .menu li{margin:24px 0;border-bottom:1px solid #4f5b62;padding-bottom: 4px;}
			.support_list{display: flex;flex-direction: row;justify-content: center; width: 100%;margin:0 auto;align-items: baseline;}
			.support_list li{margin:0 4px 0 0;}
			.support_list li.patreon{position:relative;bottom:-8px;}
			.support_list li img{max-width: 100px;}
			.btn_menu_container{display: inline-block;cursor: pointer;}

			/*FOOTER*/
			.site-footer{background-color:red;padding:24px 8px;color:black;}
			.site-footer p{font-size: 80%;font-family: 'Roboto Mono', monospace;}
			.site-footer .disclosure{display: flex;flex-direction: row;justify-content: flex-start;align-items: center; }
			.site-footer .disclosure img{max-width: 45px;margin:0 16px 16px 0;}
			@media screen and (min-width: 375px){
				#main_site_header .social_network_header ul li .social_logos{width: 16px;height: 16px;}
			}
			@media screen and (min-width: 568px){
				.header_fig_title{font-size: clamp(3.2rem, 7vw + 1rem, 7rem);line-height: 7rem;}
			}
			@media screen and (min-width: 768px){
				.social_network_header h2{margin-top:0;position: relative;top:-23px;max-width: 666px; left:50%;margin-left: -333px;}
				#menu-type-menu .menu-item{font-size:24px; }
				#logo{width:260px;}

				#envivo_figure .fig_caption div{top:6vh;left:0;padding:32px;}
				#envivo_figure svg{width:110px;height: 110px;}
			}
		</style>

	</head>
		<body <?php body_class(); ?>>
			<header id="main_site_header">
				<div class="social_network_header">
					<div class="social_flex_container">
						<ul>
							<li>
								<a href="https://www.facebook.com/todomenosmiedo/" title="Facebook" target="_blank" rel="noopener">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="24" height="24" fill="#ffffff">
										<path class="cls-fb-w" d="M53.85,0H3.15A3.15,3.15,0,0,0,0,3.15v50.7A3.15,3.15,0,0,0,3.15,57h27.3V35H23V26.33h7.41V20c0-7.37,4.49-11.38,11.06-11.38A62.15,62.15,0,0,1,48.15,9v7.69H43.61c-3.57,0-4.26,1.69-4.26,4.18v5.5H47.9L46.79,35H39.35V57h14.5A3.15,3.15,0,0,0,57,53.85V3.15A3.15,3.15,0,0,0,53.85,0Z"/>
									</svg>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/nofm_radio" title="Twitter" target="_blank" rel="noopener">
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="931 512.833 58 56" enable-background="new 931 512.833 58 56" xml:space="preserve">
										<path fill="#FFFFFF" d="M949.239,564.398c21.889,0,33.858-18.135,33.858-33.859c0-0.514,0-1.028-0.035-1.538c2.329-1.685,4.34-3.77,5.938-6.16c-2.171,0.962-4.475,1.593-6.835,1.873c2.485-1.488,4.343-3.827,5.232-6.582c-2.336,1.385-4.893,2.362-7.557,2.889c-4.508-4.792-12.046-5.025-16.837-0.517c-3.09,2.906-4.401,7.237-3.443,11.37c-9.567-0.48-18.481-4.999-24.524-12.433c-3.159,5.436-1.545,12.392,3.684,15.884c-1.894-0.055-3.747-0.566-5.401-1.489c0,0.049,0,0.101,0,0.151c0.001,5.664,3.995,10.542,9.547,11.665c-1.752,0.478-3.591,0.548-5.374,0.203c1.559,4.848,6.026,8.168,11.117,8.266c-4.212,3.311-9.419,5.109-14.777,5.102c-0.947,0-1.893-0.059-2.833-0.17c5.442,3.491,11.774,5.344,18.239,5.336"/>
									</svg>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/nofm_radio/" title="Instagram" target="_blank" rel="noopener">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 32 32" version="1.1" fill="#ffffff">
									  <g id="surface113316">
									    <path style="fill:none;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke:#fff;stroke-opacity:1;stroke-miterlimit:10;" d="M 7.546875 25 L 18.453125 25 C 22.070312 25 25 22.070312 25 18.453125 L 25 7.546875 C 25 3.929688 22.070312 1 18.453125 1 L 7.546875 1 C 3.929688 1 1 3.929688 1 7.546875 L 1 18.453125 C 1 22.070312 3.929688 25 7.546875 25 Z M 7.546875 25 "/>
									    <path style="fill:none;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke:#fff;stroke-opacity:1;stroke-miterlimit:10;" d="M 13 7 C 9.6875 7 7 9.6875 7 13 C 7 16.3125 9.6875 19 13 19 C 16.3125 19 19 16.3125 19 13 C 19 9.6875 16.3125 7 13 7 Z M 13 7 "/>
									    <path style=" stroke:none;fill-rule:nonzero;fill:#fff;fill-opacity:1;" d="M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 20.5 4 "/>
									  </g>
									</svg>
								</a>
							</li>
							<li>
								<a href="https://feeds.feedburner.com/nofm-radio/HgNX" title="Feedburner" target="_blank" rel="noopener">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
										<path fill="none" d="M0 0h24v24H0z"/>
										<circle cx="6.18" cy="17.82" r="2.18"/>
										<path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
									</svg>
								</a>
							</li>
						</ul>
						<ul>
							<li class="winamp">
								<a href="//cdn.voscast.com/resources/?key=d3b9d948ce2a095ad198b852a44fa999&c=winamp" target="_blank" rel="noopener" title="Winamp">
									<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="24" viewBox="0 0 120 120" enable-background="new 0 0 120 120" xml:space="preserve">
										<polygon fill="#FFFFFF" points="72,60 72,1 13.083,60 47,60 47,120 106.75,60 "/>
									</svg>
								</a>
							</li>
							<li>
								<a href="https://tunein.com/radio/NoFM-Radio-s167908/" target="_blank" rel="noopener" title="TuneIn">
									<svg version="1.1" id="logoTSharp" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
										<path fill="#FFFFFF" d="M20.431,7.83c0-0.079-0.065-0.143-0.144-0.143l0,0h-0.72c-0.079,0-0.144,0.064-0.144,0.143l0,0v2.696c0,0.043-0.05,0.057-0.064,0.014l-0.986-2.731c-0.022-0.08-0.096-0.133-0.18-0.129h-0.861c-0.08,0-0.145,0.064-0.145,0.145l0,0v4.749c-0.001,0.08,0.062,0.145,0.143,0.146c0,0,0,0,0.002,0h0.719c0.079,0,0.145-0.064,0.145-0.144c0,0,0-0.001-0.002-0.002v-2.485c0-0.043,0.052-0.058,0.066-0.015l0.977,2.517c0.026,0.082,0.108,0.133,0.193,0.121h0.849c0.08,0,0.145-0.063,0.145-0.143c0-0.001,0-0.002,0-0.002V7.83H20.431z M16.396,11.893c0-0.08-0.064-0.144-0.144-0.144l0,0h-0.611c-0.038,0.002-0.07-0.027-0.071-0.064c0-0.003,0-0.005,0-0.008V8.729c-0.002-0.037,0.027-0.069,0.065-0.071c0.001,0,0.003,0,0.006,0h0.54c0.08,0,0.145-0.065,0.145-0.145l0,0V7.83c0-0.079-0.064-0.143-0.145-0.143l0,0h-2.228c-0.081,0-0.145,0.064-0.145,0.143l0,0v0.683c0,0.08,0.063,0.145,0.145,0.145l0,0h0.538c0.038-0.002,0.07,0.027,0.072,0.064c0,0.002,0,0.005,0,0.007v2.948c0.001,0.038-0.027,0.069-0.064,0.072c-0.002,0-0.005,0-0.008,0h-0.611c-0.079,0-0.143,0.064-0.143,0.144l0,0v0.681c-0.002,0.08,0.061,0.145,0.141,0.146c0.002,0,0.002,0,0.002,0h2.372c0.079,0,0.144-0.064,0.144-0.144c0,0,0-0.001,0-0.002V11.893z M9.964,8.765H1.186c-0.048,0-0.087,0.04-0.087,0.09v9.885c0,0.049,0.039,0.091,0.087,0.091h8.688c0.05,0,0.09-0.042,0.09-0.091V8.765z M23.981,4.632v11.142c0,0.299-0.241,0.539-0.538,0.539H11.041v3.056c0,0.299-0.24,0.538-0.538,0.538H0.557c-0.297,0-0.539-0.239-0.539-0.538V8.226c0-0.298,0.242-0.539,0.539-0.539h9.407V4.632c0-0.298,0.24-0.539,0.539-0.539h12.941C23.74,4.093,23.981,4.334,23.981,4.632z M7.027,11.425v0.719c0,0.079-0.064,0.144-0.143,0.144H5.986c-0.038-0.002-0.07,0.027-0.073,0.064c0,0.002,0,0.005,0,0.008v3.81c0,0.079-0.064,0.142-0.143,0.143H5.05c-0.079-0.001-0.142-0.063-0.144-0.143v-3.81c0.003-0.038-0.026-0.07-0.064-0.072c-0.003,0-0.004,0-0.007,0H3.937c-0.081,0-0.145-0.064-0.145-0.144v-0.719c0-0.08,0.064-0.144,0.145-0.144h2.947C6.963,11.281,7.027,11.346,7.027,11.425z"/>
									</svg>
								</a>
							</li>
							<li>
								<a href="//cdn.voscast.com/resources/?key=d3b9d948ce2a095ad198b852a44fa999&c=wmp" target="_blank" rel="noopener" title="Media Player">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
										<path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
									</svg>
								</a>
							</li>
							<li>
								<a href="//cdn.voscast.com/resources/?key=d3b9d948ce2a095ad198b852a44fa999&c=realplayer" target="_blank" rel="noopener" title="Real Player">
									<svg version="1.1" id="svg2" xmlns:svg="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="149.899 107.938 24 24" enable-background="new 149.899 107.938 24 24" xml:space="preserve"
										width="24"
										height="24">
										<g>
											<path fill="#FFFFFF" d="M172.03,114.217c-2.805-2.489-8.086-3.137-10.14-3.137c-5.56,0-11.991,2.548-11.991,6.713c0,4.904,9.169,6.982,11.58,6.899c0.83-0.028,0.344,0.515,0.146,0.847c-0.635,1.074-1.361,2.432-1.527,2.697c-0.154,0.257-0.029,0.705,0.328,0.51c0.473-0.253,7.381-4.439,8.414-5.049C170.786,122.412,176.966,119.096,172.03,114.217z M168.226,121.91c-1.024,0.552-4.759,2.447-4.759,2.447c-0.718,0.419-0.871,0.17-0.693-0.107c0.091-0.138,0.357-0.594,0.66-1.179c0.17-0.328-0.004-0.369-0.108-0.373c-5.821,0-10.393-2.158-10.393-4.743c0-3.029,5.028-4.763,9.003-4.763c2.971,0,5.145,0.415,6.604,1.174C175.474,117.65,168.226,121.91,168.226,121.91z"/>
											<path id="path476" fill="#FFFFFF" d="M166.255,115.076c-0.261-0.066-0.539-0.087-1.021-0.087c-0.747,0-1.693,0.436-2.203,1.054h-0.029l0.249-0.909h-2.8l-1.564,5.821h2.892l0.656-2.435c0.335-1.22,0.946-1.626,2.174-1.626c0.208,0,0.427,0.017,0.643,0.05L166.255,115.076"/>
										</g>
									</svg>
								</a>
							</li>
						</ul>
					</div>
					<h2>
						<a href="<?php echo get_site_url(); ?>" title="Todo menos miedo">
							TODO MENOS MIEDO
						</a>
					</h2>
				</div>
				<section id="main_header_section">
					<figure id="envivo_figure" class="header_fig">
						<img class="day_main_background" src="<?php echo THEMEPATH . 'images/NOFM.svg'; ?>" alt="EN VIVO" width="1920" height="300">
						<figcaption class="header_fig_caption">
							<a href="https://nofmradio.web.app/" title="Abrir Aplicación" target="_blank" rel="noopener" rel="follow"></a>
							<div class="player_container">
								<h2 class="header_fig_title">EN VIVO</h2>
								<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144">
									<g>
										<path fill="#FFFFFF" d="M43.5,138.277c-0.298,0-0.599-0.054-0.889-0.164c-0.97-0.369-1.61-1.299-1.61-2.336V8.222c0-1.038,0.641-1.967,1.61-2.336c0.29-0.11,0.591-0.164,0.889-0.164c0.7,0,1.383,0.294,1.867,0.837l56.806,63.778c0.844,0.948,0.844,2.377,0,3.326L45.367,137.44C44.883,137.983,44.199,138.277,43.5,138.277z"/>
										<path fill="#92000A" d="M43,8.222L99.806,72L43,135.777V8 M43.499,3.222c-0.597,0-1.449,0.106-2.028,0.327C39.532,4.288,38,6.147,38,8.222v127.555c0,2.075,1.532,3.935,3.471,4.673c0.58,0.221,1.307,0.327,1.903,0.327c1.399,0,2.83-0.588,3.797-1.675l56.836-63.777c1.688-1.896,1.704-4.755,0.016-6.651L47.226,4.896C46.258,3.81,44.898,3.222,43.499,3.222L43.499,3.222z"/>
									</g>
								</svg>
							</div>
						</figcaption>
					</figure>
				</section>

				<div id="central_header" class="container">
					<div id="btn_menu" class="btn_menu_container header_item">
						<div class="bar1"></div>
						<div class="bar2"></div>
						<div class="bar3"></div>
					</div>
					<nav id="type_menu" class="header_item">
						<?php wp_nav_menu( array( 'theme_location' => 'type-menu' ) ); ?>
					</nav>
				</div>
			</header>
			<nav class="main_navigation clearfix">
				<button id="close_main_menu">X</button>
				<a href="<?php echo site_url(); ?>" title="NoFMradio">
					<img class="logo_redondo" src="<?php echo get_template_directory_uri().'/images/logo_redondo.png'; ?>" alt="NoFm-Radio Logotipo" loading="lazy">
				</a>
				<!-- <div style="text-align:center;">
					<form role="search" method="get" id="searchform" action="<?php echo esc_url(home_url("/search_gcse/")); ?>">
						<label class="screen-reader-text" for="s">Buscar:</label>
						<input type="text" value="" name="q" id="s" placeholder="Busca sin miedo" autocomplete="off">
						<input type="submit" id="searchsubmit" value="Buscar">
					</form>
				</div> -->
				<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'container_class' => 'main_menu' ) ); ?>
				<ul class="support_list">
					<li class="mone_item patreon">
					    <a href="https://www.patreon.com/NoFMradio" target="_blank" rel="noopener" rel="noopener">
					        <img src="<?php echo get_template_directory_uri().'/images/patreon.png'; ?>" alt="Patreon NoFM" loading="lazy">
					    </a>
					</li>
					<li class="mone_item donate">
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" rel="noopener">
						    <input type="hidden" name="cmd" value="_s-xclick">
						    <input type="hidden" name="hosted_button_id" value="8KBZCV9NSWUQU">
						    <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." style="margin-left:20px; margin-top:10px;">
						    <img alt="Pixel PayPal" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1" >
						</form>
					</li>
					<li class="mone_item telephone">
						Tel: <a href="tel:+5215562748323">62748323</a>
					</li>
				</ul>
			</nav>
			<section class="wide_wrapper">
