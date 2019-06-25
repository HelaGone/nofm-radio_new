<?php get_header(); global $wp_query;?>
<section class="container category_section">
<?php
	if(have_posts()):
		$count = 0;
		while(have_posts()):
			the_post(); 
			$image_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big';
			if($count < 1): ?>
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
				<div class="posts_pool">
					<div class="list_row">
		<?php
			elseif($count >= 1 && $count < 4): 
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
				echo ($count == 3) ? '</div><div class="duo_row">' : '';
			elseif($count >= 4 && $count < 6):
				$image_size_pool = (wp_is_mobile()) ? 'square_mid' : 'rect_big'; ?>
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
				echo ($count == 5) ? '</div></div>' : '';
			elseif($count === 6): ?>
						<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object last_figure">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php the_post_thumbnail($image_size); ?>
							</a>
							<figcaption class="fig_caption">
								<time><?php echo get_the_date('D, d.m.Y'); ?></time><br/>
								<h2 class="fig_title">
									<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php the_title(); ?>
									</a>
								</h2><br/>
								<?php the_excerpt(); ?>
							</figcaption>
						</figure>
<?php	
			endif;
		$count++;
		endwhile;
	endif; ?>
</section>
<?php 
	echo bt_print_pagination();
	get_footer(); ?>
