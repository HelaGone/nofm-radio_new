<?php
	header('Content-Type: text/xml; charset=' . get_option('blog_charset'), true);
	header("X-Robots-Tag: index, follow", true);
	date_default_timezone_set('America/Mexico_City');
	//Se definen variables vacías
	$programa = '';
	$showid = '';
	$showdata = '';
	$args = '';
	$post_object = '';
	$podcast_cover_id = false;
	$podcast_cover = false;
	$show_title = false;
	$show_description = false;
	/**
	 * Comprueba que los parámetros enviados en la url existan y arma un array de argumentos
	 * para pasarlo a la función get_posts
	 * De lo contrario, arma otro set de argumentos sin los valores de los parámetros en la url
	 * por que no los tiene.
	 * De esta forma evita que el resto del documento falle
	*/
	$args = array(
		'post_type'=>'podcast',
		'posts_per_page'=>20,
		'post_status'=>'publish',
		'orderby'=>'date',
		'order'=>'DESC',
		'post__not_in'=>array(852751,852761,852767,852770),
		'meta_query'=>array(
			'key'=>'pod_type_meta',
			'value'=>'resumen',
			'compare'=>'='
		),
		'meta_key'=>'p_shows',
		'meta_compare'=>'NOT EXISTS'
	);

	$p_cover = $podcast_cover ? $podcast_cover : 'https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2018/12/nt.png?quality=95&ssl=1';
	$p_title = $show_title ? $show_title : get_bloginfo('name');
	$p_description = $show_description ? $show_description : 'Resumen de las noticias más importantes del día en Noticieros Televisa.';

	$podcasts = get_posts( $args );

	if(is_array($podcasts) && !empty($podcasts)):
		$xml = new DOMDocument('1.0', 'UTF-8');
		$rss = $xml->createElement('rss');
		$rss_node = $xml->appendChild($rss);
		$rss_node->setAttribute('xmlns:itunes', 'http://www.itunes.com/dtds/podcast-1.0.dtd');
		$rss_node->setAttribute('xmlns:googleplay', 'http://www.google.com/schemas/play-podcasts/1.0');
		$rss_node->setAttribute('xmlns:media', 'http://search.yahoo.com/mrss/');
		$rss_node->setAttribute('version', '2.0');

		$date_f = date("D, d M Y H:i:s", time());
		$build_date = gmdate('D, d M Y H:i:s', strtotime($date_f)) . ' GMT';

		$channel = $xml->createElement('channel');
		$channel_node = $rss_node->appendChild($channel);

		$channel_node->appendChild($xml->createElement('title', $p_title ));
		$channel_node->appendChild($xml->createElement('link', get_bloginfo_rss('url')));
		$channel_node->appendChild($xml->createElement('description', $p_description ));
		$channel_node->appendChild($xml->createElement('lastBuildDate', $build_date));
		$channel_node->appendChild($xml->createElement('language', 'es-mx'));
		$channel_node->appendChild($xml->createElement('itunes:explicit', 'no'));

		$channel_node->appendChild($xml->createElement('itunes:author', 'Noticieros Televisa'));

		$channel_category = $xml->createElement('itunes:category', 'News &amp; Politics');
		$channel_category->setAttribute('text', 'News &amp; Politics');
		$channel_node->appendChild($channel_category);

		$channel_owner = $xml->createElement('itunes:owner');
		$channel_owner->appendChild($xml->createElement('itunes:email', 'webtools@televisa.news'));
		$channel_node->appendChild($channel_owner);

		$image_node = $xml->createElement('image');
		$channel_node->appendChild($image_node);

		$image_node->appendChild($xml->createElement('url', htmlspecialchars($p_cover) ));
		$image_node->appendChild($xml->createElement('title', get_bloginfo('name')));
		$image_node->appendChild($xml->createElement('link', get_bloginfo('url')));

		$count = count($podcasts);

		foreach ($podcasts as $podcast):

			setup_postdata( $podcast );

			$audio_url = get_post_meta($podcast->ID, 'podcast_url_meta', true);
			$pod_duration = get_post_meta($podcast->ID, 'podcast_dur_meta', true);
			$pod_cover_id = get_post_meta($podcast->ID, 'thumbnail_podcast_image', true);

			$description = ($podcast->post_content) ? $podcast->post_content : 'Descripción genérica cuando no hay excerpt.';
			$pod_title = ($podcast->post_title) ? $podcast->post_title : 'Título genérico cuando la nota no tiene título.';
			$pod_guid = (get_post_permalink($podcast->ID)) ? get_post_permalink($podcast->ID) : null;

			$pod_guid = $podcast->ID;

			$file_size = curl_get_file_size($audio_url);
			$pod_mod = date_create($podcast->post_date_gmt);
			$pubDate = date_format($pod_mod, 'D, d M Y H:i:s');
			$pubDate = $pubDate . ' GMT';
			$season = substr($podcast->post_date_gmt, 0, 4);
			$thumbnail = $podcast_cover_id ? $podcast_cover : get_the_post_thumbnail_url($podcast->ID, 'podcast-thumbnail');

			//XML NODES CREATION
			$item_node = $channel_node->appendChild($xml->createElement('item'));
			$item_node->setAttribute('xmlns:media', 'http://search.yahoo.com/mrss/');
			$item_node->appendChild($xml->createElement('itunes:episodeType', 'full'));
			$item_node->appendChild($xml->createElement('itunes:episode', $count));
			$item_node->appendChild($xml->createElement('itunes:season', '1'));
			$item_node->appendChild($xml->createElement('title', $pod_title));
			$item_description = $xml->createElement('description');
			$item_description->appendChild($xml->createCDATASection($description));
			$item_node->appendChild($item_description);
			$item_node->appendChild($xml->createElement('guid', $pod_guid));
			$item_media_thumbnail = $xml->createElement('media:thumbnail');
			$item_media_thumbnail->setAttribute('url', $thumbnail);
			$item_media_thumbnail->setAttribute('width', '1000');
			$item_media_thumbnail->setAttribute('height', '1000');
			$item_node->appendChild($item_media_thumbnail);

			$enclossure = $xml->createElement('enclosure');
			$enclossure->setAttribute('length', $file_size);
			$enclossure->setAttribute('type', 'audio/mpeg');
			$enclossure->setAttribute('url', $audio_url);
			$item_node->appendChild($enclossure);

			/*$media_intro = $xml->createElement('media:content');
			$media_intro->setAttribute('url', 'https://localhost/noticieros/audio/sample.mp3');
			$media_intro->setAttribute('type', 'audio/mp3');
			$media_intro->setAttribute('expression', 'sample');
			$item_node->appendChild($media_intro);*/

			$media_content = $xml->createElement('media:content');
			$media_content->setAttribute('url', $audio_url);
			$media_content->setAttribute('type', 'audio/mp3');
			$item_node->appendChild($media_content);

			$item_node->appendChild($xml->createElement('pubDate', $pubDate));
			$item_node->appendChild($xml->createElement('itunes:duration', $pod_duration));
			$item_node->appendChild($xml->createElement('itunes:explicit', 'no'));
			$count--;
		endforeach;
		echo $xml->saveXML();
	endif;

/**
 * HELPER FUNCTION
 * Returns the size of a file without downloading it, or -1 if the file
 * size could not be determined.
 *
 * @param $url - The location of the remote file to download. Cannot
 * be null or empty.
 *
 * @return The size of the file referenced by $url, or -1 if the size
 * could not be determined.
 */
function curl_get_file_size( $url ) {
  // Assume failure.
  $result = -1;
  $curl = curl_init( $url );
  // Issue a HEAD request and follow any redirects.
  curl_setopt( $curl, CURLOPT_NOBODY, true );
  curl_setopt( $curl, CURLOPT_HEADER, true );
  curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
  curl_setopt( $curl, CURLOPT_FOLLOWLOCATION, true );
  $data = curl_exec( $curl );
  curl_close( $curl );
  if( $data ):
    $content_length = "unknown";
    $status = "unknown";
    if( preg_match( "/^HTTP\/1\.[01] (\d\d\d)/", $data, $matches ) )  $status = (int)$matches[1];
    if( preg_match( "/Content-Length: (\d+)/", $data, $matches ) ) $content_length = (int)$matches[1];
    if( $status == 200 || ($status > 300 && $status <= 308) ) $result = $content_length;
  endif;
  return $result;
}//END FUNCTION
