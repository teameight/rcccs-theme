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
        var $header, $window, $doc, $nav, $logo, $dscrollTop, $navul, $homeSlides, $offset, $winWidth, $extra, $pagerLeft, $pagerRight, $homeH;
        $header = $('header');
        $window = $(window);
        $doc = $(document);
        $nav = $('#nav');
        $navul = $('nav ul');
        $logo = $('.logo');
        $logomini = $('.logo-mini');
        $pagerLeft = $('.pager-left');
        $pagerRight = $('.pager-right');

        var $head_full_height, $trigger, $trigger2, $head_anim_speed;
        $head_full_height = $header.height();
        $trigger = $nav.offset().top + 1;
        $trigger2 = $trigger + 15;
        $head_anim_speed = 300;

        // ANIMATE HEADER

        function headanim_stage1 ( scrolltoppos ) {

            if( $header.data('stage') == 0 && scrolltoppos > $trigger ){
                console.log( scrolltoppos + '|' + $trigger );
                $header.data('stage', 1);
                $logomini.fadeIn( $head_anim_speed );
            }

            if( scrolltoppos > $trigger){
                $logomini.show();
            }
            if( scrolltoppos > $trigger2 ){
                $header.data('stage', 2);

                $header.css({'position' : 'fixed', marginTop : '-' + $trigger2 + 'px' });
                $('#content').css({ paddingTop : $head_full_height + 'px' });
                
                $nav.stop().animate({paddingBottom: '0'}, $head_anim_speed );
            }
            console.log( 'headanim_stage1' + '|' + $header.data('stage') );

        }

        $header.data('stage', 0);

        if ($window.width() > 849) {
            $header.data('size', 2);
        }

        if($header.length){
            //$header.after('<div id="readout"></div>');
            $window.scroll(function(){
                var $headheight;
                $dscrollTop = $doc.scrollTop();
                
                if( $dscrollTop < $trigger && $header.data('stage') ){
                    
                    $header.data('stage', 0);
                    $header.css({'position' : 'relative', marginTop : '0' });
                    $('#content').css({paddingTop : '0'});
                    $logomini.hide();
                    $nav.stop().animate({paddingBottom: '1rem'}, $head_anim_speed);

                } else if( $header.data('stage') < 2 ){
                    headanim_stage1( $dscrollTop );
                }

                console.log($header.data('stage'));
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
            //console.log(o);
            $winWidth = $window.width();
            $homeH = $homeSlides.css('height');

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
                $pagerLeft.css({
                    'left': $offset
                }).fadeIn();
                $pagerRight.css({
                    'left': $offset + 775
                }).fadeIn();

            }
            // for med breakpoint

            // for sm breakpoint
        });

        $homeSlides.cycle({
            slides: '> div',
            fx: 'carousel',
            carouselVisible: 1.5,
            speed: 1100,
            carouselFluid: true
        });

        $homeSlides.on('cycle-next', function(e, o) {
            //console.log(o.currSlide);
        });

        $(window).load(function() {
            $homeSlides.fadeIn('slow');
        });

        $pagerLeft.click(function() {
            $homeSlides.cycle('prev');
        });

        $pagerRight.click(function() {
            $homeSlides.cycle('next');
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
                speed: 700,
                carouselFluid: true,
                carouselOffset: $offset
            });

            $homeSlides.fadeIn('slow');

        });

        // toggle shortcode
        $(".toggle_container").hide();
        $("h4.trigger").click(function(){
            $(this).toggleClass("active").next().slideToggle("normal", function() {
                if( $(this).is(":hidden") ){
                    var $thisref = $(this).find('.side-matter-ref'),
                        count = $thisref.length;
                    if( count ) {
                        $thisref.each( function () {
                            var id = $(this).attr('id').replace("ref-","");
                            var note = '#note-' + id; // Sidenote
                            $(note).hide();
                            if (--count == 0) rccsPlaceNotes();
                        });
                    }
                } else {
                    rccsPlaceNotes();                    
                }
            });
            return false; //Prevent the browser jump to the link anchor
        });

 // Definition With Toggle and positioning fix
        function rccsPlaceNotes() {
            var offsetcumulate = 0;
            $('a.side-matter-ref').each( function(){
                if($(this).is(":visible") ){
                    var id = $(this).attr('id').replace("ref-","");
                    var ref = '#ref-' + id; // Reference anchor
                    var note = '#note-' + id; // Sidenote
                    $(note).show();
                    var refPosition = $(ref).offset().top;
                    var notePosition = $(note).offset().top; // Position of sidenote
                    var noteMargin = parseInt($(note).css('margin-top')); // this was the one detail that fixed everyhting after 4 hours!!!
                    var noteOffset = refPosition - notePosition + noteMargin; // Get current offset between reference and note, minus noteAdjust
                    var finalOffset = ( noteOffset < 0 || notePosition < 0 ) ? 0 : noteOffset; // If offset is negative, set to 0 (prevents layout problems)
                    offsetcumulate += finalOffset
                    $(note).css('marginTop', finalOffset); // Position note
                    console.log(refPosition + "|" + notePosition + "||" + noteOffset + "|" + finalOffset + "|" + offsetcumulate);
                }
            });
        }       

        rccsPlaceNotes();
 
        if($('.side-matter-note').length) {
            $('.side-matter-note').each( function () {
                var id = $(this).attr('id').replace("note-","");
                if( $('#ref-'+id).closest('.toggle_container').is(":hidden") ) {
                    $(this).hide();
                    //console.log($(this).html());
                }
            });
        }




        // WHO WE ARE toggle

        if($('.who-we-are').length) {
        function isOdd(a, b) {
            if (a % b === 0) return false;
            else return true;
        }
        var wrapper = $('.who-we-are'),
            boxes = wrapper.children(),
            boxSize = boxes.first().outerWidth(true),
            w = wrapper.outerWidth(true),
            breakat = Math.floor(w / boxSize),
            aboutWrap = '<li class="about-wrapper"></li>';


        boxes.removeClass('edge')
            .filter(':nth-of-type(' + breakat + 'n)')
            .addClass('edge')
            .after(aboutWrap);

        if (isOdd(boxes.length, breakat)) {
            boxes.last().addClass('edge').after(aboutWrap);
        }


        $(window).smartresize(function () {
            var w = wrapper.outerWidth(true),
                rebreakat = Math.floor(w / boxSize),
                aboutWrappers = $('.about-wrapper');

            aboutWrappers.each(function() {
                $(this).remove();
            });

                boxes.removeClass('edge')
                    .filter(':nth-of-type(' + rebreakat + 'n)')
                    .addClass('edge')
                    .after(aboutWrap);
                if (isOdd(boxes.length, rebreakat)) {
                    boxes.last().addClass('edge').after(aboutWrap);
                }
        });

        $('.staff-img').click(function () {
            var $this = $(this),
                clone = $this.children('.about-staff').clone(),
                aboutActive = $('.about-wrapper.active');

            // if this image's about is open, close it
            if ($this.hasClass('open')) {
                aboutActive.slideToggle()
                    .removeClass('active')
                    .children().slideToggle("fast", function(){
                        $(this).remove();
                        $('html, body').animate({
                            scrollTop: $this.offset().top - 220
                        }, 500);
                    });
                $this.removeClass('open').siblings().removeClass('fade');

                // if another image's about is open, switch them
            } else if ($this.siblings().hasClass('open')) {

                // if this is an edge but it's not open
                if ($this.hasClass('edge')) {

                    // if it's the same edge, swap the html
                    if ($this.next().hasClass('active')) {
                        $('.open').removeClass('open');
                        clone.addClass('clone');

                        $this.addClass('open');
                        aboutActive.children().animate({
                            opacity: 0
                        })
                            .after(clone).next().fadeIn("fast", function () {
                                $('.clone').removeClass('clone');
                                aboutActive.children().first().remove();
                                $('html, body').animate({
                                    scrollTop: $this.offset().top - 220
                                }, 500);
                            });
                    }
                    // if not, then close the active, empty it, and open the right one
                    else {
                        aboutActive.slideToggle()
                            .removeClass('active')
                            .children().remove();
                        $('.open').removeClass('open');
                        clone.show();
                        $this.addClass('open').next('.about-wrapper').addClass('active').append(clone).slideToggle(700, function() {
                            $('html, body').animate({
                                scrollTop: $this.offset().top - 220
                            }, 500);
                        });
                    }
                }

                // if it's the same edge, swap the about-staff
                else if ($this.nextAll('.edge').first().next().hasClass('active')) {
                    $('.open').removeClass('open');
                    clone.addClass('clone');

                    $this.addClass('open');
                    aboutActive.children().animate({
                        opacity: 0
                    })
                        .after(clone).next().fadeIn("fast", function () {
                            $('.clone').removeClass('clone');
                            aboutActive.children().first().remove();
                            $('html, body').animate({
                                scrollTop: $this.offset().top - 220
                            }, 500);
                        });
                }

                // if different, toggle and remove the open one, add and toggle new
                else {
                    $('.open').removeClass('open');
                    aboutActive.slideToggle().removeClass('active')
                        .children().slideToggle("fast", function() {
                            $(this).remove();
                        });
                    if ($this.hasClass('edge')) {
                        clone.show();
                        $this.next('.about-wrapper').addClass('active').append(clone).slideToggle(700, function() {
                            $('html, body').animate({
                                scrollTop: $this.offset().top - 220
                            }, 500);
                        });
                    } else {
                        clone.show();
                        $this.nextAll('.edge').first().next('.about-wrapper').addClass('active').append(clone).slideToggle(700, function() {
                            $('html, body').animate({
                                scrollTop: $this.offset().top - 220
                            }, 500);
                        });
                    }
                    $this.addClass('open').siblings('.staff-img').addClass('fade');
                }
                // unfade this img, fade all others
                $this.removeClass('fade').siblings('.staff-img').addClass('fade');

                // if no about is open, find the closest edge, append the about and open the wrapper
            } else {

                // if this img is the edge
                if ($this.hasClass('edge')) {
                    clone.show();
                    $this.next('.about-wrapper').addClass('active').append(clone).slideToggle(700, function() {
                        $('html, body').animate({
                            scrollTop: $this.offset().top - 220
                        }, 500);
                    });
                } else {
                    clone.show();
                    $this.nextAll('.edge').first().next('.about-wrapper').addClass('active').append(clone).slideToggle(700, function() {
                        $('html, body').animate({
                            scrollTop: $this.offset().top - 220
                        }, 500);
                    });
                }
                $this.addClass('open').siblings('.staff-img').addClass('fade');
            }
        });
        }
    });
})( jQuery );