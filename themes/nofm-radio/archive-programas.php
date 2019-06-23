<?php get_header(); 
	global $wp_query; 
	$type = $wp_query->queried_object->label; 
	$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big';
	$attach = bt_get_imageby_id(31717, $img_size); ?>
<section id="archive_programas" class="archive_section_wrapper container">

	<figure class="fig_object type_figure">
		<img src="<?php echo $attach; ?>" alt="category cover">
		<figcaption class="fig_caption">
			<h1 class="fig_title"><?php echo esc_html($type); ?></h1>
		</figcaption>
	</figure>

	<div class="shows_pool">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post(); 
				$image_size = (wp_is_mobile()) ? 'rect_small' : 'rect_big'; ?>
				<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
					<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
						<?php the_post_thumbnail($image_size); ?>
					</a>
					<figcaption class="fig_caption">
						<h2 class="fig_title">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php the_title(); ?>
							</a>
						</h2>
						<?php the_excerpt(); ?>
					</figcaption>
				</figure>
	<?php			
			endwhile;
		endif; ?>
	</div>
</section>
<?php echo bt_print_pagination(); ?>

<?php get_footer(); ?>