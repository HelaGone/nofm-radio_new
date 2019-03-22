<?php get_header(); 
	if(have_posts()):
		while(have_posts()):
			the_post();

			$show_id = get_post_meta($post->ID, '_podcast_show', true);

			the_title();

			$programa = get_post($show_id);

			echo '<pre>';
				print_r($programa);
			echo '</pre>';

			the_content();

		endwhile;
	endif;		

?>

<?php get_footer(); ?>