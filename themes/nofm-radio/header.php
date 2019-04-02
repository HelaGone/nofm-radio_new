<!DOCTYPE html>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<title><?php wp_title(); ?></title>
	<link rel="shortcut icon" href="<?php echo THEMEPATH; ?>images/favicon.ico">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1, height=device-height">
	<meta name="HandheldFriendly" content="true"/>
	<meta http-equiv="cleartype" content="on"/>
	<meta name="theme-color" content="#000"/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<!-- Start wp_head -->
	<?php wp_head(); ?>
	<!-- End wp_head -->
</head>
<body <?php body_class(); ?>>
	<header id="main_site_header">
		<div class="social_network_header">
			<div id="social_subheader">
				<h2>Conecta con nosotros</h2>
				<button id="close_social" class="">X</button>
			</div>
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
		</div>

		<div id="central_header">
			<div id="btn_menu" class="btn_menu_container header_item">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
			<div id="logo" class="header_item">
				<a href="<?php echo esc_url(home_url()); ?>"></a>
			</div>
			<div id="header_player" class="header_item">
				<a href="http://localhost/~cube/nofm-radio.com/player/" target="_blank" rel="noopener follow">Play</a>
				<!-- <button id="btn_open_player">PLAY</button> -->

				<?php 
					//echo do_shortcode("[lbg_audio6_html5_shoutcast settings_id='2']");
				?>

			</div>
		</div>

		<nav id="type_menu">
			<?php wp_nav_menu( array( 'theme_location' => 'type-menu' ) ); ?>
		</nav>
	</header>
	<!-- <nav class="main_navigation">
		<?php //wp_nav_menu( array( 'theme_location' => 'my-custom-menu', 'container_class' => 'custom-menu-class' ) ); ?>
	</nav> -->
		
			
