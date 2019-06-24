<?php get_header();
	if(have_posts()): ?>
		<section class="">		
		<?php 
	 		while(have_posts()):
	 			the_post(); 
	 			$terms = get_the_terms($post->ID, 'temas'); 
	 			$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big';
	 			?>
	 			<article id="<?php echo esc_attr('programa-id-'.$post->ID); ?>" class="article_wrapper">
	 				<div class="article_ft_img">
	 					<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : ''; ?>
	 				</div>
	 				<div class="article_header">
			 		<?php
			 			foreach ($terms as $key => $term): ?>
			 				<span>
			 					<a href="<?php echo get_term_link($term->term_id); ?>" title="<?php echo esc_attr($term->name); ?>">
			 						<?php echo esc_html($term->name); ?>
			 					</a>
			 				</span>
					<?php
			 			endforeach; ?>
			 			<div>	
			 				<h1><?php the_title(); ?></h1>
			 				<time><?php echo get_the_date('D, d.m.Y'); ?></time>
			 				<span><?php echo get_the_author_link(); ?></span>
			 			</div>

	 				</div> <!--article header-->
		 			<div>
		 				<?php the_content(); ?>
		 			</div> <!--article content-->
	 			</article>
		<?php
			endwhile; ?>
		</section>
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
	endif;

get_footer(); ?>