<?php

define("THEME_DIR", get_template_directory_uri());
/*--- REMOVE GENERATOR META TAG ---*/
remove_action('wp_head', 'wp_generator');

// ENQUEUE STYLES

function enqueue_styles() {

    /** REGISTER css/screen.cs **/
    wp_register_style( 'screen-style', THEME_DIR . '/scss/style.css', array(), '1', 'all' );
    wp_enqueue_style( 'screen-style' );

}
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );

// ENQUEUE SCRIPTS

function enqueue_scripts() {

    /** REGISTER HTML5 Shim **/
    wp_register_script( 'html5-shim', 'http://html5shim.googlecode.com/svn/trunk/html5.js', array( 'jquery' ), '1', false );
    wp_enqueue_script( 'html5-shim' );

    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'jquery-effects-core' );
    wp_enqueue_script( 'modernizr', THEME_DIR . '/js/modernizr.js', 'jquery' );
    wp_enqueue_script( 'cycle2', THEME_DIR . '/js/cycle2.js', 'jquery' );
    wp_enqueue_script( 'cycle2-center', THEME_DIR . '/js/cycle2.center.js', 'jquery' );
    wp_enqueue_script( 'carousel', THEME_DIR . '/js/carousel.js', 'jquery' );
    wp_enqueue_script( 'acf-map', THEME_DIR . '/js/acf-map.js', 'google-maps' );
    wp_enqueue_script( 'rcccs', THEME_DIR . '/js/rcccs.js', 'jquery', true );
    wp_enqueue_script( 'google-maps', "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false", 'jquery' );

}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

// ADD WP NAV MENUS

register_nav_menu('primary', 'Main Nav');

// ADD SIDEBAR

function rcs_widgets_init() {

    register_sidebar( array(
        'name' => 'Services right sidebar',
        'id' => 'serv_right_1',
        'before_widget' => '<div>',
        'after_widget' => '</div>',
        'before_title' => '<h2>',
        'after_title' => '</h2>',
    ) );
}
add_action( 'widgets_init', 'rcs_widgets_init' );

// Custom template tags for this theme.
require get_template_directory() . '/inc/template-tags.php';

//toggle shortcode
function toggle_shortcode( $atts, $content = null ) {
    extract( shortcode_atts(
        array(
            'title' => 'Click To Open'
        ),
        $atts ) );
        $content = apply_filters('the_content', $content);
    return '<h2 class="trigger"><a href="#">'. $title .'</a></h2><div class="toggle_container">' . do_shortcode($content) . '</div>';
}
add_shortcode('toggle', 'toggle_shortcode');