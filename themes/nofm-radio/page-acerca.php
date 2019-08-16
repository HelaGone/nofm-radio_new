<?php
	/*
	Template name: acerca
	*/
	get_header();
	if(have_posts()): ?>
		<section id="about" class="page_section_wrapper">
			<div class="wrapper">	
			<?php	
				while(have_posts()):
					the_post(); 
					$img_size = (wp_is_mobile()) ? 'rect_small' : 'rect_mid'; ?>
					<figure class="fig_object">
						<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : '';  ?>
						<figcaption class="fig_caption">
							<h1 class="fig_title fjalla_font"><?php the_title(); ?></h1>
						</figcaption>
					</figure>
					<div class="page_content">
						<?php the_content(); ?>
					</div>
			<?php
				endwhile; ?>
			</div>
		</section>
<?php
	endif;
	get_footer(); ?>