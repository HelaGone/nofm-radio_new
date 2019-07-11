<!DOCTYPE html>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<title><?php wp_title(); ?></title>
	<link rel="shortcut icon" href="<?php echo THEMEPATH; ?>images/favicon.ico">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1, height=device-height">
	<meta name="HandheldFriendly" content="true"/>
	<meta http-equiv="cleartype" content="on"/>
	<meta name="theme-color" content="#000a12"/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<!-- Start wp_head -->
	<?php wp_head(); ?>
	<!-- End wp_head -->
</head>
<body <?php body_class(); ?>>
	<header id="main_site_header">
		<div class="social_network_header container">
			<ul>
				<li>
					<a href="https://www.facebook.com/todomenosmiedo/">
						<div id="facebook" class="social_logos"></div>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/nofm_radio">
						<div id="twitter" class="social_logos"></div>
					</a>
				</li>
				<li>
					<a href="http://feeds.feedburner.com/nofm-radio/HgNX">
						<div id="feedburner" class="social_logos"></div>
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/nofm_radio/">
						<div id="instagram" class="social_logos"></div>
					</a>
				</li>
			</ul>
			<h2>TODO MENOS MIEDO</h2>
			<div class="voscast_script_players">
				<!--VosCast.com Playlist Files-->
				<script type="text/javascript" src="//cdn.voscast.com/resources/?key=d3b9d948ce2a095ad198b852a44fa999&c=playlist"></script>
				<!--End Playlist Files-->

				<!--VosCast.com SHOUTcast Server Stats-->
				<!-- <script type="text/javascript" src="//cdn.voscast.com/stats/display.js?key=d3b9d948ce2a095ad198b852a44fa999&stats=currentlisteners,songhistory"></script> -->
				<!--End SHOUTcast Server Stats-->
			</div>
		</div>

		<section id="main_header_section" class="container">
			<figure id="envivo_figure" class="fig_object">
				<img class="day_main_background" src="<?php echo esc_url(bt_get_imageby_id(30967, 'square_mid')); ?>" alt="EN VIVO">
				<figcaption class="fig_caption">
					<img class="logo_day" src="">
					<div>
						<h1 class="fig_title">EN<br/>VIVO</h1>
						<button class="btn_play_live"></button>
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
	<!-- <nav class="main_navigation">
		<?php //wp_nav_menu( array( 'theme_location' => 'my-custom-menu', 'container_class' => 'custom-menu-class' ) ); ?>
	</nav> -->