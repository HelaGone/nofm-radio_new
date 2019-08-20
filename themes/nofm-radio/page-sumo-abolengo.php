<?php
/*
 * Template name: Sumo Abolengo
*/
/*
 Dark palete +pink
 #000a12
 #263238
 #4f5b62
 #CAE8FA | 202, 232, 250
 #f50057
 #FF530D | 255, 83, 13
*/
get_header();
?>
<style type="text/css">
	/*
	    SUMO ABOLENGO LANDING PAGE
	*/
	#sumo_abolengo{background-color:#000a12;padding:40px 8px;color:#fff;}
	#sumo_abolengo .sumo_wrapper{max-width: 1280px;margin:0 auto;}
	#sumo_abolengo .sumo_head{text-align: center;}
	#sumo_abolengo .sumo_head .header_image{width:100%;}
	#sumo_abolengo .sumo_head .header_image img{width:66%;}
	#sumo_abolengo .sumo_navigation{max-width: 666px;margin:auto;}
	#sumo_abolengo .sumo_navigation ul{display:flex;justify-content:space-between;flex-wrap: wrap;padding:16px;}
	#sumo_abolengo .sumo_navigation ul li{width:calc(100% / 3 - 16px);max-width:80px;margin-bottom:4px;box-shadow:4px 4px 8px #000;border-radius: 5px;padding:4px;transition: box-shadow .3s;}
	#sumo_abolengo .sumo_navigation ul li:hover{box-shadow: 2px 2px 4px #ff5722;}
	#sumo_abolengo .sumo_navigation ul li img{width:100%;height: auto;border-radius: 5px;}
	#sumo_abolengo section.section_figure{margin:40px 0;padding-bottom:80px;border-bottom:3px solid #FF530D;}
	#sumo_abolengo section.section_figure figure img{width:50%;}
	.sumo_texto{line-height: 1.45em;font-size:18px;}
	.sumo_texto p a{color:#fff;}
	.sumo_texto p a:hover{color:#ff0000;}
	#sumo_abolengo section.section_sumo_footer figure{text-align: center;}
	#sumo_abolengo section.section_sumo_footer figure img{width:20%;margin-bottom:16px;}
</style>
<section id="sumo_abolengo">
	<div class="sumo_wrapper">
		<section class="section_one">
			<div class="sumo_head">
				<div class="header_image">
					<img src="<?php echo get_template_directory_uri().'/images/sabolengo/sumo.png' ?>" alt="Sumo Abolengo">
				</div>
				<iframe width="640" height="360" src="https://www.youtube.com/embed/pRe06c6dEIU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<nav class="sumo_navigation">
				<ul>
					<li>
						<a href="#section_cuadrilatero">
							<img src="<?php echo get_template_directory_uri().'/images/sabolengo/nav_1.png'; ?>" alt="Cuadrilatero">
						</a>
					</li>
					<li>
						<a href="#section_fina_mezcla">
							<img src="<?php echo get_template_directory_uri().'/images/sabolengo/nav_2.png'; ?>" alt="Fina Mezcla">
						</a>
					</li>
					<li>
						<a href="#section_we_human">
							<img src="<?php echo get_template_directory_uri().'/images/sabolengo/nav_5.png'; ?>" alt="We Human">
						</a>
					</li>
					<li>
						<a href="#section_hgrafica">
							<img src="<?php echo get_template_directory_uri().'/images/sabolengo/nav_4.png'; ?>" alt="Herencia Gráfica">
						</a>
					</li>
					<li>
						<a href="#section_mp">
							<img src="<?php echo get_template_directory_uri().'/images/sabolengo/nav_3.png'; ?>" alt="M.P.">
						</a>
					</li>
					<li>
						<a href="#section_tm_miedo">
							<img src="<?php echo get_template_directory_uri().'/images/sabolengo/nav_6.png'; ?>" alt="Todo Menos Miedo">
						</a>
					</li>
				</ul>
			</nav>
		</section>

		<section id="section_cuadrilatero" class="section_figure">
			<figure>
				<img src="<?php echo get_template_directory_uri().'/images/sabolengo/cuadrilatero.png'; ?>" alt="Cuadrilatero">
			</figure>
			<div class="sumo_texto">
				<p>La pura sustancia activa / </p>
				<p>La mejor noche tiene todo menos miedo</p>
				<p>Productora de eventos culturales y de entretenimiento para necesidades específicas</p>
				<p>Conceptualizamos, desarrollamos y producimos eventos empresariales,<br>
				académicos y personales con una sola premisa:</p>
				<br>
				<p>Cada uno es especial porque es tuyo.</p>
				<p>Cuéntanos qué quieres, qué necesitas y diseñamos tu celebración.</p>
			</div>
		</section>

		<section id="section_fina_mezcla" class="section_figure">
			<figure>
				<img src="<?php echo get_template_directory_uri().'/images/sabolengo/fina_mezcla.png'; ?>" alt="Cuadrilatero">
			</figure>
			<div class="sumo_texto">
				<p>
					Producimos ideas sonoras en forma de podcast, que nacen de la<br> 
					investigación académica o comercial; y todo material sonoro que<br>
					necesites para :
				</p>
				<br>
				<p>
					ambientar eventos – congresos, simposios, encuentros -. También<br> 
					conceptualizamos y realizamos spots y campañas de audio<br>
					para radio e internet.
				</p>
				<br>
				<p>
					Sonorizamos trabajamos, diseñamos ideas.
				</p>
			</div>
		</section>

		<section id="section_we_human" class="section_figure">
			<figure>
				<img src="<?php echo get_template_directory_uri().'/images/sabolengo/we.png'; ?>" alt="Cuadrilatero">
			</figure>
			<div class="sumo_texto">
				<p>
					Diseños originales de impresos para diversas aplicaciones textiles.
				</p>
				<br>
				<p>
					Ropa de autores mexicanos en ediciones limitadas.
				</p>
				<br>
				<p>
					También realizamos trabajos sobre pedido y características especiales.
				</p>
			</div>
		</section>

		<section id="section_hgrafica" class="section_figure">
			<figure>
				<img src="<?php echo get_template_directory_uri().'/images/sabolengo/herencia_grafica.png'; ?>" alt="Cuadrilatero">
			</figure>
			<div class="sumo_texto">
				<p>
					Taller de artes gráficas e impresiones multiformato.
				</p>
				<br>
				<p>
					Desde libros, etiquetas, presentaciones, textiles:
				</p>
				<br>
				<p>
					todo aquello que va impreso lleva nuestra huella.
				</p>
			</div>
		</section>

		<section id="section_mp" class="section_figure">
			<figure>
				<img src="<?php echo get_template_directory_uri().'/images/sabolengo/mp.png'; ?>" alt="Cuadrilatero">
			</figure>
			<div class="sumo_texto">
				<p>
					Servicios editoriales multipropósito.
				</p>
				<p>
					¿Tienes una idea, tienes una entrega, tienes un texto?
				</p>
				<br>
				<p>
					Lo corregimos, lo editamos y damos formato editorial<br>
					(sí el diseño va incluido)
				</p>
				<br>
				<p>
					Realizamos manuales de venta, estilo y marca;<br>
					catálogos (impresos y web) y libros personales y de ocasión.
				</p>
				<br>
				<p>
					También: anuarios, boletines y revistas.
				</p>
				<br>
				<p>
					Contamos con un consejo editorial y de arte para asesorías y consultorías.
				</p>
			</div>
		</section>

		<section id="section_tm_miedo" class="section_figure">
			<figure>
				<img src="<?php echo get_template_directory_uri().'/images/sabolengo/tt.png'; ?>" alt="Cuadrilatero">
			</figure>
			<div class="sumo_texto">
				<p>
					No es una esquina es un vértice.
				</p>
				<br>
				<p>	
					Agencia y productora audiovisual que desarrolla contenidos<br> 
					creativos a partir de la optimización de recursos para potenciar <br>
					resultados.
				</p>
				<br>
				<p>
					Concepción, desarrollo y producción de estrategias comunicativas.
				</p>
			</div>
		</section>

		<section class="section_sumo_footer">
			<figure>
				<img src="<?php echo get_template_directory_uri().'/images/sabolengo/sa2.png'; ?>">
				<figcaption>
					<div class="sumo_texto">
						<p>
							<a href="mailto:contacto@sumoabolengo.com">CONTACTO@SUMOABOLENGO.COM</a>
						</p>
					</div>
				</figcaption>
			</figure>
		</section>
	</div>
	<?php get_sidebar(); ?>
</section>
<?php get_footer(); ?>