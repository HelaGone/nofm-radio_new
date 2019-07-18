<?php 
	global $wp_query, $post;
	$posts_arr = wp_cache_get('barra_recom_wpcache');
	if($posts_arr===false){
		$args = array('post_type' => array('post', 'podcasts'),'post_status'=>'publish','posts_per_page'=>4,'orderby'=>'date','order'=>'DESC','tag'=>'recomendaciones');
		$posts_arr = new WP_Query($args);
		wp_cache_set('barra_recom_wpcache', $posts_arr, '', 120);
	}
	if($posts_arr->have_posts()):
		// echo '<pre>';
		// 	print_r($posts_arr->query_vars);
		// echo '</pre>';
		$section_tag_name = $posts_arr->query_vars['tag_slug__in'][0];
		$section_tag_id = get_cat_ID($section_tag_name); ?>
		<section id="barra_recomendaciones" class="home_section dynamic_pool">
			<div class="desk_container">
				<h2 class="section_title">
					<a href="<?php echo esc_url(get_tag_link($section_tag_id)); ?>">
						<?php echo esc_html(ucfirst($section_tag_name)); ?>
					</a>
				</h2>

						<ul class="updated_list">
			<?php
				$count = 0;
				while($posts_arr->have_posts()):
					$posts_arr->the_post(); 
					if($count<3): ?>
							<li class="updated_item">
								<a href="<?php the_permalink(); ?>">
									<?php the_title(); ?>
								</a>
							</li>
				<?php		
					elseif($count==3): ?>
						</ul>
						<figure class="fig_object">
							<a href="<?php the_permalink(); ?>">
								<?php (has_post_thumbnail()) ? the_post_thumbnail('medium') : ''; ?>
							</a>
							<figcaption class="fig_caption">
								<a href="<?php the_permalink(); ?>">
									<h2 class="fig_title"><?php the_title(); ?></h2>
								</a>
							</figcaption>
						</figure>
				<?php		
					endif;
				$count++;
				endwhile; ?>
			</div>
		</section>
<?php
	endif; ?>