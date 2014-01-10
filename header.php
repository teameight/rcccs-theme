<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
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
        <a href="<?php bloginfo('url'); ?>" class="logo"><img src="<?php echo(THEME_DIR); ?>/images/logo.png" alt="Logo Alt Text" /></a>
        <nav id="nav" class="nav">
            <a href="<?php bloginfo('url'); ?>" class="logo-mini"><img src="<?php echo(THEME_DIR); ?>/images/logo-mini.png" alt="Logo Alt Text" /></a>
            <?php wp_nav_menu(array('theme_location' => 'primary', 'container' => false)); ?>
        </nav><!--end .nav-->
    </div>
    <div class="subnav">
        <div class="wrap">
            <?php get_template_part( 'partials/section', 'services' ); ?>
        </div>
    </div>
</header>
<div id="content">
<!-- End .header -->