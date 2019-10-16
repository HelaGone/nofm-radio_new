<?php 
	global $wp_query, $post;
	$posts_arr = wp_cache_get('barra_recom_wpcache');
	$rev_arr;
	if($posts_arr===false){
		$args = array('post_type' => array('post', 'programas'),'post_status'=>'publish','posts_per_page'=>8,'orderby'=>'date','order'=>'DESC','tag'=>'recomendaciones');
		$posts_arr = new WP_Query($args);
		wp_cache_set('barra_recom_wpcache', $posts_arr, '', 120);
	}

	if($posts_arr->have_posts()):
		$section_tag_name = $posts_arr->query_vars['tag_slug__in'][0];
		$tag_link = get_term_link($section_tag_name, 'post_tag'); 
		$rev_arr = array_reverse($posts_arr->posts);
		$posts_arr->posts = $rev_arr; ?>
		<section id="barra_recomendaciones" class="home_section dynamic_pool container">
			<div class="desk_container">
				<h2 id="lee" class="section_title title_recomend fjalla_font">
					<a href="<?php echo esc_url($tag_link); ?>" title="<?php echo esc_attr($section_tag_name); ?>">
						<?php echo esc_html(strtoupper($section_tag_name)); ?>
					</a>
				</h2>
				<div class="flex_bar_container flex_space">
					<ul class="updated_list">
						<?php
							$count = 0;
							while($posts_arr->have_posts()):
								$posts_arr->the_post();
								$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_medium'; 
								if($count<7): ?>
									<li class="updated_item">
										<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
											<?php the_title(); ?>
										</a>
									</li>
						<?php		
								elseif($count==7): ?>
					</ul>
					<figure class="fig_object">
						<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
							<?php echo (has_post_thumbnail()) ? the_post_thumbnail($img_size) : '<img style="width:480px;" src="'.get_template_directory_uri().'/images/logo_redondo.png" alt="Default Image">'; ?>
						</a>
						<figcaption class="fig_caption">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<h2 class="fig_title fjalla_font"><?php the_title(); ?></h2>
							</a>
						</figcaption>
					</figure>
						<?php		
								endif;
								$count++;
							endwhile; ?>
				</div>
			</div>
		</section>
<?php
	endif; ?>