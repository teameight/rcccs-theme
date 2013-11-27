<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>
    <div class="subhead bg-3">
        <div class="wrap">
            <?php $cat = get_the_category(); $cat = reset($cat); ?>
            <h3><?php echo $cat->name ?></h3>
            <h4 class="font-secondary"><?php echo category_description($cat->cat_ID); ?></h4>
        </div>
    </div>
    <div class="main">
        <div class="wrap">
            <div class="g-3-1">
                <div class="gi g3">
                    <div class="wrap">
                        <div class="g-3-1">
                            <div class="g3">
                                <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time>
                                <h2 class="alpha">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>

                                <img src="<?php echo THEME_DIR; ?>/images/fpo_16x9.png" alt="16x9 Image">
                                <p><a href="#">Aliquam erat volutpat.</a> Mauris vulputate scelerisque feugiat. Cras a erat a diam venenatis aliquam. Sed tempus, purus ac pretium varius, risus orci sagittis purus, quis auctor libero magna nec magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eros dolor, rutrum eu sollicitudin eu, commodo at leo. Suspendisse potenti. Sed eu nibh sit amet quam auctor feugiat vel et risus. Maecenas eu urna adipiscing neque dictum mollis suscipit in augue. Praesent pulvinar condimentum sagittis. Maecenas laoreet neque non eros consectetur fringilla. Donec vitae risus leo, vitae pharetra ipsum. Sed placerat eros eget elit iaculis semper. Aliquam congue blandit orci ac pretium.</p>
                            </div>
                            <div class="g1">
                                <a class="cat stories">Personal Stories</a>
                                <a class="cat news">News</a>
                                <a class="cat resources">Resources</a>
                                <a class="cat staff">Staff Profiles</a>							</div>
                        </div>
                    </div>				</div><!--end l-main-->

                <div class="gi g1">
                    <a class="cat stories">Personal Stories</a>
                    <a class="cat news">News</a>
                    <a class="cat resources">Resources</a>
                    <a class="cat staff">Staff Profiles</a>				</div><!--end l-sidebar-->
            </div><!--end g-3-1-->
        </div><!-- end wrap -->
    </div><!-- end main -->
<?php endwhile; ?>
<?php get_footer(); ?>