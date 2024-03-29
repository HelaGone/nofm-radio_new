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
								<div class="time_author_info">
									<time class="post_date_item"><?php echo get_the_date('D, d.m.Y'); ?></time>
									<span class="post_author_item">Por: <?php echo get_the_author_link(); ?></span>
								</div>
							</div>
						</div>
						<?php (wp_is_mobile()) ? the_post_thumbnail('rect_small') : the_post_thumbnail('rect_big'); ?>

						<!-- <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8411953701698334" data-ad-slot="8393505892" data-ad-format="auto" data-full-width-responsive="true"></ins> -->

						<div class="article_content">
							<?php the_content(); ?>
						</div>

						<!-- interior-single -->
						<!-- <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8411953701698334" data-ad-slot="4918078474" data-ad-format="auto" data-full-width-responsive="true"></ins> -->

						<div class="share_buttons">
							<ul>
								<li class="fb-share-button share_button" style="background-color: #3b5998; background-image: url(<?php echo THEMEPATH . 'images/ic_social/f_logo_RGB-White_72.png'; ?>);">
									<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_the_permalink($post->ID)); ?>?src=sdkpreparse"></a>
								</li>
								<li class="twitter-share-button share_button" style="background-color: #00acee; background-image: url(<?php echo THEMEPATH . 'images/ic_social/Twitter_Logo_WhiteOnImage.png'; ?>);">
									<!-- <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-via="nofm_radio" data-hashtags="#RadioLIBRE" data-show-count="false">Tweet</a> -->
									<a href="https://twitter.com/intent/tweet?url=<?php echo get_the_permalink($post->ID); ?>" data-via="nofm_radio" data-hashtags="#RadioLIBRE" data-show-count="false" data-size="large" target="_blank" rel="noopener nofollow"></a>
								</li>
								<?php
									if(wp_is_mobile()): ?>
										<li class="whatsapp-share-button share_button">
											<a href="whatsapp://send?text=<?php echo get_the_permalink($post->ID); ?>" data-action="share/whatsapp/share">
												<img src="<?php echo get_template_directory_uri().'/images/ic_social/WhatsApp_Logo_1.png'; ?>" alt="Whatsapp" width="48" height="48" loading="lazy">
											</a>
										</li>
								<?php
									endif; ?>
							</ul>
						</div>
						<!-- <div class="fb-comments" data-href="<?php the_permalink(); ?>" data-width="766" data-numposts="5" data-colorscheme="dark"></div> -->
					</div>
				</article>
	<?php
			endwhile;
			get_sidebar();
		endif; ?>
		<!-- nofm-radio-cam-3 -->
		<!-- <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8411953701698334" data-ad-slot="8393505892" data-ad-format="auto" data-full-width-responsive="true"></ins> -->
</section>
<?php get_footer(); ?>
