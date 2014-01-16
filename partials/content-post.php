<time datetime="<?php the_time('c'); ?>" class="<?php echo (!empty($cat) ? $cat->slug : ''); ?>"><?php the_time('F j, Y'); ?></time>
<h2 class="alpha <?php echo $cat->slug; ?>"><?php the_title(); ?></h2>

<?php
if ( has_post_thumbnail() ) {
	the_post_thumbnail('blog-feat');
} 
the_content();
?>
