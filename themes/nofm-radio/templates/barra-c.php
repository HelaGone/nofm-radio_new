<?php 
	global $post;
	$cover_posts_c = bt_get_co_posts('co_barra_c_option');
	if(is_array($cover_posts_c)&&!empty($cover_posts_c)): 
		$cat = get_the_category($cover_posts_c[0]->ID); ?>
		<section id="barra_c_section" class="home_section">
			<h2 class="section_title">
				<a href="<?php echo get_category_link($cat[0]->term_id); ?>">
					Recomendaciones
				</a>
			</h2>
		<?php		
				$count=0;
				foreach($cover_posts_c as $post):
					if($count==0): ?>
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
								<h3 class="fig_title">
									<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php echo esc_html($post->post_title); ?>
									</a>
								</h3>
								<p><?php echo get_the_excerpt($post->ID); ?></p>
							</figcaption>
						</figure>
			<ul class="barra_list">
		<?php
					elseif($count > 0 && $count < count($cover_posts_c)): ?>
						<li>
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
									<h3 class="fig_title">
										<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
											<?php echo esc_html($post->post_title); ?>
										</a>
									</h3>
								</figcaption>
							</figure>	
						</li>
		<?php
					endif;
					$count++;		
				endforeach; ?>
			</ul>
		</section>
<?php		
	endif;?>