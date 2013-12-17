/**
 * Created by administrator on 12/1/13.
 */
(function($,sr){

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

(function ( $ ) {
    $(function(){
        //    VARS
        var def, text, ref, num, id, header;
        def = $(".side-matter-ref");
        text = $(".side-matter-text");
        ref = text.find("dt");
        header = $("header");

        //    ACTIVATE REFS on DEF HOVER
        def.hover(function() {
                id = $(this).attr('id');
                num = id.split('-');
                num = num[1];

                $('#note-'+num).find('dt').addClass('hover');
            },
            function() {
                $('#note-'+num).find('dt').removeClass('hover');
            });

        def.click(function(e) {
            e.preventDefault();
            id = $(this).attr('id');
            num = id.split('-');
            num = num[1];

            $('.side-matter-note dt.clicked').removeClass('clicked');
            $('#note-'+num).find('dt').addClass('clicked');
        });

        ref.click(function(e) {
            if ($(this).hasClass('clicked'))
            {
                $(this).removeClass('clicked');
            }
            else
            {
                $(this).addClass('clicked');
            }
        });
//    SERVICES SUBNAV ANIMATION
        var $selector = $('.subnav');

        $('.nolink a').click(function(e){
            e.preventDefault();
            if ( $selector.hasClass('show') )
            {
                $selector
                    .data('oHeight',$selector.height())
                    .css('height', 0)
                    .data('nHeight',$selector.height())
                    .height($selector.data('oHeight'))
                    .animate({height: $selector.data('nHeight')},400)
                    .removeClass('show');
                $('.nolink').removeClass('show');
            }
            else
            {
                $selector
                    .data('oHeight',$selector.height())
                    .css('height','auto')
                    .data('nHeight',$selector.height())
                    .height($selector.data('oHeight'))
                    .animate({height: $selector.data('nHeight')},400)
                    .addClass('show');
                $('.nolink').addClass('show');
            }

        });


//    HEADER ANIMATION
        var $header, $window, $doc, $nav, $logo, $dscrollTop, $navul, $homeSlides, $offset, $winWidth, $extra;
        $header = $('header');
        $window = $(window);
        $doc = $(document);
        $nav = $('nav');
        $navul = $('nav ul');
        $logo = $('.logo');
        // ANIMATE HEADER

        $header.data('size', 0);

        if($header.length){
            //$header.after('<div id="readout"></div>');
            $window.scroll(function(){
                var $headheight;
                if ($window.width() > 849) {
                    $dscrollTop = $doc.scrollTop();
                    if ($dscrollTop >= 100) {
                        if ($header.data('size') == 0) { // FULL SIZE
                            $header.data('size', 1); // SET STAGE 1
                            $logo.animate({width: '25%'}, 400);
                            $navul.animate({margin: 0}, 400).addClass('shrink');
                        }
                    }
                    else {
                        if ($header.data('size') == 1) {
                            $header.data('size', 0); // SET STAGE 1
                            $logo.animate({width: '40%'}, 400);
                            $navul.animate({margin: '1rem'}, 400).removeClass('shrink');
                        }
                    }
                }
            });
            $window.resize(function(){
                //TODO this
            });
        }// if if header (no-touch)

        $('.mininav select').change(function() {
            if($(this).val() != 'null') {
                window.location.href = $(this).val();
            }
        });

//  HOME SLIDER POSITIONING

        // calculate window width
        $homeSlides = $('.home-slides');

        $doc.on('cycle-post-initialize', '.home-slides', function(e, o){
            console.log(o);
            $winWidth = $window.width();

            // for full breakpoint
            if ($winWidth >= 850) {
                // subtract 850 from window
                $extra = $winWidth - 850;
                // divide that by 2
                $offset = $extra / 2;
                // apply that to carousel-offset for home-slides
                o.carouselOffset = $offset;
                //            o.fx = 'carousel';
                //            o.slides = '> div';
            }
            // for med breakpoint

            // for sm breakpoint
        });

        $homeSlides.cycle({
            slides: '> div',
            fx: 'carousel',
            carouselVisible: 1.5,
            speed: 700,
            carouselFluid: true,
            pauseOnHover: true
        });


        // resize, uses smartresize
        $window.smartresize(function() {
            $winWidth = $window.width();
            $extra = $winWidth - 850;
            $offset = $extra / 2;

            $homeSlides.cycle('destroy');
            $homeSlides.cycle({
                slides: '> div',
                fx: 'carousel',
                carouselVisible: 1.5,
                speed: 500,
                carouselFluid: true,
                pauseOnHover: true,
                carouselOffset: $offset
            });
        });

        // toggle shortcode
        $(".toggle_container").hide();
        $("h2.trigger").click(function(){
            $(this).toggleClass("active").next().slideToggle("normal");
            return false; //Prevent the browser jump to the link anchor
        });
    });
})( jQuery );