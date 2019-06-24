<?php get_header(); global $wp_query; ?>
	<section id="tax_section">
	<?php $queried_obj = $wp_query->queried_object; ?>
		<h1><?php echo esc_html($queried_obj->name); ?></h1>
		<div class="tax_posts_pool">
		<?php
			if(have_posts()):
				while(have_posts()):
					the_post();
					$img_size = (wp_is_mobile()) ? 'suquare_mid' : 'suqare_big';
					$schedule_day = get_post_meta($post->ID, '_prog_horario_dias', true);
					$shcedule_hour = get_post_meta($post->ID, '_prog_hora', true); ?>
					<figure class="fig_object">
						<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
							<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : ''; ?>
						</a>
						<figcaption class="fig_caption">
							<?php 
								$terms = get_the_terms($post->ID, $queried_obj->taxonomy);
								foreach ($terms as $key => $term): ?>
									<span>
										<a href="<?php echo esc_url(get_term_link($term->term_id)); ?>" title="<?php echo esc_attr($term->name); ?>">
											<?php echo esc_html($term->name); ?>
										</a>
									</span>
							<?php
								endforeach; ?>
							<h2 class="fig_title">
								<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
							</h2>
							<time>
								<?php echo get_the_date('D, d.m.Y'); ?>
							</time>
							<div>
								<time>
									<?php echo 'Todos los '.strtolower($schedule_day).' | '.$shcedule_hour.' horas'; ?>
								</time>
							</div>
						</figcaption>
					</figure>
				<?php
				endwhile;
			endif;
		?>
		</div>
	</section>
<?php get_footer(); ?>