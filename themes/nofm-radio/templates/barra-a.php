<?php 
	global $post;
	$cover_posts_a = bt_get_co_posts();
	if(is_array($cover_posts_a)&&!empty($cover_posts_a)): ?>
		<section id="barra_a_section">
		<?php		
				foreach($cover_posts_a as $post): ?>
					<figure class="fig_object">
						<a href="<?php echo get_permalink($post->ID); ?>">
							<?php 
								if(has_post_thumbnail($post->ID)): ?>
									<img src="<?php echo get_the_post_thumbnail_url($post->ID, 'square_small'); ?>">
							<?php 
								else: ?>
									<img src="<?php echo get_template_directory_uri().'/images/logo_redondo.png'; ?>">
							<?php		
								endif; ?>
						</a>
						<figcaption class="fig_caption">
							<h2 class="fig_title">
								<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
									<?php echo esc_html($post->post_title); ?>
								</a>
							</h2>
							<p><?php echo get_the_excerpt($post->ID); ?></p>
						</figcaption>
					</figure>
		<?php				
				endforeach; ?>
		</section>
<?php		
	endif;?>