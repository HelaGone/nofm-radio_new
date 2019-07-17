<?php 
	global $wp_query, $post;
	$noticias = wp_cache_get('barra_noticias_wpcache');
	if($noticias===false){
		$args = array(
			"post_type"=>"post",
			"post_status"=>"publish",
			"posts_per_page"=>4,
			"orderby"=>"date",
			"order"=>"DESC",
			"category_name"=>"noticias"
		);
		$noticias = new WP_Query($args);
		wp_cache_set('barra_noticias_wpcache', $noticias, '', 120);
	}
	if($noticias->have_posts()):
		$section_cat_name = $noticias->query_vars['category_name'];
		$section_cat_id = get_cat_ID($section_cat_name); ?>
		<section id="barra_noticias" class="home_section">
			<div class="desk_container">
				<h2 class="section_title">
					<a href="<?php echo esc_url(get_category_link($section_cat_id)); ?>">
						<?php echo esc_html(ucfirst($section_cat_name)); ?>
					</a>
				</h2>
			<?php
				$count = 0;
				while($noticias->have_posts()):
					$noticias->the_post(); ?>
					<?php 
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
					<?php 
						else: ?>
							<ul class="updated_list">
								<li>
									<a href="<?php the_permalink(); ?>">
										<?php the_title(); ?>
									</a>
								</li>
							</ul>
					<?php		
						endif; ?>
					</div>
			<?php 
				$count++;
				endwhile; ?>
		</section>
<?php
	endif; ?>