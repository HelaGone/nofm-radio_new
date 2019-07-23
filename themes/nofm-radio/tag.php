<?php get_header(); global $wp_query; ?>
<section id="section_tag">
<?php
	if(have_posts()): ?>
		<h2><?php echo esc_html( ucfirst($wp_query->query_vars['tag']) ); ?></h2>
		<?php 
			while(have_posts()):
				the_post(); 
				$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big'; ?>
				<figure class="fig_object">
					<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>"></a>
					<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : ''; ?>
					<figcaption class="fig_caption">
						<h2 class="fig_title">
							<a href="<?php the_permalink();?>" title="<?php echo esc_attr($post->post_title); ?>"></a>
							<?php the_title(); ?>
						</h2>
					</figcaption>
				</figure>
		<?php
			endwhile;
	endif; ?>
</section>
<?php get_footer(); ?>