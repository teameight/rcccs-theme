<?php

define("THEME_DIR", get_template_directory_uri());
/*--- REMOVE GENERATOR META TAG ---*/
remove_action('wp_head', 'wp_generator');

// ENQUEUE STYLES

function enqueue_styles() {

    /** REGISTER css/screen.cs **/
    wp_register_style( 'screen-style', THEME_DIR . '/style.css', array(), '1', 'all' );
    wp_enqueue_style( 'screen-style' );

}
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );

// ENQUEUE SCRIPTS

function enqueue_scripts() {

    /** REGISTER HTML5 Shim **/
    wp_register_script( 'html5-shim', 'http://html5shim.googlecode.com/svn/trunk/html5.js', array( 'jquery' ), '1', false );
    wp_enqueue_script( 'html5-shim' );

    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'modernizr', THEME_DIR . 'js/modernizr.js', 'jquery');
    wp_enqueue_script( 'cycle2', THEME_DIR . 'js/jquery.cycle2.min.js', 'jquery');

}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

// ADD WP NAV MENUS

register_nav_menu('primary', 'Main Nav');