<?php get_header(); ?>
<section id="single_archivo" class="single_page">
<?php
	if(have_posts()):
		while(have_posts()):
			the_post(); ?>
			<div class="single_post_container">
				<?php
					if(has_post_thumbnail()):
						the_post_thumbnail('rect_mid');
					endif; ?>

				<h1 class="single_title archivo_single_title fjalla_font"><?php the_title(); ?></h1>
				<!-- interior-single -->
				<!-- <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8411953701698334" data-ad-slot="4918078474" data-ad-format="auto" data-full-width-responsive="true"></ins> -->
				<div class="single_post_data time_author_info">
					<time class="post_data_item"><?php echo get_the_date('D d, m Y', $post->ID); ?></time>
					<span class="post_data_item"> - Por: <strong><?php echo get_the_author_link(); ?></strong></span>
				</div>
				<div class="single_content archivo_single_content">
					<?php the_content(); ?>
				</div>

				<div class="share_buttons"  style="max-width: 640px;">
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
			</div>
<?php
		endwhile;
	endif; ?>
</section>

<?php get_footer(); ?>
