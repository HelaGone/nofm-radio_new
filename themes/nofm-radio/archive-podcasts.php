<?php get_header(); 
/*
 * Los podcasts no necesitan estar ordenados por programa. 
 * En el archivo de los programas, están los podcasts ordenados por programa
*/
	if(have_posts()):
		while(have_posts()):
			the_post();
			$show_id = get_post_meta($post->ID, '_podcast_show', true);
			$programa = get_post($show_id); ?>
				<h2><?php echo esc_html($programa->post_title); ?></h2>
<?php		
		endwhile;
	endif; ?>

<?php get_footer(); ?>