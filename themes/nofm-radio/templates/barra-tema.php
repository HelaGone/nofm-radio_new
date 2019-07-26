<?php 
	global $post;
	$posts_barra_temas = bt_get_co_tema_posts('co_barra_temas_option');
	if(is_array($posts_barra_temas)&&!empty($posts_barra_temas)): ?>
		<section id="barra_tema_section" class="home_section container">
		<?php
			$count = 0;
			foreach($posts_barra_temas as $key => $post):
				echo ($key == 0) ? '<h2 class="section_title">'.esc_html($post->name).'</h2>' : '';
				if($key>0):
					$attachment_meta = bt_get_attachment(get_post_thumbnail_id($post->ID));
					if($count == 1): ?>
						<figure class="fig_object big_post">
							<?php
								$image_size = (wp_is_mobile()) ? 'rect_mid' : 'rect_large';
								if(has_post_thumbnail()): ?>
									<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<img src="<?php bt_post_attachment_image_url($post->ID, $image_size); ?>" alt="<?php echo esc_attr($attachment_meta['alt']); ?>">
									</a>
							<?php
								endif; ?>
							<figcaption class="fig_caption">
								<h3 class="fig_title">
									<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>"><?php echo esc_html($post->post_title); ?></a>
								</h3>
							</figcaption>
						</figure>
						<ul class="middle_list">
				<?php
					elseif($count <= 3 && $count > 1): ?>
							<li>
								<figure class="fig_object">
									<?php 
										$small_image_size = (wp_is_mobile()) ? 'square_mid' : 'square_big';
										if(has_post_thumbnail()): ?>
											<img src="<?php bt_post_attachment_image_url($post->ID, $small_image_size); ?>" alt="<?php echo esc_attr($attachment_meta['alt']); ?>">
									<?php
										endif; ?>
									<figcaption>
										<h5 class="fig_title">
											<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>"><?php echo esc_html($post->post_title); ?></a>
										</h5>
									</figcaption>
								</figure>
							</li>
				<?php
					elseif($count > 3 ):
						echo ($count==4) ? '</ul><ul class="bottom_list">' : ''; ?>
							<li>
								<figure class="fig_object">
									<?php 
										$bottom_image_size = (wp_is_mobile()) ? 'square_mid' : 'square_big';
										if(has_post_thumbnail()): ?>
											<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>">
												<img src="<?php bt_post_attachment_image_url($post->ID, $bottom_image_size); ?>" alt="<?php echo esc_attr($attachment_meta['alt']); ?>">
											</a>
									<?php
										endif; ?>
									<figcaption class="fig_caption">
										<h4 class="fig_title">
											<a href="<?php echo get_permalink($post->ID); ?>" title="<?php echo esc_attr($post->post_title); ?>"><?php echo esc_html($post->post_title); ?></a>
										</h4>
									</figcaption>
								</figure>
							</li>
				<?php
						echo ($count == 5) ? '</ul>' : '';
					endif;
				endif;
				$count++;
			endforeach; ?>
		</section>
<?php
		endif; ?>