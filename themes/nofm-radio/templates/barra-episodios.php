<?php 
	global $wp_query, $post;
	$posts_arr = wp_cache_get('barra_podcasts_wpcache');
	if($posts_arr===false){
		$posts_arr = bt_get_posts_by_categ('episodios', null);
		wp_cache_set('barra_podcasts_wpcache', $posts_arr, '', 120);
	}
	if($posts_arr->have_posts()):
		$section_pt_name = $posts_arr->query_vars['post_type'];
		$pt_link = get_post_type_archive_link($section_pt_name); ?>
		<section id="barra_podcasts" class="home_section dynamic_pool container">
			<div class="desk_container">
				<h2 id="escucha" class="section_title">
					<a href="<?php echo $pt_link; ?>">
						<?php echo esc_html(ucfirst($section_pt_name)); ?>
					</a>
				</h2>
				<div class="flex_bar_container">
					<?php
						$count = 0;
						while($posts_arr->have_posts()):
							$posts_arr->the_post();
							if($count<1): ?>
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
								<ul class="updated_list">
					<?php 
							else: ?>	
									<li class="updated_item">
										<a href="<?php the_permalink(); ?>" title="<?php echo get_the_title($post->ID); ?>">
											<?php the_title(); ?>
										</a>
										<span><?php the_excerpt(); ?></span>
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