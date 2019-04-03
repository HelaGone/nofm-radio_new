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
					<!-- Image and post title -->
					<figure class="single_episode_figure">
						<?php the_post_thumbnail(); ?>
						<figcaption>
							<button id="btn_ep_play" data-source="<?php echo esc_attr($episode_url); ?>">PLAY</button>
							<!-- <button id="btn_ep_pause">PAUSE</button> -->
							<h2><?php the_title(); ?></h2>	
						</figcaption>
					</figure>
					<!-- Episode Info -->
					<div class="episode_info">
						<time class="ep_info_item"><?php echo esc_html(get_the_date()); ?></time>
						<span class="ep_info_item">Duración: <?php echo esc_html(bt_seconds_to_human_readable($episode_duration)); ?> </span>
					</div>
					<!-- Show info -->
					<div class="show_info">
						<h3>
							<a href="<?php echo get_the_permalink($programa->ID); ?>" title="<?php echo esc_attr($programa->post_title); ?>">
								<?php echo esc_html($programa->post_title); ?>
							</a>
						</h3>
						<p><?php echo get_the_excerpt($programa->ID); ?></p>
					</div>
				</article>

				<ul>
					<li>
					</li>
				</ul>

	<?php
			endwhile;
		endif; ?>
</section>

<?php get_sidebar(); ?>

<?php get_footer(); ?>