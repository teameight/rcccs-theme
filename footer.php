</div> <!--End Content-->
<!-- Begin Footer -->
<footer class="footer" role="contentinfo">
    <div class="wrap">
        <div class="g g-half">
            <div class="gi">
                <?php if(is_page('contact')) {
                    echo '<h4><div class="icon referral"></div>Contact Us</h4>';
                    gravity_form(1, false, true, false, false, true);
                }
                else { ?>
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, magni, rem sint itaque cumque quas enim consequuntur ut</p>
                    <div class="contact-links lf">
                        <a href="mailto:hello@rivercityccs.com"><div class="icon email"></div><span>hello@rivercityccs.com</span></a>
                        <a href="#"><div class="icon phone"></div><span>(804) 230-0999</span></a>
                        <a href="<?php echo get_bloginfo('url'); ?>/contact"><div class="icon map"></div><span>View our locations</span></a>
                    </div>
                <?php } ?>
            </div>
            <div class="gi">
                <div class="contact-links rt">
                    <a href="<?php echo get_bloginfo('url'); ?>/referral"><div class="icon referral"></div><span>Referral</span></a>
                    <?php if(!is_page('contact')) { ?>
                        <a href="<?php echo get_bloginfo('url'); ?>/category/careers"><div class="icon careers"></div><span>Careers</span></a>
                        <a href="<?php echo get_bloginfo('url'); ?>/category/resources"><div class="icon resources"></div><span>Resources</span></a>
                        <a href="https://www.facebook.com/RiverCityCCS"><div class="icon fb"></div><span>Connect on Facebook</span></a>
                        <a href="https://twitter.com/RiverCityCCS"><div class="icon twi"></div><span>Connect on Twitter</span></a>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- End Footer -->
<?php wp_footer(); ?>
</body>
</html>