<?php
	global $wp_query, $post;
	$posts_arr = wp_cache_get('barra_podcasts_wpcache');

	if($posts_arr===false){
		$posts_arr = bt_get_posts_by_categ('podcasts', null, 8);
		wp_cache_set('barra_podcasts_wpcache', $posts_arr, '', 120);
	}

	if($posts_arr->have_posts()):
		$section_pt_name = $posts_arr->query_vars['post_type'];
		$pt_link = get_post_type_archive_link($section_pt_name); ?>
		<section id="barra_podcasts" class="home_section dynamic_pool container">
			<div class="desk_container">
				<h2 id="escucha" class="section_title title_eps fjalla_font">
					<a href="<?php echo $pt_link; ?>" title="<?php echo esc_attr($section_pt_name); ?>">
						<?php echo esc_html(strtoupper($section_pt_name)); ?>
					</a>
				</h2>
				<div class="flex_bar_container">
					<?php
						$count = 0;
						while($posts_arr->have_posts()):
							$posts_arr->the_post();
							setup_postdata($post);

							$ep_meta_dur = get_post_meta($post->ID, '_podcasts_duration', true);
							$ep_meta_url = get_post_meta($post->ID, '_podcasts_url', true);
							$ep_meta_pod = get_post_meta($post->ID, '_podcasts_show', true);

							$pod_owner = get_the_title($ep_meta_pod);

							$terms = get_the_terms($post->ID, 'proyecto');
							//debugger($terms);
							$is_decir = false;
							$decir_name = '';
							if(is_array($terms)&&count($terms)>0){
								foreach ($terms as $term) {
									if($term->slug == 'decir-desigualdad'){
										$is_decir = true;
										$decir_name = $term->name;
									}
								}
							}

							$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_medium';
							if($count<1): ?>
								<figure class="fig_object">
									<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php echo (has_post_thumbnail()) ? the_post_thumbnail($img_size) : '<img style="width:480px;" src="'.get_template_directory_uri().'/images/logo_redondo.png" alt="Default Image">'; ?>
									</a>
									<figcaption class="fig_caption">
										<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
											<h2 class="fig_title fjalla_font"><?php the_title(); ?></h2>
										</a>
										<div class="ep_detail">
											<span class="podcast_owner">
												<?php
													if($is_decir): ?>
														<a href="<?php echo get_home_url().'/decirdesigualdades'?>" title="Decir Desigualdad Es">
															<?php echo esc_html($decir_name); ?>
														</a>
												<?php
													else: ?>
														<a href="<?php echo esc_url(get_permalink($ep_meta_pod)); ?>">
															<?php echo esc_html($pod_owner); ?>
														</a>
												<?php
													endif; ?>
											</span>
											<span class="ep_duration">
												| <?php echo esc_html(bt_seconds_to_time($ep_meta_dur)); ?>
											</span>
										</div>
									</figcaption>
								</figure>
								<ul class="updated_list">
					<?php
							else: ?>
									<li class="updated_item">
										<a href="<?php the_permalink(); ?>" title="<?php echo get_the_title($post->ID); ?>" class="fjalla_font">
											<?php the_title(); ?>
										</a>
										<div class="ep_detail">
											<span class="podcast_owner">
												<?php
													if($is_decir): ?>
														<a href="<?php echo get_home_url().'/decirdesigualdades'?>" title="Decir Desigualdad Es">
															<?php echo esc_html($decir_name); ?>
														</a>
												<?php
													else: ?>
														<a href="<?php echo esc_url(get_permalink($ep_meta_pod)); ?>">
															<?php echo esc_html($pod_owner); ?>
														</a>
												<?php
													endif; ?>
											</span>
											<span class="ep_duration">
												| <?php echo esc_html(bt_seconds_to_time($ep_meta_dur)); ?>
											</span>
										</div>
									</li>

					<?php
							endif; ?>
			<?php
					$count++;
					endwhile;
					wp_reset_postdata(); ?>
								</ul>
				</div>
			</div>
		</section>
<?php
	endif; ?>
