<?php get_header(); ?>
<section id="single_podcasts" class="single_page">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post(); 
				$episode_duration = get_post_meta($post->ID, '_episodio_duration', true);
				$episode_url = get_post_meta($post->ID, '_episodio_url', true);
				$episode_show_id = get_post_meta($post->ID, '_episodio_show', true);
				$img_size = (wp_is_mobile()) ? 'rect_small' : 'rect_mid';
				$podcast = get_post($episode_show_id); ?>
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
										<a href="<?php echo get_the_permalink($podcast->ID); ?>" title="<?php echo esc_attr($podcast->post_title); ?>">
											<?php echo esc_html($podcast->post_title); ?>
										</a>
									</h3>
									<p class="ep_info_item"><?php echo get_the_excerpt($podcast->ID); ?></p>
								</div>
							</div>
						</div>

						<!-- Player -->
						<div class="player_container">
							<button id="btn_ep_play" data-source="<?php echo esc_attr($episode_url); ?>">
								<svg style="display: none;">
									<defs>
										<g id="ic_play">
											<path d="M8 5v14l11-7z" fill="#fff"/><path d="M0 0h24v24H0z" fill="none"/>
										</g>
										<g id="ic_pause">
											<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="#fff"/><path d="M0 0h24v24H0z" fill="none"/>
										</g>
									</defs>
								</svg>
								<svg id="leading_player_icon" class="button_item" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
									<use xlink:href="#ic_play">
								</svg>
								<span class="button_item fjalla_font">ESCUCHA <?php echo strtoupper($post->post_title); ?></span>
							</button>
						</div>

						<div class="article_content episode_content">
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
			get_sidebar();
		endif; ?>
</section>


<?php get_footer(); ?>