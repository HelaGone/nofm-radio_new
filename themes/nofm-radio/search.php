<?php get_header(); global $wp_query; 
	$search_term = strtoupper($wp_query->query['s']); ?>
	
	<section class="container  archive_section">
		<h1 class="main_title"><?php echo esc_html('Buscaste: '.$search_term); ?></h1>
		<div class="grid-container">
			<?php 
				if(have_posts()):
					while(have_posts()):
						the_post(); 
						$sidebar_img_size = (wp_is_mobile()) ? 'thumbnail' : 'square_mid';?>
						<figure class="fig_object">
							<a href="<?php the_permalink(); ?>">
								<?php (has_post_thumbnail()) ? the_post_thumbnail($sidebar_img_size) : '' ?>
							</a>
							<figcaption class="fig_caption">
								<h3 class="fig_title fjalla_font">
									<a href="<?php the_permalink(); ?>">
										<?php the_title(); ?>
									</a>
								</h3>
							</figcaption>
						</figure>
						<?php 
					endwhile;
				endif; ?>
		</div>
	</section>

<?php get_footer(); ?>