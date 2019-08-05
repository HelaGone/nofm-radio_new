<?php get_header(); global $wp_query; ?>

<section id="single_section" class="single_page">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post(); 
				$terms = get_the_terms($post->ID, 'temas'); 
				$img_size = (wp_is_mobile()) ? 'rect_small' : 'rect_big';
				$cat_name = get_the_category($post->ID); ?>
				<article class="single_post_container">
					<div class="single_content_wrapper">
						<div class="article_header">
							<h1 class="single_title fjalla_font">
								<?php the_title(); ?>
							</h1>
							<div class="single_post_data">
								<div>
									<a href="<?php echo get_category_link($cat_name[0]->term_id); ?>" title="<?php echo esc_attr($post->post_name); ?>">
										<?php echo esc_html($cat_name[0]->name); ?>
									</a>
								</div>
								<!-- <time class="post_data_item"><?php echo get_the_date('D, d.m.Y'); ?></time> -->
								<span><?php echo $author; ?></span>
							</div>
						</div>
						<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : ''; ?>
						<div class="article_content">
							<?php the_content(); ?>
						</div>
						<?php 
							$args = array(
								'post_type'=>'episodios',
								'post_status'=>'publish',
								'posts_per_page'=>13,
								'orderby'=>'date',
								'order'=>'DESC',
								'meta_value'=>$post->ID
							);
							$episodios = new WP_Query($args);
							if($episodios->have_posts()): ?>
								<div class="episode_pool">
								<?php
									while($episodios->have_posts()):
										$episodios->the_post();
										setup_postdata($post);
										$eps_img_size = (wp_is_mobile()) ? 'thumbnail' : 'square_mid'; ?>
										<figure class="fig_object">
											<a href="<?php echo the_permalink(); ?>">
												<?php (has_post_thumbnail()) ? the_post_thumbnail($eps_img_size): ''; ?>
											</a>
											<figcaption class="fig_caption">
												<h3 class="fig_title">
													<a href="<?php echo the_permalink(); ?>">
														<?php the_title(); ?>
													</a>
												</h3>
											</figcaption>
										</figure>
								<?php
									endwhile; ?>
								</div>
						<?php
							wp_reset_postdata();
							endif; ?>
					</div>
				</article>
	<?php
			endwhile;
			get_sidebar();
		endif; ?>
</section>
<?php get_footer(); ?>