<?php get_header(); global $wp_query; ?>
<?php get_template_part('templates/barra', 'nofm-banner'); ?>
<section id="single_post" class="single_page">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post(); ?>
				<article class="single_post_container">
					<div class="single_content_wrapper">
						<div class="article_header">
							<h1 class="single_title fjalla_font"><?php the_title(); ?></h1>
							<div class="single_post_data">
								<?php echo bt_print_term_cloud($post->ID, 'category'); ?>
								<time class="post_date_item"><?php echo get_the_date('D, d.m.Y'); ?></time>
								<span class="post_author_item">
									Por: <?php echo get_the_author_link(); ?>
								</span>
							</div>
						</div>
						<?php (wp_is_mobile()) ? the_post_thumbnail('rect_small') : the_post_thumbnail('rect_big'); ?>
						<div class="article_content">
							<?php the_content(); ?>
						</div>

						<div class="share_buttons">
							<?php 
								if(wp_is_mobile()): ?>
									<div class="whatsapp-share-button share_button">
										<a href="whatsapp://send?text=<?php echo the_permalink(); ?>" data-action="share/whatsapp/share">
											<img src="<?php echo get_template_directory_uri().'/images/ic_social/WhatsApp_Logo_1.png'; ?>" alt="Whatsapp">
										</a>
									</div>
							<?php 
								endif; ?>
							<div class="fb-share-button share_button" data-href="<?php the_permalink(); ?>" data-layout="button_count" data-size="small">
								<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
									Share
								</a>
							</div>

							<a id="twitter-wjs" class="twitter-share-button share_button" href="https://twitter.com/intent/tweet?text=#porNoFM" data-size="small">
								Tweet
							</a>
						</div>
						<div class="fb-comments" data-href="<?php the_permalink(); ?>" data-width="766" data-numposts="5" data-colorscheme="dark"></div>
					</div>
				</article>
	<?php
			endwhile;
		endif; ?>
</section>
<?php get_footer(); ?>