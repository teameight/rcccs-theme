/**
 * Created by administrator on 12/1/13.
 */
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
            }

        });

    });

//    HEADER ANIMATION
    jQuery(document).ready(function($j) {
        var $header = $j('.no-touch header'),
            $window = $j(window),
            $doc = $j(document),
            $nav = $j('nav'),
            $logo = $j('.logo'),
            $pricea = '';
        // ANIMATE HEADER

        $header.data('size', 0);

//        $pricea.hover(
//            function () {
//                $j(this).addClass('headerPBhover');
//                $j('.spriteAnimation').css('background-position', '0 -2000px');
//            },
//            function () {
//                $j(this).removeClass('headerPBhover');
//                if($j(this).hasClass('small')){
//                    $j('.spriteAnimation').css('background-position', '-2240px 0');
//                }else{
//                    $j('.spriteAnimation').css('background-position', '0 0');
//                }
//            }
//        );

        if($header.length){
            //$header.after('<div id="readout"></div>');
            $window.scroll(function(){
                if( $j(window).width() > 1009 ) {
                    $dscrollTop = $doc.scrollTop();
                    if($doc.scrollTop() < 30 && $header.data('size') < 3) { // 0 STAGE
                        if (!$logo.is(':animated')) {
                            $logo.css({'top': 30 - $dscrollTop +'px'});
                        }
                        $header.css({'top': '0px'});
                        if($header.data('size') == 2){
                            $header.data('size', 1);
                            $borderholder.stop().animate({
                                width: '700px',
                                right: '115px',
                                top: '74px'
                            },200);
                            $anim.spriteAnimation('rewind');
                            $pricea.stop().trigger('mouseleave').addClass('small').animate({
                                top: '4px',
                                right: '-17px'
                            });
                            $navul.stop().animate({
                                right: '120px'
                            });
                        }
                    }
                    if($dscrollTop > 29 && $dscrollTop < 61 && $header.data('size') < 3) { // STAGE 1
                        $header.css({'top': 30 - $dscrollTop +'px'});
                    }
                    if($doc.scrollTop() > 60) { // STAGE 2
                        if($header.data('size') < 3) { // STAGE 1
                            if (!$logo.is(':animated')) {
                                $logo.css({'top': 60 - $dscrollTop +'px'}); // 60 instead of 30 to compensate for header movement
                            }
                        }
                        if($header.data('size') < 2) { //advance to STAGE 2
                            $header.data('size', 2);
                            $header.css({'top': '-30px'});
                            $borderholder.stop().animate({
                                width: '753px',
                                right: '62px',
                                top: '73px'
                            },200);
                            $anim.spriteAnimation('play');
                            $pricea.stop().trigger('mouseleave').addClass('small').animate({
                                top: '-17px',
                                right: '-58px'
                            });
                            $navul.stop().animate({ right: '62px' });
                            $header.addClass('sticky');
                        }
                        if($doc.scrollTop() > 100 && $header.data('size') < 3) { // advance to STAGE 3
                            $header.data('size', 3);
                            $subhead.slideUp(200);
                            $logo.stop().animate({top: '-169px'}, 400, function() { $minilogo.stop().fadeIn( 200 ); });
                            $borderholder.stop().animate({
                                width: '902px',
                                right: '62px',
                                top: '73px'
                            },200);
                        }
                    } else {
                        if($header.data('size') == 3) { //switch to big (STAGE 1)
                            $header.data('size', 1 );
                            $subhead.slideDown(200);
                            if($dscrollTop < 30 ) {
                                $header.css({'top': '0px'});
                                $logo.stop().animate({top: '30px'}, function () { $header.data('size', 1 ); });
                            } else {
                                $header.css({'top': 30 - $dscrollTop +'px'});
                                $logo.stop().animate({'top': 60 - $dscrollTop +'px'}, function () { $header.data('size', 1 ); });
                            }
                            $j("div#main").css({'marginTop': '0'});
                            $borderholder.stop().animate({
                                width: '700px',
                                right: '115px',
                                top: '74px'
                            },200);
                            $nav.stop().animate({paddingTop: '30px'},200);
                            $anim.spriteAnimation('rewind');
                            $pricea.stop().trigger('mouseleave').removeClass('small').animate({
                                top: '4px',
                                right: '-17px'
                            });
                            $navul.stop().animate({
                                right: '120px'
                            });
                            $minilogo.stop().fadeOut( 200 );
                            $header.removeClass('sticky');
                        }
                        if($header.data('size') == 8) { //down to STAGE 2
                            $header.data('size', 1 );
                            $header.css({'top': 30 - $dscrollTop +'px'});
                            $j("div#main").css({'marginTop': '0'});
                            $anim.spriteAnimation('rewind');
                            $pricea.stop().trigger('mouseleave').addClass('small').animate({
                                top: '4px',
                                right: '-17px'
                            });
                            $navul.stop().animate({
                                right: '120px'
                            });
                            $header.removeClass('sticky');

                        }
                    }
                    //reporting
//			$headsize = $header.data('size');
//			$j("#readout").html( $dscrollTop + ' | ' + $headsize );
                }
            });
            $window.resize(function(){
                if( ($nav.css("padding-top") == '30px' || $header.css("top") == '-30px') ) {
                    if( $window.width() < 1010 ){
                        $nav.stop().removeAttr('style');
                        $header.removeAttr('style');
                        $borderholder.stop().removeAttr('style');
                        $minilogo.show();
                    }
                }
            });
        }// if if header (no-touch)

        $j('.mininav select').change(function() {
            if($j(this).val() != 'null') {
                window.location.href = $j(this).val();
            }
        });


    });
})( jQuery );