<?php get_header(); ?>
<section id="section_404" class="container">
	<h1 class="fjalla_font">
		Ups! Te perdiste. <br>Regresa a <a href="<?php echo site_url(); ?>">NoFM Radio</a>
	</h1>
	<a href="<?php echo site_url(); ?>">
		<img src="<?php echo get_template_directory_uri().'/images/gorila_facebook_live.png'?>" alt="Página de error 404">
	</a>
	<?php get_sidebar(); ?>
</section>
<?php get_footer(); ?>