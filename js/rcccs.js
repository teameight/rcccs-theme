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


//    HEADER ANIMATION
        var $header, $window, $doc, $nav, $logo, $pricea, $dscrollTop, $borderholder, $navul;
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
                if( $window.width() > 1009 ) {
                    $dscrollTop = $doc.scrollTop();
                    if($doc.scrollTop() < 30 && $header.data('size') < 3) { // 0 STAGE
                        $header.css({'top': '0px'});
                        if($header.data('size') == 2){
                            $header.data('size', 1);
                        }
                    }
                    if($dscrollTop > 29 && $dscrollTop < 61 && $header.data('size') < 3) { // STAGE 1
                        //
                    }
                    if($doc.scrollTop() > 60) { // STAGE 2
                        if($header.data('size') < 3) { // STAGE 1
                            $header.addClass('sticky');
                            //
                        }
                        if($header.data('size') < 2) { //advance to STAGE 2
                            $header.data('size', 2);
                            $navul.animate({'margin': '0'});
                            $logo.animate({'width': '25%'});
                        }
                        if($doc.scrollTop() > 100 && $header.data('size') < 3) { // advance to STAGE 3
                            $header.data('size', 3);
                        }
                    } else {
                        if($header.data('size') == 3) { //switch to big (STAGE 1)
                            $header.data('size', 1 );
                            if($dscrollTop < 30 ) {
                                $header.css({'top': '0px'});
                            } else {
                                $header.css({'top': 30 - $dscrollTop +'px'});
                            }
                            $("div#main").css({'marginTop': '0'});
                            $header.removeClass('sticky');
                        }
                        if($header.data('size') == 8) { //down to STAGE 2
                            $header.data('size', 1 );
                            $header.css({'top': 30 - $dscrollTop +'px'});
                            $("div#main").css({'marginTop': '0'});
                            $header.removeClass('sticky');

                        }
                    }
                    //reporting
//			$headsize = $header.data('size');
//			$("#readout").html( $dscrollTop + ' | ' + $headsize );
                }
                console.log($dscrollTop);
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

        $('.mininav select').change(function() {
            if($(this).val() != 'null') {
                window.location.href = $(this).val();
            }
        });


    });
})( jQuery );