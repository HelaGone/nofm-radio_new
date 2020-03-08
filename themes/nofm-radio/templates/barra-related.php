<?php
	global $post;
	$podcast_id = $post->ID;
	$podcast_name = $post->post_title;
	$args = array(
		'post_type'=>'podcasts',
		'post_status'=>'publish',
		'posts_per_page'=>7,
		'orderby'=>'date',
		'order'=>'DESC',
		'meta_value'=>$post->ID
	);
	$podcasts = new WP_Query($args);
	if($podcasts->have_posts()):
		$type = $podcasts->query_vars['post_type'] ?>
		<h2 class="fjalla_font related_title">
			<a href="<?php echo get_post_type_archive_link($type); ?>">
				<?php echo esc_html(strtoupper($type)); ?>
			</a>
		</h2>
		<div class="episode_pool">
		<?php
			while($podcasts->have_posts()):
				$podcasts->the_post();
				setup_postdata($post);
				$eps_img_size = (wp_is_mobile()) ? 'square_small' : 'thumbnail';
				$ep_meta_dur = get_post_meta($post->ID, '_episodio_duration', true); ?>
				<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
					<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
						<?php the_post_thumbnail($eps_img_size); ?>
					</a>
					<figcaption class="fig_caption">
						<h2 class="fig_title fjalla_font">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php the_title(); ?>
							</a>
						</h2>
						<time><?php echo get_the_date('D, d.m.Y'); ?></time>
						<div class="ep_info">
							<h3 class="fjalla_font">
								<a href="<?php echo esc_url(get_permalink($podcast_id)); ?>" >
									<?php echo esc_html(strtoupper($podcast_name)); ?>
								</a>
							</h3>
							 |
							<span>
								<?php echo esc_html(bt_seconds_to_time($ep_meta_dur)); ?>
							</span>
						</div>
					</figcaption>
				</figure>
		<?php
			endwhile; ?>
		</div>
<?php
	wp_reset_postdata();
	endif; ?>
