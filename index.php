<?php
get_header();
?>

<div class="wrap">
    <div class="cycle-slideshow"><div class="block block-slide-txt">
            <a href="http://www.fillerati.com" class="inner">
                <div class="slide">
                    <div class="slide-text">
                        <h2 class="headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. (72 characters)</h2>
                    </div>
                    <div class="slide-thumb">
                        <img src="<?php echo THEME_DIR; ?>/images/fpo_square.png" alt="Square Thumbnail">
                    </div>
                </div>
            </a>
        </div></div>
</div>
    <div class="main">
        <div class="wrap">
            <h2 class="alpha">Comprehensive Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     		<?php get_template_part('partials/section', 'services'); ?>
        </div>
    </div><!--End main-->
    <div class="bg section">
        <div class="wrap">
            <div class="g-2up">
                <div class="gi">
                    <h2 class="alpha">Who We Are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="" class="more">Find out more about our staff &gt;&gt;</a>
                </div>
                <div class="gi">
                    <h2 class="alpha">The Community Blog</h2>
                    <div class="block block-headline">
                        <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time>						<a href="#"></a><a class="cat stories">Personal Stories</a>
                        <a href="#"><h2 class="headline alpha">Headline: Lorem Ipsum Dolor Amet Sit</h2></a>
                    </div>					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <a class="more">Read More &gt;&gt;</a>				</div>
            </div>
        </div>
    </div>

<?php
get_footer();
?>