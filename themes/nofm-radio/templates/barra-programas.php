<?php
	$args = array("post_type"=>"programas","posts_per_page"=>-1,"post_status"=>"publish","orderby"=>"date","order"=>"DESC");
	$podcasts = new WP_Query($args);
	$queryed_obj_post_type = ucfirst($podcasts->query_vars["post_type"]);
	if($podcasts->have_posts()): ?>
		<section id="barra_programas" class="home_section container">
			<h2 class="section_title"><?php echo esc_html($queryed_obj_post_type); ?></h2>
			<div class="flex_bar_container">
				<ul class="programas_list_carousel">
					<?php	
						while($podcasts->have_posts()):
							$podcasts->the_post();
							setup_postdata($post); ?>
							<li class="programa_list_item">
								<figure class="fig_object">
									<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php
											if(has_post_thumbnail()):
												the_post_thumbnail('square_mid');
											endif; ?>
									</a>
									<figcaption class="fig_caption">
										<h5 class="fig_title">
											<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>"><?php the_title(); ?></a>
										</h5>
									</figcaption>
								</figure>
							</li>
					<?php
						endwhile; ?>
				</ul>
			</div>
		</section>
	<?php	
		wp_reset_postdata();
	endif;
?>