<?php get_header(); 
	global $wp_query;
	// echo '<pre>';
	// 	print_r(  );
	// echo '</pre>';
/*
 * Los podcasts no necesitan estar ordenados por programa. 
 * En el archivo de los programas, están los podcasts ordenados por programa
*/
	if(have_posts()): 
		$type = $wp_query->queried_object->label; 
		$attach = bt_get_imageby_id(30994, 'square_mid'); ?>
		<section id="archive_episodios">
			<figure class="fig_object">
				<img src="<?php echo $attach; ?>" alt="category cover">
				<figcaption class="fig_caption">
					<h1 class="fig_title"><?php echo esc_html($type); ?></h1>
				</figcaption>
			</figure>
			<ul class="episode_list">
				<?php
					while(have_posts()):
						the_post();
						$show_id = get_post_meta($post->ID, '_episodio_show', true);
						$programa = get_post($show_id); ?>
						<li class="episode_item">
							<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('square_small'); ?></a>
							<div class="ep_info">
								<h2>
									<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
								</h2>
								<h4>
									<a href="<?php echo get_the_permalink($programa->ID); ?>"><?php echo esc_html($programa->post_title); ?></a>
								</h4>
							</div>
						</li>
				<?php		
					endwhile; ?>
			</ul>
		</section>
<?php			
	endif; ?>

<?php get_footer(); ?>