<?php get_header(); ?>
	
<?php get_template_part('templates/barra', 'a'); ?>

<section id="home_section">
	<div>
		<h2>Esta es una sección aparte dentro de front page</h2>
		<!--VosCast.com Playlist Files-->
		<script type="text/javascript" src="//cdn.voscast.com/resources/?key=d3b9d948ce2a095ad198b852a44fa999&c=playlist"></script>
		<!--End Playlist Files-->

		<!--VosCast.com SHOUTcast Server Stats-->
		<!-- <script type="text/javascript" src="//cdn.voscast.com/stats/display.js?key=d3b9d948ce2a095ad198b852a44fa999&stats=currentlisteners,songhistory"></script> -->
		<!--End SHOUTcast Server Stats-->
	</div>
</section>

<?php get_sidebar(); ?>

<?php //get_template_part('templates/barra', 'b'); ?>
<?php //get_template_part('templates/barra', 'c'); ?>

<?php get_footer(); ?>