<?php get_header(); global $wp_query;?>
<section id="archive_podcasts" class="container archive_section">
<?php
	if(have_posts()): ?>
		<div class="posts_pool">
		<?php
			while(have_posts()):
				the_post(); 
				$image_size_pool = (wp_is_mobile()) ? 'thumbnail' : 'square_mid';
				$ep_meta_dur = get_post_meta($post->ID, '_podcasts_duration', true);
				$ep_meta_pod = get_post_meta($post->ID, '_podcasts_show', true); 
				$pod_owner = ($ep_meta_pod!='') ? get_the_title($ep_meta_pod) : ''; 
				$terms = get_the_terms($post->ID, 'proyecto'); 
				$is_decir = false;
				$decir_name = '';
				foreach ($terms as $term) {
					if($term->slug == 'decir-desigualdad'){
						$is_decir = true;
						$decir_name = $term->name;
					}
				} ?>
				<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
					<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
						<?php the_post_thumbnail($image_size_pool); ?>
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
								<?php
									if($is_decir): ?>
										<a href="<?php echo get_home_url().'/decirdesigualdades'?>" title="Decir Desigualdad Es">
											<?php echo esc_html($decir_name); ?>
										</a>
								<?php
									else: ?>
										<a href="<?php echo esc_url(get_permalink($ep_meta_pod)); ?>" title="Decir Desigualdad Es" target="_blank" rel="noopener">
											<?php echo strtoupper($pod_owner); ?>
										</a>
								<?php
									endif; ?>
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
	endif; ?>
</section>
<?php 
	echo bt_print_pagination();
	get_footer(); ?>