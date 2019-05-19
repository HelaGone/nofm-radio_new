<?php get_header(); ?>
<section id="archive_programas">
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
	endif; ?>
</section>

<?php get_footer(); ?>