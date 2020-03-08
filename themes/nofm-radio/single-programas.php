<?php get_header(); global $wp_query; ?>

<section id="single_programas" class="single_page">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post();
				$img_size = (wp_is_mobile()) ? 'rect_small' : 'rect_big';
				?>
				<article class="single_post_container">
					<div class="single_content_wrapper">
						<div class="article_header">
							<h1 class="single_title fjalla_font">
								<?php the_title(); ?>
							</h1>
						</div>
						<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : ''; ?>
						<div class="article_content">
							<?php the_content(); ?>
						</div>
						<?php get_template_part('templates/barra', 'related'); ?>
					</div>
				</article>
	<?php
			endwhile;
			get_sidebar();
		endif; ?>
</section>
<?php get_footer(); ?>
