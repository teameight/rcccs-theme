<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->
<head>

    <!--=== META TAGS ===-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="description" content="Keywords">
    <meta name="author" content="Name">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!--=== LINK TAGS ===-->
    <link rel="shortcut icon" href="<?php echo THEME_DIR; ?>/path/favicon.ico" />
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS2 Feed" href="<?php bloginfo('rss2_url'); ?>" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

    <!--=== TITLE ===-->
    <title><?php wp_title(); ?> - <?php bloginfo( 'name' ); ?></title>

    <!--=== WP_HEAD() ===-->
    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>

<!-- Begin .header -->
<header class="header cf" role="banner">
	<div class="wrap">
		<a href="#" class="logo"><img src="<?php echo(THEME_DIR); ?>/images/logo.png" alt="Logo Alt Text" /></a>
        <nav id="nav" class="nav">
			<ul>
				<li><a href="#">About Us</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Community</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav><!--end .nav-->
	</div>
</header>
<!-- End .header -->