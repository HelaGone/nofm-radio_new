<?php get_header(); 
	if(have_posts()):
		while(have_posts()):
			the_post();
			$show_id = get_post_meta($post->ID, '_podcast_show', true);
			$audio_url = get_post_meta($post->ID, '_podcast_url', true);
			the_title();
			$programa = get_post($show_id);

			the_post_thumbnail();

			// echo '<pre>';
			// 	print_r($programa);
			// echo '</pre>';

			the_content(); ?>

			<audio controls="true">
				<source src="<?php echo $audio_url; ?>" type="audio/mpeg">
			</audio>
	<?php
		endwhile;
	endif;		

?>

<?php get_footer(); ?>