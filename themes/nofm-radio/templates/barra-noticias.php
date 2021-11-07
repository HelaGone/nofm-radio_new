<?php
	global $wp_query, $post;
	$noticias = wp_cache_get('barra_noticias_wpcache');
	if($noticias===false){
		$noticias = bt_get_posts_by_categ('post', 'noticias', 8);
		wp_cache_set('barra_noticias_wpcache', $noticias, '', 120);
	}
	if($noticias->have_posts()):
		$section_cat_name = $noticias->query_vars['category_name'];
		$section_cat_id = get_cat_ID($section_cat_name); ?>
		<section id="barra_noticias" class="home_section dynamic_pool container">
			<div class="desk_container">
				<h2 id="enterate" class="section_title title_noticias fjalla_font">
					<a href="<?php echo esc_url(get_category_link($section_cat_id)); ?>" title="<?php echo esc_attr($section_cat_name); ?>">
						<?php echo esc_html($section_cat_name); ?>
					</a>
				</h2>
				<div class="flex_bar_container">
			<?php
				$count = 0;
				while($noticias->have_posts()):
					$noticias->the_post();
					$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_medium'; ?>
					<?php
						if($count<1): ?>
							<figure class="fig_object">
								<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
									<?php echo (has_post_thumbnail()) ? the_post_thumbnail($img_size) : '<img style="width:480px;" src="'.get_template_directory_uri().'/images/logo_redondo.png" alt="Default Image">'; ?>
								</a>
								<figcaption class="fig_caption">
									<h3 class="fig_title fjalla_font">
										<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
											<?php the_title(); ?>
										</a>
									</h3>
								</figcaption>
							</figure>
							<ul class="updated_list">
					<?php
							// echo ($count==1) ? '<ul class="updated_list">' : '';
						else: ?>
								<li class="updated_item">
									<h3 class="list_title">
										<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
											<?php the_title(); ?>
										</a>
									</h3>
								</li>
					<?php
						endif; ?>
			<?php
				$count++;
				endwhile; ?>
							</ul>
				</div>
			</div>
		</section>
<?php
	endif; ?>
