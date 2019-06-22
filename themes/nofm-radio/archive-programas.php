<?php get_header(); global $wp_query; ?>
<section id="archive_programas" class="archive_section_wrapper">
	<h1><?php echo esc_html(ucfirst($wp_query->query["post_type"])); ?></h1>
<?php
	if(have_posts()):
		while(have_posts()):
			the_post(); ?>
			<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
				<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
					<?php the_post_thumbnail(); ?>
				</a>
				<figcaption class="fig_caption">
					<h2 class="fig_title"><?php the_title(); ?></h2>
					<?php the_excerpt(); ?>
				</figcaption>
			</figure>
<?php			
		endwhile;
	endif; 

	echo bt_print_pagination();

	?>

</section>

<?php get_footer(); ?>