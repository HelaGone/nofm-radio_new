<?php 
	global $post;
	$cover_posts_c = bt_get_co_posts('co_barra_c_option');
	if(is_array($cover_posts_c)&&!empty($cover_posts_c)): 
		$cat = get_the_category($cover_posts_c[0]->ID); ?>
		<section id="barra_c_section" class="home_section container">
			<h2 class="section_title fjalla_font">
				<a href="<?php echo get_category_link($cat[0]->term_id); ?>" title="<?php echo esc_attr($cat[0]->name); ?>">
					<?php echo esc_html($cat[0]->name); ?>
				</a>
			</h2>
		<?php		
				$count=0;
				foreach($cover_posts_c as $post):
					$p_cat = get_the_category($post->ID);
					$cat_link = get_category_link($p_cat[0]->term_id);
					if($count==0): ?>
						<figure class="fig_object big_post">
							<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php 
									if(has_post_thumbnail($post->ID)): 
										if(wp_is_mobile()): ?>
											<img src="<?php echo get_the_post_thumbnail_url($post->ID, 'square_mid'); ?>" width="420" height="420">
								<?php 
										else: ?>
											<img src="<?php echo get_the_post_thumbnail_url($post->ID, 'large'); ?>" width="1024" height="576">
								<?php
										endif;
									else: ?>
										<img src="<?php echo get_template_directory_uri().'/images/logo_redondo.png'; ?>" width="521" height="521">
								<?php		
									endif; ?>
							</a>
							<figcaption class="fig_caption">
								<h3 class="fig_title fjalla_font">
									<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php echo esc_html($post->post_title); ?>
									</a>
								</h3>
							</figcaption>
						</figure>
				<div class="section_double">
		<?php
					elseif($count > 0 && $count < count($cover_posts_c)): ?>
						<figure class="fig_object">
							<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php 
									if(has_post_thumbnail($post->ID)): ?>
										<img src="<?php echo get_the_post_thumbnail_url($post->ID, 'square_mid'); ?>" width="420" height="420">
								<?php 
									else: ?>
										<img src="<?php echo get_template_directory_uri().'/images/logo_redondo.png'; ?>" width="521" height="521">
								<?php		
									endif; ?>
							</a>
							<figcaption class="fig_caption">
								<h3 class="fig_title fjalla_font">
									<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php echo esc_html($post->post_title); ?>
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
		<div class="see_more fjalla_font">
			<a href="<?php echo esc_url($cat_link); ?>">Ver más</a>
		</div>
<?php		
	endif;?>