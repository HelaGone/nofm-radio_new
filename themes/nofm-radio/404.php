<?php get_header(); ?>
<section id="section_404" class="container">
	<figure class="fig_object">
		<a href="<?php echo site_url(); ?>">
			<img src="<?php echo get_template_directory_uri().'/images/gorila_facebook_live.png'?>" alt="Página de error 404">
		</a>
		<figcaption class="fig_caption">
			<h1 class="fig_title fjalla_font">
				<a href="<?php echo site_url(); ?>">
					Sin miedo. <br>Regresa a NoFM Radio.
				</a>
			</h1>
		</figcaption>
	</figure>
	<?php get_sidebar(); ?>
</section>
<?php get_footer(); ?>