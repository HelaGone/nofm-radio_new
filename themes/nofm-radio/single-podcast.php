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
							<h1 class="single_title"><?php the_title(); ?></h1>
							<div class="single_post_data">
								<div>
									<a href="<?php echo get_category_link($cat_name[0]->term_id); ?>" title="<?php echo esc_attr($post->post_name); ?>">
										<?php echo esc_html($cat_name[0]->name); ?>
									</a>
								</div>
								<time class="post_data_item"><?php echo get_the_date('D, d.m.Y'); ?></time>
								<span><?php echo $author; ?></span>
							</div>
						</div>
						<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : ''; ?>
						<div class="article_content">
							<?php the_content(); ?>
						</div>
					</div>
				</article>
	<?php
			endwhile; ?>
			<section class="more_by_tema">
				<?php 
					$recomendation = array(); 
					foreach($terms as $key => $term){
						$args = array('post_type'=>'programas','posts_per_page'=>4,'post_startus'=>'publish','tax_query'=>array(array('taxonomy'=>'temas','field'=>'slug','terms'=>array($term->slug))));
						array_push($recomendation, get_posts($args));
					}
					if(is_array($recomendation[0])&&!empty($recomendation[0])):
						foreach ($recomendation[0] as $key => $recommended): 
							$img_size_recom = (wp_is_mobile()) ? 'thumbnail' : 'square_mid'; ?>
							<figure class="fig_object">
								<img src="<?php bt_post_attachment_image_url($recommended->ID, $img_size_recom); ?>" title="<?php echo esc_attr($recommended->post_title); ?>">
								<figcaption class="fig_caption">
									<h2 class="fig_title"><?php echo esc_html($recommended->post_title); ?></h2>
									<time><?php echo get_the_date('D, d.m.Y'); ?></time>
									<span><?php echo get_the_author_link(); ?></span>
								</figcaption>
							</figure>
				<?php
						endforeach;
					endif;

				?>
			</section>
	<?php
		endif; ?>

	<?php //(wp_is_mobile()) ? '' : get_sidebar(); ?>

</section>
<?php get_footer(); ?>