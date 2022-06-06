<?php get_header(); ?>
<svg style="display: none;">
	<defs>
		<g id="ic_play">
			<path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/>
		</g>
		<g id="ic_pause">
			<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/>
		</g>
		<g id="ic_rewind">
			<path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/><path d="M0 0h24v24H0z" fill="none"/>
		</g>
		<g id="ic_forward">
			<path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/><path d="M0 0h24v24H0z" fill="none"/>
		</g>
	</defs>
</svg>
<section id="single_podcasts" class="single_page">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post();
				$episode_duration = get_post_meta($post->ID, '_podcasts_duration', true);
				$episode_url = get_post_meta($post->ID, '_podcasts_url', true);
				$episode_show_id = get_post_meta($post->ID, '_podcasts_show', true);
				$img_size = (wp_is_mobile()) ? 'rect_small' : 'rect_mid';
				$podcast = get_post($episode_show_id);
				$terms = get_the_terms($post->ID, 'proyecto');
				//debugger($terms);
				$is_decir = false;
				$decir_name = '';
				if(is_array($terms) && !empty($terms)){
					foreach ($terms as $term) {
						if($term->slug == 'decir-desigualdad'){
							$is_decir = true;
							$decir_name = $term->name;
						}
					}
				}
				 ?>
				<article id="<?php echo esc_attr($post->ID); ?>" class="single_post_container">
					<div class="single_content_wrapper">
						<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : ''; ?>
						<div class="article_header">
							<!-- Episode title -->
							<h1 class="single_title fig_title fjalla_font"><?php the_title(); ?></h1>
							<!-- Episode Info -->
							<div class="single_post_data episode_info">
								<time class="post_date_item ep_info_item"><?php echo esc_html(get_the_date()); ?></time>
								<p class="ep_info_item"><span class="info_prefix">Duración:</span> <?php echo esc_html(bt_seconds_to_time($episode_duration)); ?> </p>
								<!-- Show info -->
								<div class="podcast_info ep_info_item">
									<span class="info_prefix">Transmitido en: </span>
									<h3 class="fjalla_font ep_info_item">
										<?php
											if($is_decir): ?>
												<a href="<?php echo get_home_url().'/decirdesigualdades'?>" title="Decir Desigualdad Es">
													<?php echo esc_html($decir_name); ?>
												</a>
										<?php
											else: ?>
												<a href="<?php echo get_the_permalink($podcast->ID); ?>" title="<?php echo esc_attr($podcast->post_title); ?>">
													<?php echo esc_html($podcast->post_title); ?>
												</a>
										<?php
											endif;
										?>
									</h3>
									<p class="ep_info_item"><?php echo get_the_excerpt($podcast->ID); ?></p>
								</div>
							</div>
						</div>

						<!-- Player -->
						<div class="player_container">
							<div class="transport_controls">
								<button id="btn_ep_play" data-source="<?php echo esc_attr($episode_url); ?>">
									<svg id="leading_player_icon" class="button_item" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><use xlink:href="#ic_play"/></svg>
								</button>
								<button id="btn_ep_rwd" type="button" name="button">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><use xlink:href="#ic_rewind"/></svg>
								</button>
								<button id="btn_ep_fwd" type="button" name="button">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><use xlink:href="#ic_forward" /></svg>
								</button>
							</div>
							<div class="episode_title">
								<span class="button_item fjalla_font">ESCUCHA <?php echo strtoupper($post->post_title); ?></span>
							</div>
						</div>

						<div class="article_content episode_content">
							<?php the_content(); ?>
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
						</div>
					</div>
				</article>
	<?php
			endwhile;
			get_sidebar();
		endif; ?>

</section>


<?php get_footer(); ?>
