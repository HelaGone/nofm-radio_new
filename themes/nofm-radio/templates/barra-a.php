<?php 
	global $post;
	$cover_posts_a = bt_get_co_posts('co_barra_a_option');
	if(is_array($cover_posts_a)&&!empty($cover_posts_a)):
		$cat = get_the_category($cover_posts_a[0]->ID); ?>
		<section id="barra_a_section" class="home_section container">
			<div class="desk_container">
				<h2 class="section_title fjalla_font">
					<a href="<?php echo get_category_link($cat[0]->term_id); ?>">
						<?php echo esc_html(strtoupper($cat[0]->name)); ?>
					</a>
				</h2>
			<?php
				$count=0;
				foreach($cover_posts_a as $post):
					$p_cat = get_the_category($post->ID);
					$cat_link = get_category_link($p_cat[0]->term_id);
					$image_size = (wp_is_mobile()) ? 'square_mid' : 'square_big';
					if($count==0): ?>
						<figure class="fig_object big_post">
							<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php 
									if(has_post_thumbnail($post->ID)): ?>
										<img src="<?php echo get_the_post_thumbnail_url($post->ID, $image_size); ?>">
								<?php
									else: ?>
										<img src="<?php echo get_template_directory_uri().'/images/logo_redondo.png'; ?>">
								<?php		
									endif; ?>
							</a>
							<figcaption class="fig_caption">
								<h3 class="fig_title fjalla_font">
									<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php echo esc_html(strtoupper($post->post_title)); ?>
									</a>
								</h3>
							</figcaption>
						</figure>
			</div>
			<ul class="barra_list">
		<?php
					elseif($count > 0 && $count < 3): ?>
						<li class="barra_item">
							<figure class="fig_object">
								<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
									<?php 
										if(has_post_thumbnail($post->ID)): ?>
											<img src="<?php echo get_the_post_thumbnail_url($post->ID, $image_size); ?>">
									<?php 
										else: ?>
											<img src="<?php echo get_template_directory_uri().'/images/logo_redondo.png'; ?>">
									<?php		
										endif; ?>
								</a>
								<figcaption class="fig_caption">
									<h3 class="fig_title fjalla_font">
										<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
											<?php echo esc_html(strtoupper($post->post_title)); ?>
										</a>
									</h3>
								</figcaption>
							</figure>	
						</li>
		<?php
					elseif($count == 3): ?>
			</ul>
			<div class="desk_container">
						<figure class="fig_object big_post right_align">
							<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php 
									if(has_post_thumbnail($post->ID)):
										$image_size = (wp_is_mobile()) ? 'square_mid' : 'full'; ?>
										<img src="<?php echo get_the_post_thumbnail_url($post->ID, $image_size); ?>">
								<?php 
									else: ?>
										<img src="<?php echo get_template_directory_uri().'/images/logo_redondo.png'; ?>">
								<?php		
									endif; ?>
							</a>
							<figcaption class="fig_caption">
								<h3 class="fig_title fjalla_font">
									<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php echo esc_html(strtoupper($post->post_title)); ?>
									</a>
								</h3>
							</figcaption>
						</figure>
		<?php				
					endif;
					$count++;			
				endforeach; ?>
			</div>
		</section>
		<div class="see_more fjalla_font" height="60">
			<a href="<?php echo esc_url($cat_link); ?>" title="Ver Más">Ver más</a>
		</div>
<?php		
	endif;?>