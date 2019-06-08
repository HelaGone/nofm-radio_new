<?php
	$args = array("post_type"=>"episodios","posts_per_page"=>-1,"post_status"=>"publish","orderby"=>"date","order"=>"DESC");
	$episodios = new WP_Query($args);
	$queryed_obj_post_type = ucfirst($episodios->query_vars["post_type"]);
	if($episodios->have_posts()): ?>
		<section id="barra_episodios" class="home_section container">
			<h2 class="section_title"><?php echo esc_html($queryed_obj_post_type); ?></h2>
			<ul class="episodios_list_carousel">
			<?php	
				while($episodios->have_posts()):
					$episodios->the_post();
					setup_postdata($post); ?>
					<li class="episodio_list_item">
						<figure class="fig_object">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
							<?php
								if(has_post_thumbnail()):
									the_post_thumbnail("square_small");
								endif; ?>
							</a>
							<figcaption class="fig_caption">
								<h5 class="fig_title">
									<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>"><?php the_title(); ?></a>
								</h5>
							</figcaption>
						</figure>
						<!-- <p><?php the_excerpt(); ?></p> -->
					</li>
				<?php
				endwhile; ?>
			</ul>
		</section>
	<?php	
		wp_reset_postdata();
	endif;
?>