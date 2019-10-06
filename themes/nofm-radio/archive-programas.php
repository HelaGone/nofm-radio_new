<?php get_header(); global $wp_query;?>
<section class="container archive_section">
<?php
	if(have_posts()):
		$count = 0; ?>
		<div class="posts_pool">
		<?php
			while(have_posts()):
				the_post(); 
				$image_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big';
				$image_size_pool = (wp_is_mobile()) ? 'square_mid' : 'square_big'; 
				$shedule_days = get_post_meta($post->ID, '_prog_horario_dias', true);
				$shedule_hour = get_post_meta($post->ID, '_prog_hora', true); ?>
				<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
					<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
						<?php the_post_thumbnail($image_size_pool); ?>
					</a>
					<figcaption class="fig_caption">
						<?php 
						if($shedule_days!='' || $shedule_hour!=''): ?>
							<time><?php echo esc_html($shedule_days.' de '.$shedule_hour.'hrs') ?></time>
						<?php 
						endif; ?>
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
