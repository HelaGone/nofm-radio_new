<?php get_header(); ?>
	<?php 
		if(have_posts()):
			while(have_posts()):
				the_post();
				echo do_shortcode("[lbg_audio6_html5_shoutcast settings_id='2']");
			endwhile;
		endif;
	?>
<?php get_footer(); ?>
