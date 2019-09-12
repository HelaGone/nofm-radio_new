<?php get_header(); global $wp_query;?>
<section class="container archive_section">
	<!-- 
		<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object type_figure">
			<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
				<?php the_post_thumbnail($image_size); ?>
			</a>
			<figcaption class="fig_caption">
				<h2 class="fig_title">
					<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
						<?php the_title(); ?>
					</a>
				</h2>
			</figcaption>
		</figure>
	 -->
<?php
	if(have_posts()):
		$count = 0; ?>
		<div class="posts_pool">
		<?php
			while(have_posts()):
				the_post(); 
				$image_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big';
				$image_size_pool = (wp_is_mobile()) ? 'square_mid' : 'square_big'; ?>
				<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
					<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
						<?php the_post_thumbnail($image_size_pool); ?>
					</a>
					<figcaption class="fig_caption">
						<time><?php echo get_the_date('D, d.m.Y'); ?></time>
						<h2 class="fig_title">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php the_title(); ?>
							</a>
						</h2>
						<?php the_excerpt(); ?>
					</figcaption>
				</figure>
		<?php	
			endwhile; ?>
		</div>
<?php
	endif; ?>
</section>
<?php 
	echo bt_print_pagination();
	get_footer(); ?>
