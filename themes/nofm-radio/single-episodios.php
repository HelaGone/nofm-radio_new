<?php get_header(); ?>
<section id="single_section">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post(); 
				$episode_duration = get_post_meta($post->ID, '_episodio_duration', true);
				$episode_url = get_post_meta($post->ID, '_episodio_url', true);
				$episode_show_id = get_post_meta($post->ID, '_episodio_show', true);
				
				$programa = get_post($episode_show_id);
				// echo '<pre>';
				// 	print_r($programa);
				// echo '</pre>';
				?>
				<article id="<?php echo esc_attr($post->ID); ?>" class="single_article">
					<figure class="single_episode_figure">
						<?php the_post_thumbnail(); ?>
						<figcaption>
							<h2><?php the_title(); ?></h2>	
						</figcaption>
					</figure>
					<div class="_">
						
					</div>
				</article>

				<ul>
					<li><?php echo esc_html(bt_seconds_to_human_readable($episode_duration)); ?></li>
					<li><?php echo esc_html($episode_url); ?></li>
					<li><?php echo esc_html($programa->post_title); ?></li>
				</ul>

	<?php
			endwhile;
		endif; ?>
</section>

<?php get_sidebar(); ?>

<?php get_footer(); ?>